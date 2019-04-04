
var step = 0;
var titles= [
  'Choose the pasta type', //titles [0]
  'Weight it', // this is 1
  'Boil water',// 2
  'Drain it ',// 3
  'press go',//4
  'dont die'//5

];
$(function(){
  $("#stepinfo, section, footer, .prev").hide();

$('body').css('background','lightblue')
$('body').css('font-size','20px')
$('body').css('text-align','center')
$('body').css('text-color','red')



});
$('.start').on('click', function(){
  //do stuff when the button is clicked
  $('.intro').hide();
  //$('.start').hide;
  $('footer, #stepinfo').show();
  step = 1;
  $('#step'+step).show();
  //set the title for our current step
  $('#stepinfo').text('Step '+ step+': '+titles[step-1]);


 $('.next').on('click',function(){

  //$('#step'+step).hide();
//step++;
//$('#step'+step).show();
  //$('#stepinfo').text('Step '+ step+': '+titles[step-1]);
$('#step'+step).hide();
step++;
if (step== 2) {
  $('.prev').show();
}
if (step == 5) {
  $('.next').hide();
  $('#final').html('We are done! <strong> Start again? </strong>');
  console.log("done");
}


if (step <= 5) {
    $('#step'+step).show();
  $('#stepinfo').text('Step '+ step+': '+titles[step-1]);
} else {
step--;
$('#step'+step).show();

}
 });



})


//previous
$('.prev').on('click',function(){

 //$('#step'+step).hide();
//step++;
//$('#step'+step).show();
 //$('#stepinfo').text('Step '+ step+': '+titles[step-1]);
$('#step'+step).hide();
step--;
if (step== 1) {
 $('.prev').hide();
} else {
  $('.next').show();
}

if (step == 5) {
 $('.next').hide();
 
 //$('#final').text('We are done! <strong> Start again? </strong>');
}


if (step >= 1) {
   $('#step'+step).show();
 $('#stepinfo').text('Step '+ step+': '+titles[step-1]);
} else {
step--;
$('#step'+step).show();

}
});

//css button w3schools.com

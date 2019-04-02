
var step = 0;
var titles= [
  'Prepare for takeoff', //titles [0]
  'Put seatbelt on', // this is 1
  'Turn on engine',// 2
  'Lights on ',// 3
  'press go',//4
  'dont die'//5

];
$(function(){
  $("#stepinfo, section, footer, .prev").hide();

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
}


if (step >= 1) {
   $('#step'+step).show();
 $('#stepinfo').text('Step '+ step+': '+titles[step-1]);
} else {
step--;
$('#step'+step).show();

}
});

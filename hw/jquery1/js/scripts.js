
var step = 0;
var titles= [
  'Prepare for takeoff', //titles [0]
  'Put seatbelt on'
  'Turn on engine'
  'Lights on '
  'press go'
  'dont die'

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
  $('#stepinfo').text('Step '+ step+: titles[step-1]);


 $('.next').on('click',function(){
   $('#step'+step).hide();
step++;
$('#step'+step).show();
  $('#stepinfo').text('Step '+ step+: titles[step-1);

 });



})

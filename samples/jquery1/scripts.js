$(function(){
//alert ("jquery loaded!")
});
//click or mouseover or mouseleave
$('.hide').on('click',function(){
 $('#myimage').hide();
 $('#actiotitle').text('Image is hidden');
 $('#actiotitle').css('color', 'red');
});

$('.show').on('click',function(){
 $('#myimage').show();
 $('#actiotitle').text('Image is showing');
 $('#actiotitle').css('color', 'green');
});

$('.done').on('click',function(){
  $('body').html('<h2>We are done!</h2> <p>See ya later! </p>')
});

$('.append').on('click',function(){
  var username = $('#testimput').val();
  $('#list').append('<li> '+username+' </li>');
});

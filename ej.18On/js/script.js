let contador = 0;

$(document).ready(function() {

$('#btn').on('click', colorear);
$('#btn').on('click', agrandar);

});

function colorear(){
  
  $(this).css('background-color', 'red');
  $(this).css('color', 'blue');


}

function agrandar(){
  if(contador == 3){
    $(this).off(agrandar);
  }
  $('#p1').css('font-size', '+=5px');  
  
  contador++;
}
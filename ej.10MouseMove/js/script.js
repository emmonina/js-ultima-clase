
$(document).ready(function(){

  $(document).mousemove(moverMouse);

});

function moverMouse(event)
{
  var x;
  x=$("#corx");
  x.text("coordenada x="+event.clientX);
  x=$("#cory");
  x.text("coordenada y="+event.clientY);
}
$(document).ready(function() {

  $("#btn1").click(ocultarTexto);

  $("#btn2").click(mostrarTexto);
});

function ocultarTexto() {
  $("#descripcion").fadeOut("slow");
}

function mostrarTexto() {
  $("#descripcion").fadeIn("fast");
}

var x;
$(document).ready(function() {
  $("#btn1").click(ocultarTexto);

  $("#btn2").click(mostrarTexto);
});

function ocultarTexto() {
  $("#descripcion").hide("slow");
}

function mostrarTexto() {
  $("#descripcion").show("fast");
}

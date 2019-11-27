$(document).ready(inicializarEventos);

function inicializarEventos() {
  $("#btn1").click(eliminarElementos);

  $("#btn2").click(restaurarLista);

  $("#btn3").click(anadirElementoFinal);

  $("#btn4").click(anadirElementoPrincipio);

  $("#btn5").click(eliminarElementoFinal);

  $("#btn6").click(eliminarElementoPrincipio);

  $("#btn7").click(eliminarPrimeroSegundo);

  $("#btn8").click(eliminarDosUltimos);
}

function eliminarElementos() {
  $("ul").empty();
}

function restaurarLista() {
  $("ul").html(
    "<li>Primer item.</li><li>Segundo item.</li><li>Tercer item.</li><li>Cuarto item.</li>"
  );
}

function anadirElementoFinal() {
  $("ul").append("<li>otro item al final</li>");
}

function anadirElementoPrincipio() {
  $("ul").prepend("<li>otro item al principio</li>");
}

function eliminarElementoFinal() {
  let cantidad = $("li").length;
  let elemento = $("li").eq(cantidad - 1);
  elemento.remove();
}

function eliminarElementoPrincipio() {
  let elemento = $("li").eq(0);
  elemento.remove();
}

function eliminarPrimeroSegundo() {
  // lt low than
  let items = $("li:lt(2)");

  items.remove();
}

function eliminarDosUltimos() {
  // great than
  let cantidad = $("li").length - 3;
  let items = $("li:gt(" + cantidad + ")");
  items.remove();
}

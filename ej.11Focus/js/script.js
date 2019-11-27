$(document).ready(function() {

  $("#buscar").focus(tomaFoco);

  $("#buscar").blur(pierdeFoco);
  
});

function tomaFoco() {
  x = $("#buscar").attr("value", "");
}

function pierdeFoco() {
  if ($("#buscar").text() === "") {
    x = $("#buscar").attr("value", "Buscar...");
  }
}

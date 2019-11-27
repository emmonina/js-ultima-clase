$(document).ready(function() {
  $("#btn1").click(colorear);
});

function colorear() {
  $("#parrafos p").each(resaltarParrafos);
}

function resaltarParrafos() {
  let parrafo = $(this);
  if (parrafo.text().length < 200) {
    parrafo.css("background-color", "#ff0");
  }
}

let persona = { nombre: "Juan", apellido: "Perez", edad: 30 };

$.each(persona, function(clave, valor) {

  console.log(clave + " = " + valor);

});






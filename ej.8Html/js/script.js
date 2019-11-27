$(document).ready(function() {
  $("#btn1").click(function() {
    let formulario =
      "<form>Ingrese nombre:<input type='text'id='nombre'><br>Ingrese clave:<input type='text' id='clave'><br><input type='submit' value='confirmar'></form>";

    $("#divFrm").html(formulario);
  });

  $("#btn2").click(function() {
    console.log($("#divFrm").html());
  });
});

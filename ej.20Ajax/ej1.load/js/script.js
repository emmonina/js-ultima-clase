$(document).ready(function() {
  $("#btn").click(function() {
    console.log("click");
    $("#info").load("archivo.txt");
    return false;
  });
});

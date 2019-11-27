$(document).ready(function() {
  $("#titulo").mouseover(function() {
    $("#titulo").attr("style", "color:green");
  });

  $("#titulo").mouseout(function() {
    $("#titulo").removeAttr("style");
  });

  $("#p1").hover(mouseIn, mouseOut);

  function mouseIn() {
    $(this).css("background-color", "#ff0");
  }
  function mouseOut() {
    $(this).css("background-color", "#fff");
  }
});

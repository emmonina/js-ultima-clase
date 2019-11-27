$(document).ready(function() {
  $("#btnLeft").click(function() {
    console.log("right");
    $(".cuadrado").animate({ left: "-=50px" });
  });
  $("#btnRight").click(function() {
    console.log("right");
    $(".cuadrado").animate({ left: "+=50px" });
  });
  $("#btnUp").click(function() {
    console.log("up");
    $(".cuadrado").animate({ top: "-=50px" }, 10000);
  });
  $("#btnDown").click(function() {
    console.log("down");
    $(".cuadrado").animate({ top: "+=50px" });
  });
});

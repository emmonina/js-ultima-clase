$(document).ready(function() {
  $("#parrafo0").text("soy <br>parrafo0");
  $("#parrafo1").text("soy \nparrafo1");

  document.getElementById("parrafo2").textContent = "soy \nparrafo2";
  document.getElementById("parrafo3").innerText = "soy \nparrafo3";

  console.log($("#parrafo0").text());
  console.log($("#parrafo1").text());
  console.log(document.getElementById("parrafo0").textContent);
  console.log(document.getElementById("parrafo0").innerText);
  console.log(document.getElementById("parrafo2").textContent);
  console.log(document.getElementById("parrafo2").innerText);
  console.log(document.getElementById("parrafo3").textContent);
  console.log(document.getElementById("parrafo3").innerText);

  console.log($("p").text());

  //$('p').text("Esto es un texto");
  $("#btn1").click(function() {
    alert($("#titulo2").text());
  });

  $("#btn2").click(function() {
    $("#titulo3").text($("#titulo2").text());
  });

  $("#btn3").click(function() {
    $("td").text("cambio");
  });
});

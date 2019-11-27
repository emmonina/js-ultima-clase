$(document).ready(function() {

  $(this).ajaxStart(function() {

    $('#divSpin').html("<img src='./images/spin.gif' alt='spinner' />");
    
  });

  $(this).ajaxStop(function(){
    $('#divSpin').empty();
  });

  $("#btn").click(function() {

    let div = $("#info");
    
    $("#info").load("pagina1.php",{nombre:'Juan', edad: 30});
    
  });
});

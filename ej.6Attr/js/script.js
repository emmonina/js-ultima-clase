$(document).ready(function () {

  $('#btn1').click(function () {

    $('th').attr('style', 'background-color:blue');
    /* var x = document.getElementsByTagName('th');
     
     for (elemento of x) {
       console.log(elemento);
       elemento.style.backgroundColor = 'blue';
     }*/

  });

  $('#btn2').click(function () {
    let propiedad = $('th').attr('style');
    console.log(propiedad);
  });

  $('#btn3').click(function () {
    let propiedad = $('#thCentral').attr('style');
    if (propiedad) {

      $('#thCentral').removeAttr('style');
    }
    
  });
  
});
//ejercicio 3: les doy una var a los botones del html y le doy la funcion de sumar y restar con un click
var btnSumar = document.getElementById("btn-sumar");
btnSumar.addEventListener("click", sumar);
var btnRestar = document.getElementById("btn-restar");
btnRestar.addEventListener("click", restar);

// les doy un var a los valores 1 y 2 del html y le doy la Función de sumar y mostrar el resultado
function sumar() {
  var num1 = parseInt(document.getElementById("valor1").value);
  var num2 = parseInt(document.getElementById("valor2").value);
  var resultadoSuma = num1 + num2;

  var resultadoSuma = (document.querySelector(".resultado").innerHTML =
    "La suma es " + resultadoSuma);
}

// les doy un var a los valores 1 y 2 del html y le doy la Función de restar y mostrar el resultado
function restar() {
  var num1 = parseInt(document.getElementById("valor1").value);
  var num2 = parseInt(document.getElementById("valor2").value);
  var resultadoResta = num1 - num2;
  // Si el resultado es negativo, mostrar 0
  if (resultadoResta < 0) {
    resultadoResta = 0;
  }
  var resultadoResta = (document.querySelector(".resultado").innerHTML =
    "La resta es " + resultadoResta);
}

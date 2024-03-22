// obtener la variable caja del html
var caja = document.getElementById("caja");

//  obtener las variables botones del html
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var btn5 = document.getElementById("btn-5");
var btn6 = document.getElementById("btn-6");

// funcion de las variables para hacer click y cambiar de color
btn1.addEventListener("click", function () {
  cambiarColor("#e53e3e");
});
btn2.addEventListener("click", function () {
  cambiarColor("#dd6b20");
});
btn3.addEventListener("click", function () {
  cambiarColor("#faf089");
});
btn4.addEventListener("click", function () {
  cambiarColor("#48bb78");
});
btn5.addEventListener("click", function () {
  cambiarColor("#81e6d9");
});
btn6.addEventListener("click", function () {
  cambiarColor("#d53f8c");
});

// funcion para que la caja cambie de color
function cambiarColor(color) {
  caja.style.backgroundColor = color;
}

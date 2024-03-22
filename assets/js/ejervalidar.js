let form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  limpiarErrores();
  let textNombre = document.querySelector(".textNombre").value;
  let textAsunto = document.querySelector(".textAsunto").value;
  let textMensaje = document.querySelector(".textMensaje").value;
  let resultado = validar(textNombre, textAsunto, textMensaje);
  if (resultado == true) {
    exito();
  }
});

function limpiarErrores() {
  document.querySelector(".resultado").innerHTML = "";
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}
//funcion de exito para que el texto se muestre en verde
function exito() {
  document.querySelector(".resultado").innerHTML =
    "Formulario pasó la validación";
}
//le doy var a los errores del html la funcion de validad los requisitos y mostrar en rojo en caso de error y un retorno hasta pasar la validacion
function validar(nombre, asunto, mensaje) {
  let pasamosLaValidacion = true;
  let validacionNombre = /[a-zA-Z]/gim;
  if (validacionNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML =
      "El nombre es requerido.";
    pasamosLaValidacion = false;
  }
  let validacionAsunto = /[a-zA-Z]/gim;
  if (validacionAsunto.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML =
      "El asunto es requerido.";
    pasamosLaValidacion = false;
  }
  let validaciónMensaje = /[a-zA-Z]/gim;
  if (validaciónMensaje.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML =
      "El mensaje es requerido.";
    pasamosLaValidacion = false;
  }
  return pasamosLaValidacion;
}

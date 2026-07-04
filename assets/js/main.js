/* Ejercicio 1 */
const bordeImg = document.querySelector("img")

bordeImg.addEventListener("click", function() {
    if (bordeImg.classList.contains("img-contenido")) {
        bordeImg.classList.remove("img-contenido")
    } else {
        bordeImg.classList.add("img-contenido")
    }
})


/* Ejercicio 2 */
function llevar() {
  const cantidad1 = document.querySelector("#sticker1").value;
  const cantidad2 = document.querySelector("#sticker2").value;
  const cantidad3 = document.querySelector("#sticker3").value;
  const total = Number(cantidad1) + Number(cantidad2) + Number(cantidad3);
  const aviso = document.querySelector("#cantidad-s");

  if (total <= 10) {
    aviso.innerHTML = `Llevas ${total} stickers.`;
  } else if (total > 10) {
    aviso.innerHTML = "¡Llevas demasiados stickers!";
  }
}

/* Ejercicio 3 */
function contraseña() {
  const pass1 = document.querySelector("#pass1").value;
  const pass2 = document.querySelector("#pass2").value;
  const pass3 = document.querySelector("#pass3").value;
  const valida = pass1 + pass2 + pass3;
  const feedback = document.querySelector("#pass-ingresada");

  if (valida == "911") {
    feedback.innerHTML = "Contraseña 1 correcta";
    feedback.style.color = "green";
  } else if (valida == "714") {
    feedback.innerHTML = "Contraseña 2 correcta";
    feedback.style.color = "green";
  } else {
    feedback.innerHTML = "¡Contraseña incorrecta!";
    feedback.style.color = "red";
  }
}


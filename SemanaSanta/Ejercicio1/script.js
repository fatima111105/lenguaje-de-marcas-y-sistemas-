let texto = document.getElementById("texto");
let boton = document.getElementById("boton");
boton.addEventListener("click", function () {

    if (texto.textContent === "aun no me has cambiado") {
        texto.textContent = "me has cambiado";
    } else {
        texto.textContent = "aun no me has cambiado";
    }



});
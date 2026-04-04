let boton = document.getElementById("boton");
let caja = document.getElementById("contenedor");
boton.addEventListener("click", cambiarColor);
function cambiarColor() {
    caja.style.backgroundColor = "red"
    caja.style.color = "white"
}


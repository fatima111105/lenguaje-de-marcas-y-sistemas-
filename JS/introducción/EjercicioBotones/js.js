let siapositivaActual = 0;
const carrusel = document.getElementsByClassName("imagen");
mostrarcarrusel();

function mostrarcarrusel() {
    for (let i = 0; i < carrusel.length; i++) {
        carrusel[i].style.display = "none";
    }
    carrusel[siapositivaActual].style.display = "block";
    siapositivaActual++;
    if (siapositivaActual >= carrusel.length) {
        siapositivaActual = 0;
    }
    setTimeout(mostrarcarrusel, 2000);
}
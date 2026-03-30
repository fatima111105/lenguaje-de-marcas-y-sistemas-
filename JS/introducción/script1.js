const tareas = document.getElementById("tareas");
const button = document.getElementById("agregar");
const entrada = document.getElementById("entrada");
button.addEventListener("click", agregar);
function agregar() {
    const ptarea = document.createElement("p");
    const nodo = document.createTextNode(entrada.value);
    ptarea.appendChild(nodo);
    tareas.appendChild(ptarea);
}
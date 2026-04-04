//let titulo = document.getElementById("titulo");
//console.log(titulo);
//let main=document.querySelector(".main-div");
//let lista =document.querySelectorAll("ul.lista li");
//console.log(lista);
//titulo.innerText="Semana Santa";






//-----------------Añadir cosas a una lista -------------------------------
let boton=document.getElementById("agregar");
let lista=document.getElementById("lista");
let input=document.getElementById("inputitem");
boton.addEventListener("click",function(){
    if(input.value.trim()!=="") {//trim() elimina los espacios en blanco al inicio y al final del texto
        let newItem=document.createElement("li");
        newItem.innerText=input.value;
        lista.appendChild(newItem);
        input.value="";
    }
}   
);
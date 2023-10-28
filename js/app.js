

// iniciacion de var, objetos, DOM
const nickInput=document.getElementById("nick");
const tamanoInput=document.getElementById("tamano");
const formEntrada=document.getElementById("formEntrada");

//funcion de evento
function comprobarForm(event){
    //comprobar cambios
    if(nickInput.value.length==0)
    {
        console.log("No hay nick");
        event.preventDefault();
    }
}

//Inicio de eventos

formEntrada.addEventListener('submit',comprobarForm);


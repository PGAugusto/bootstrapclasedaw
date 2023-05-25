/********************************************* */
/*****  funciones de validación                */


function validar(){
    let nombre=document.getElementById("nombre");
    let apellido=document.getElementById("apellido");
    let provincia=document.getElementById("provincia");
    let correcto=true;


    if (nombre.value.length==0){
        nombre.style.borderColor="red";
        nombre.placeholder="repiteloooo";
        document.getElementById("nombreMsgError").innerHTML="Campo obligatorio"
        correcto=false;
    }

    if (apellido.value.length==0){
        apellido.style.borderColor="red";
        apellido.placeholder="repiteloooo";
        document.getElementById("apellidoMsgError").innerHTML="Campo obligatorio"
        correcto=false;
    }
    if (provincia.value==0){
        provincia.style.borderColor="red";
        
        document.getElementById("provinciaMsgError").innerHTML="Elige prov"
        correcto=false;
    }
        return false;

}
/********************************************* */
/*****  funciones de validación                */


function validar(){
    // capturamos el nodo entero, no solo el value 
    let nombre=document.getElementById("nombre");
    let apellido=document.getElementById("apellido");
    let provincia=document.getElementById("provincia");
    // y así por cada campo de formulario
    
    // inicializamos una vble booleana a true
    // partimos de la hipótesis de que todo es correcto
    // pero si un campo (o varios) resultaran erróneos
    // la vble cambiaría a false 
    let correcto=true;


    if (nombre.value.length==0){ // condición para campo vacío (required)
        nombre.style.borderColor="red";  // un posible "marcaje": que el borde del input salga rojo
        nombre.placeholder="repiteloooo"; // otro: mensaje en placeholder modificado (no muy habitual)
        document.getElementById("nombreMsgError").innerHTML="Campo obligatorio" //otro: el div inferior muestra un mensaje de error
        correcto=false;  // y lo más importante: se señaliza como incorrecto el formulario completo
    }

    if (apellido.value.length==0){ // igual que nombre
        apellido.style.borderColor="red";
        apellido.placeholder="repiteloooo";
        document.getElementById("apellidoMsgError").innerHTML="Campo obligatorio"
        correcto=false;
    }
    if (provincia.value==0){ // en el caso de un select, hay una opción (la por defecto) con un valor inválido, en este caso, sup. que es 0
        provincia.style.borderColor="red";
        
        document.getElementById("provinciaMsgError").innerHTML="Elige prov"
        correcto=false;
    }
        return correcto; //se devuelve la variable señalizadora de posible error (es false si ha sido cierta alguna de las 
                         //     comprobaciones anteriores (una por cada campo validable)

}

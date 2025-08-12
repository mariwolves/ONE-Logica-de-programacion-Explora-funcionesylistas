let numeroSecreto = 0;
let intentos= 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}, ¡felicitaciones!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó el número
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', "El número secreto es menor, intenta nuevamente.");
        } else {
            asignarTextoElemento('p', "El número secreto es mayor, intenta nuevamente.");
        }
        intentos++;
        limpiarCaja();
    }
    return;    
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";    
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaDeNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', `Ya no quedan números por sortear, reinicia el juego.`);
    } else {
        //Si el número generado está incluido en la lista 
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //vuelve a llamar a la función para generar un nuevo número
        }  else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }   
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto)
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
condicionesIniciales();

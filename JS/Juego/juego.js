// TIMER 

let time = 0;


// PASAR PROGRESS BAR || no continúa

let progress = 50;

const progressBar = function() {
    let prg = document.getElementById("progress");
    prg.style.width = progress + "px";
}


let mostrarJuego = function() {
    let questionContainer = document.getElementsByClassName("questions-container");
    let choosingCategory = document.getElementsByClassName("choosing-category");
    let contenidoDePregunta = document.getElementsByClassName("contenido-de-preg");
    questionContainer[0].style.visibility = "visible";
    choosingCategory[0].style.visibility = "hidden";
    contenidoDePregunta[0].innerHTML = ` <h2 class="question-title"></h2>
    <button name="subject" type="submit" value="valor" class="lista-preguntas value"></button>
    <button name="subject" type="submit" value="valor" class="lista-preguntas value"></button>
    <button name="subject" type="submit" value="valor" class="lista-preguntas value"></button>
    <button name="subject" type="submit" value="valor" class="lista-preguntas value"></button>`;
    pasarRespuesta();
    pasarPregunta();
    comprobarRespuestas();

    setInterval(function(){
        time += 0.1;
        document.getElementById("counter").innerHTML = time.toFixed(1);
    }, 100); 
    
}

// ARRAY CON OBJETOS ADENTRO

let preguntas = [{
    Pregunta: "En qué año salió salió Borderlands 2",
    Respuestas: [
        2012,
        2010,
        2011,
        2013
    ],
    Respuesta: 2012,
}, {
    Pregunta: "Cuál de estos Quake va a salir remasterizado",
    Respuestas: [
        "Quake 1",
        "Quake 2",
        "Quake 3",
        "Quake 4"
    ],
    Respuesta: "Quake 2"
}];

// Necesito esta variable para usar en el bucle for e ir aumentándola porque el bucle por si solo
// se reproduce todo de una, así que si lo hago en una variable tengo un parámetro y lo manejo con ++

let numeroPregunta = 0;

// Función que mostraría la pregunta y la respuesta

const pasarPregunta = function() { // Funciona sin pasarRespuesta();
    let titulo = document.getElementsByClassName("question-title");
    titulo[0].innerHTML = preguntas[numeroPregunta].Pregunta;
    time = 0;
    pasarRespuesta(); 
    cambiarValue();
    numeroPregunta++;
    progressBar();
}


// PASAR RESPUESTA

const pasarRespuesta = function() {
    let listaPreguntas = document.getElementsByClassName("lista-preguntas");
    for (let i = 0; i < preguntas[numeroPregunta].Respuestas.length; i++) {
        listaPreguntas[i].innerHTML = preguntas[numeroPregunta].Respuestas[i];
    }
    
}

// CAMBIAR VALOR DE BOTONES

const cambiarValue = function() {
    let value = document.getElementsByClassName("value");
    for (let i = 0; i < preguntas[numeroPregunta].Respuestas.length; i++) {
        value[i].value = preguntas[numeroPregunta].Respuestas[i]; 
        value[i].onclick = function() {
            comprobarRespuestas(value[i].value);
        }
    }

}

// Comprobar Pregunta-Titulo y Respuesta(s)

let puntos = 0; // Tiene que ser global para que se vaya actualizando 

const comprobarRespuestas = function(respuesta) { // Funciona pero COMPROBAR
    // let opcionSeleccionada = document.querySelectorAll("button[type=submit]");
    // let respuesta = opcionSeleccionada.value;
    if (respuesta == preguntas[0].Respuesta) {
        puntos++;
        alert(`Bien tus puntos son ${puntos}`);
        progress+=50;
        
    } 

    if (respuesta == preguntas[1].Respuesta) {
        puntos++;
        alert(`Bien tus puntos son ${puntos}`);
        progress+=50;
    } 

}
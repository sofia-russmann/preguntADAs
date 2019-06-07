//======================
// SELECCIONAR CATEGORIA
// =====================
// 1. Mostrar las categorías guardadas en la base de datos.
const obtenerCategorias = function() {
    let categorias = ["Categoría 1", "Categoría 2", "Categoría 3"];
    return categorias; 
}
obtenerCategorias();

const mostrarCategorias = function() {
    let categorias = obtenerCategorias();
    for(let i = 0; i < categorias.length; i++) {
        let select = document.getElementById("categorias");
        select.innerHTML += `<option>${categorias[i]}</option>`;
    }
}
mostrarCategorias();

// ==============
// CREAR PREGUNTA
// ==============
// 1. Guardar en una variable el valor ("value") de la pregunta ingresada en el input.
const obtenerPregunta = function() {
    let pregunta = document.getElementById("pregunta").value;
    return pregunta;
}
obtenerPregunta();

// ============================
// ESCRIBIR RESPUESTAS POSIBLES
// ============================
// 1. Guardar las 4 respuestas ingresadas en un array.
let obtenerRespuestas = function() {
    let respuesta1 = document.getElementById("respuesta1").value;
    let respuesta2 = document.getElementById("respuesta2").value;
    let respuesta3 = document.getElementById("respuesta3").value;
    let respuesta4 = document.getElementById("respuesta4").value;
    let respuestasPosibles = [respuesta1, respuesta2, respuesta3, respuesta4];
    return respuestasPosibles;
}
obtenerRespuestas();

// =================================
// SELECCIONAR LA RESPUESTA CORRECTA
// =================================
// 1. Mostrar las respuestas posibles (mostrar el array).
const mostrarRespuestas = function() {
    let selectRta = document.getElementById("respuestaCorrecta"); 
    selectRta.innerHTML = "";
    let respuestas = obtenerRespuestas();
    for (let i = 0; i < 4; i++ ) {
        selectRta.innerHTML += `<option value=${respuestas[i]}>${respuestas[i]}</option>`;
    }
}
mostrarRespuestas();

// 2. Guardar la respuesta correcta en una variable.
let rtaCorrecta = document.getElementById("respuestaCorrecta").value;


// =================================
// AGREGAR RESPUESTA A BASE DE DATOS
// =================================
const agregarPregunta = function() {
    let pregRta = {
        categoria: document.getElementById("categorias").value,
        pregunta: obtenerPregunta(),
        respuestasPosibles: obtenerRespuestas(),
        respuestaCorrecta: document.getElementById("respuestaCorrecta").value,
        //borrar innerHTML = "";
    }
    console.log(pregRta);
}
agregarPregunta();

//============================
// GUARDAR DATOS PARA RANKINGS
// ===========================
// 1. Guardar nombre deL usuario que realizó la pregunta.

// 2. Sumar "1" a la categoría de la pregunta creada.
// obtenerCategorias();
// let rankingsCategorias = [rankingCategoria1, rankingCategoria2, rankingCategoria3];
// for(i = 0; i < rankingsCategorias; i++) {
//     switch (categoria) {
//         case "Categoria 1":
//             rankingCategoria1 ++;
//         case "Categoria 2":
//             rankingCategoria2 ++;
//         case "Categoria 3":
//             rankingCategoria3 ++;
//     }

// }
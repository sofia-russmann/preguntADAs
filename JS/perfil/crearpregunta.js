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
    let respuestasPosibles = [respuesta1, respuesta2, respuesta3, respuesta4]; // Está bien la sintaxis?
    return respuestasPosibles;
}
obtenerRespuestas();

// =================================
// SELECCIONAR LA RESPUESTA CORRECTA
// =================================
// 1. Mostrar las respuestas posibles (mostrar el array).
const mostrarRespuestas = function() {
    let select = document.getElementById("respuestaCorrecta"); 
    select.innerHTML = "";
    let respuestas = obtenerRespuestas();
    for (let i = 0; i < 4; i++ ) {
        select.innerHTML += `<option>${respuestas[i]}</option>`; // NO LOGRO MOSTRAR RESPUESTAS!!!
    }
}
mostrarRespuestas();

// 2. Guardar la respuesta correcta en una variable.


// =================================
// AGREGAR RESPUESTA A BASE DE DATOS
// =================================
// 1. 

//============================
// GUARDAR DATOS PARA RANKINGS
// ===========================
// 1. Guardar nombre deL usuario que realizó la pregunta.

// 2. Sumar "1" a la categoría de la pregunta creada.
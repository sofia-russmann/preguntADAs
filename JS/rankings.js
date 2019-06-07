// =================================
// RANKINGS
// 1. DE USUARIOS
// 2. DE CATEGORIAS
// 3. DE DESAFIOS
// =================================
// =================================
// 1.1 USUARIOS CON MEJORES PUNTAJES
// =================================
// Requisitos: traer nombreUsuario y puntajeJugada. Crear en la práginas de juego la variable "puntajeJugada".

let puntajes = [{
    nombreUsuario: "Karen",
    puntajeJugada: 10,
}, {
    nombreUsuario: "Ana",
    puntajeJugada: 50,
}, {
    nombreUsuario: "Nico",
    puntajeJugada: 30,
}, {
    nombreUsuario: "Diego",
    puntajeJugada: 30,
}, {
    nombreUsuario: "Pepe",
    puntajeJugada: 50
}]


let obtenerRankingGeneral = function(){
    let puesto = "";
    for (let i = 0; i < puntajes.length; i++){
        puesto += `<p>${puntajes[i].nombreUsuario}, ${puntajes[i].puntajeJugada} PUNTOS</p>`;
    }
    return puesto;
}

let rankingGeneral = document.getElementById("rankingGeneral");
rankingGeneral.innerHTML = obtenerRankingGeneral();

// ===================================================
// 1.2 MEJORES PUNTAJES POR CATEGORIA
// ===================================================
// Requisitos: traer categorías, nombreUsuario y puntajes de base de datos.

let categorias = ["categoria1", "categoria2", "categoria3"];
let puntajesCategoria = "";
for(i = 0; i < categorias.length; i++){
    puntajesCategoria = [{
        nombreUsuario: "Karen",
        puntajeJugada: 10,
    }, {
        nombreUsuario: "Ana",
        puntajeJugada: 50,
    }, {
        nombreUsuario: "Nico",
        puntajeJugada: 30,
    }, {
        nombreUsuario: "Diego",
        puntajeJugada: 30,
    }, {
        nombreUsuario: "Pepe",
        puntajeJugada: 50
    }]
};
let obtenerRankingCategorias = function(){
    let puesto = "";
    for (let i = 0; i < puntajesCategoria.length; i++){
        puesto += `<p>${puntajes[i].nombreUsuario}, ${puntajes[i].puntajeJugada} PUNTOS</p>`;
    }
    return puesto;
}
let rankingCategorias = document.getElementById("rankingCategorias");
rankingCategorias.innerHTML = obtenerRankingCategorias();

// =========================================
// 1.3 USUARIOS CON MAS COMPETENCIAS GANADAS
// =========================================
// Requisitos de otras páginas: crear variable "competenciasGanadas" que sume "1" cada vez que un usuario gana una competencia.

let puntajesCompetencias = [{
    nombreUsuario: "Karen",
    competenciasGanadas: 10,
}, {
    nombreUsuario: "Ana",
    competenciasGanadas: 50,
}, {
    nombreUsuario: "Nico",
    competenciasGanadas: 30,
}, {
    nombreUsuario: "Diego",
    competenciasGanadas: 30,
}, {
    nombreUsuario: "Pepe",
    competenciasGanadas: 50
}]

let obtenerRankingCompetencias = function(){
    let puesto = "";
    for (let i = 0; i < puntajesCompetencias.length; i++){
        puesto += `<p>${puntajesCompetencias[i].nombreUsuario}, ${puntajesCompetencias[i].competenciasGanadas} PUNTOS</p>`;
    }
    return puesto;
}
let rankingCompetencias = document.getElementById("rankingCompetencias");
rankingCompetencias.innerHTML = obtenerRankingCompetencias();

// ==============================================
// 2.1 CATEGORIAS CON MAYOR CANTIDAD DE PREGUNTAS
// ==============================================
// Requisitos: sumar "1" a la cantidad de preguntas que tiene cada categoría,
// cada vez que un usuario crea una pregunta en determinada categoría. 

// categoria1: cantidadPregCategoria1



// ==========================
// 2.2 CATEGORIAS MAS VOTADAS
// ==========================
// Mostrar una lista de las categorías que más votos tienen.
// Requisito: crear la opción de voto cada vez que se elige una categoría para jugar.

// categoria1: votosCategoria1 (arranca en 0)
// categoria2: votosCategoria2 (arranca en 0)
// categoria3: votosCategoria3 (arranca en 0)
// categoria4: votosCategoria4 (arranca en 0)

// ========================
// 2.3 DESAFIOS MAS VOTADOS
// ========================
// Mostrar una lista de los desafíos más votados.
// Requisitos: 

// ========================
// 3.1 DESAFIOS MAS JUGADOS
// ========================
// 

// =======================
// 3.2 DESAFIOS MAS NUEVOS
// =======================
// 

// Por cada usuario guardar:
// nombreUsuario:
// puntajeAcumulado: (arranca en 0)
// competenciasGanadas: (arranca en 0)
// historial = [numJugada, categoria, puntaje, puntajeCompetencia]

// Por cada jugada guardar:
// puntajeJugada: (arranca en 0)
// categoriaJugada: 

// Cantidad de veces que se jugó la categoría:
// jugadaCategoria1: (arranca en 0)
// jugadaCategoria2: (arranca en 0)
// jugadaCategoria3: (arranca en 0)
// jugadaCategoria4: (arranca en 0)

// Cantidad de preguntas de cada categoría:
// cantidadPregCategoria1: (arranca con la cantidad de preguntas que tiene la categoría)
// cantidadPregCategoria2: (arranca con la cantidad de preguntas que tiene la categoría)
// cantidadPregCategoria3: (arranca con la cantidad de preguntas que tiene la categoría)
// cantidadPregCategoria4: (arranca con la cantidad de preguntas que tiene la categoría)
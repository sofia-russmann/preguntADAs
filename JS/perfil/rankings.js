// =================================
// RANKINGS
// 1. DE USUARIOS
// 2. DE CATEGORIAS
// 3. DE DESAFIOS
// =================================
// =================================
// 1.1 USUARIOS CON MEJORES PUNTAJES
// =================================
// Mostrar una lista de los usuarios (5) con más puntaje acumulado.
// Requisitos: nombreUsuario, puntajeJugada.
// puntaje 1, nombreUsuario
// puntaje 2, nombreUsuario
// puntaje 3, nombreUsuario
// puntaje 4, nombreUsuario
// puntaje 5, nombreUsuario

let infoUsario = {
    nombreUsuario = "",
    puntajeJugada = 0,
    competenciasGanadas = 0
}

let mejoresPuntajes = [{
    nombreUsuario: "aaa",
    puntajeJugada: 10,
}, {
    nombreUsuario: "bbb",
    puntajeJugada: 5
}, {
    nombreUsuario: "ccc",
    puntajeJugada: 23
}]

for(let i = 0; i < mejoresPuntajes.length; i++) {
    console.log(mejoresPuntajes[i].puntajeJugada);
    console.log(mejoresPuntajes[i].nombreUsuario);
}



// ===================================================
// 1.2 MEJORES PUNTAJES POR CATEGORIA
// ===================================================
// Mostrar todas las categorías que hay, y por cada una los (5) mejores puntajes con sus respectivos usuarios.
// Requisitos: nombreUsuario, puntaje, categoría.

// categoria 1
// puntaje 1, nombreUsuario
// puntaje 2, nombreUsuario
// puntaje 3, nombreUsuario
// puntaje 4, nombreUsuario
// puntaje 5, nombreUsuario
//
// Idem para el resto de las categorías.

// =========================================
// 1.3 USUARIOS CON MAS COMPETENCIAS GANADAS
// =========================================
// Mostrar una lista de los (5) usuarios que más competencias ganaron.
// Requisitos: sumar "1" cada vez que un usuario gana una competencia.

// XXXXX competencias ganadas, nombreUsuario
// XXXX competencias ganadas, nombreUsuario
// XXX competencias ganadas, nombreUsuario
// XX competencias ganadas, nombreUsuario
// X competencias ganadas, nombreUsuario


// ==============================================
// 2.1 CATEGORIAS CON MAYOR CANTIDAD DE PREGUNTAS
// ==============================================
// Mostrar una lista con las categorías que más preguntas tienen.
// Requisitos: sumar "1" a la cantidad de preguntas que tiene cada categoría,
// cada vez que un usuario crea una pregunta en determinada categoría. 

// categoria1: cantidadPregCategoria1
// categoria2: cantidadPregCategoria2
// categoria3: cantidadPregCategoria3
// categoria4: cantidadPregCategoria4

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
// ARRAY CON OBJETOS ADENTRO
let puntos = 0; 

let conjuntoDeCosas = {
    comenzarQuiz: function(categoria) { // literatura, entretenimiento, música, etc
        this.categoriaPregunta(categoria);
        this.pasarPregunta();
        this.pasarRespuesta();
        this.cambiarValue();
        this.comprobarRespuestas();
    },
    categoriaPregunta: function(categoria) {
        switch(categoria) {
            case "Literatura":
                    preguntas = new Preguntas [{
                        Pregunta: "¿De quién está enamorado Hamlet?",
                        Respuestas: [
                            "Ofelia",
                            "Magdalena",
                            "Gertrudis",
                            "Alexandra"
                        ],
                        Respuesta: "Ofelia",
                    }, {
                        Pregunta: "¿En qué década se escribió el primer comic de Superman?",
                        Respuestas: [
                            "Década del 40",
                            "Década del 30",
                            "Década del 50",
                            "Década del 60"
                        ],
                        Respuesta: "Década del 30",
                    }, {
                        Pregunta: '¿A qué escritora británica pertenece el libro "Cumbres borrascosas"?',
                        Respuestas: [
                            "Virginia Woolf",
                            "Agatha Christie",
                            "Emily Brontë",
                            "Jane Austen"
                        ],
                        Respuesta: "Emily Brontë"
                    }];
            break;
            case "Entretenimiento":
                    preguntas = new Preguntas [{
                        Pregunta: "¿Quien es el baterista de The Beatles?",
                        Respuestas: [
                            "Ringo Starr",
                            "Paul McCartney",
                            "John Lennon",
                            "George Harrison"
                        ],
                        Respuesta: "Ringo Starr",
                    }, {
                        Pregunta: "¿Quién es el cantante de los Rolling Stones?",
                        Respuestas: [
                            "Keith Richards",
                            "Ronnie Wood",
                            "Charlie Watts",
                            "Mick Jagger"
                        ],
                        Respuesta: "Mick Jagger",
                    }, {
                        Pregunta: '¿A quién pertenece el tema "Sweet Child of Mine"?',
                        Respuestas: [
                            "Metallica",
                            "Guns and Roses",
                            "Bon Jovi",
                            "Aerosmith"
                        ],
                        Respuesta: "Guns and Roses"
                    }];
            break;
        }

    let visibilizarPreguntas = document.getElementsByClassName("preguntas");
    let invisibilizarCategorias = document.getElementsByClassName("choosing-category");
    visibilizarPreguntas[0].style.visibility = "visible";
    invisibilizarCategorias[0].style.visibility = "hidden";
    
},
    
    pasarPregunta: function() { // Funciona sin pasarRespuesta();
    let titulo = document.getElementsByClassName("titulo-pregunta");
    titulo[0].innerHTML = preguntas[numeroPregunta].Pregunta;

    //pasarRespuesta(); 
    //cambiarValue();
    numeroPregunta++;
    //progressBar();
    //},
    },

    pasarRespuesta: function() {
        let listaPreguntas = document.getElementsByClassName("lista-preguntas");
     
        for (let i = 0; i < preguntas[numeroPregunta].Respuestas.length; i++) {
            listaPreguntas[i].innerHTML = preguntas[numeroPregunta].Respuestas[i];
        }
    },
    
   cambiarValue: function() {
    let value = document.getElementsByClassName("value");
    for (let i = 0; i < preguntas[numeroPregunta].Respuestas.length; i++) {
        value[i].value = preguntas[numeroPregunta].Respuestas[i]; 
        value[i].onclick = function() {
            comprobarRespuestas(value[i].value);
        }
    }
},
comprobarRespuestas: function(respuesta) { // Funciona pero COMPROBAR
    // let opcionSeleccionada = document.querySelectorAll("button[type=submit]");
    // let respuesta = opcionSeleccionada.value;
    if (respuesta == preguntas[0].Respuesta) {
        puntos++;
        alert(`Bien tus puntos son ${puntos}`);
    } 

    if (respuesta == preguntas[1].Respuesta) {
        puntos++;
        alert(`Bien tus puntos son ${puntos}`);
    } 

}
}


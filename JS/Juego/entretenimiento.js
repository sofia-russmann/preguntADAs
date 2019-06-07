fetch("https://preguntas.herokuapp.com/v1/challenges", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json; charset=UTF-8"
         "Authorization": "eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0"
     },
     method: "post",
     body: JSON.stringify({
           title: "De curiosidades y anécdotas",
           description: "Poné a prueba tu conocimiento inútil o aprendé algo inservible!",
           questions: [
                   "5cef009125363837987fd841",
                   "5cef00912asfas3837987841",
                   "5cef00912523423837987f41",
                   "5cef00912242343837987d41",
                   "5cef009234234g34597fd841",
                   "5cef234fddsfsfs383797841",
                   "5cef0032423dfs2383787f41",
                   "5cef00912124124ffsd87d41",
                   "546dfgdf2124124ffsd87d41",
                   "5cef00912124124ffsd87d41",
               ],
       })
}).then(function(result) {
     return result.json();
}).then(function(result) {
    console.log("Si");
}).catch(function(error) {
    console.log("No");
});
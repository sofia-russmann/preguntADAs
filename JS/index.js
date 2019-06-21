// =======================================================================
// =======================================================================
//                       UNDER CONSTRUCTION
// =======================================================================
// =======================================================================

const getChallengeRandom = function(){
    
}


fetch("https://preguntadas.herokuapp.com/v1/challenges/random", {
     headers: {
         "Authorization": "eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0"
     },
     method: "get",
}).then(function(result) {
     return result.json();
}).then(function(result) {

}).catch(function(error) {

});
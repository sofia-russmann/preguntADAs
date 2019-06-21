// =======================================================================
// =======================================================================
//                       UNDER CONSTRUCTION
// =======================================================================
// =======================================================================

let questionsArray = []

// --------------   PREGUNTAS QUE VOY A TRAER DE LA BASE DE DATOS ------------- //

const getQuestions = function() {
    options = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"]; 
    return options; 
}
getQuestions();

// --------------------------------------------------------------------------- //

const showQuestions = function() {
    let question = getQuestions();
    for (let i = 0; i < question.length; i++){
        console.log(question[i]);
    }
}
showQuestions();

const showChallengeTitle = function() {
    let title = document.getElementById("challenge-title").value;
    let addTitle = document.getElementById("addTitle");
    addTitle.innerText = title;
}
showChallengeTitle();

const showChallengeDescription = function() {
    let description = document.getElementById("challenge-description").value;
    let addDescription = document.getElementById("addDescription");
    addDescription.innerText = description;
}
showChallengeDescription();


const chooseQuestions = function() {
    let questions = {};
    for (let i = 0; i < 10; i++) {
        questionsArray.push(questions);       
    } 
    console.log(questionsArray);
}
chooseQuestions();

const showChallengeQuestions = function(){
    let setQuestions = document.getElementById("select-questions").value;
    let addQuestions = document.getElementById("addQuestions");
    addQuestions.innerText += `\n ${setQuestions}`;
}
showChallengeQuestions();

let prueba = document.getElementById("value1").value;
let insertarPreg = document.getElementById("challenge-table");

let row = insertarPreg.insertRow(0);
let celda1 = row.insertCell(0);

// CREAR 10 FILAS Y LUEGO 
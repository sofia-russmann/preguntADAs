// INICIAR SESION

<<<<<<< HEAD
let usuariocorrecto = usuario === "adaitw"; //true
let contraseñacorrecta = contraseña === "2019"; //true
let resultado = usuariocorrecto && contraseñacorrecta; //true

let actualizarloggueo = function (){
    document.getElementById('pin').innerHTML = pin;
}

let resetearloggueo = function (){
    usuario = "";
    contraseña = "";
    actualizarloggueo();
}

const verificarUsuario = function (usuario) {
    usuario = prompt ("Ingrese el usuario");
    actualizarloggueo();
=======
const verificarUsuario = function (usuario) {
>>>>>>> e3467d4cfcceeb0edd08b90a8f1d60ee0828660f
//corroborar usuario
}

const verificarContraseña = function (contraseña) {
<<<<<<< HEAD
    contraseña = prompt ("Ingrese la contraseña");
    actualizarloggueo();
//corroborar contraseña
}

let chequearInicio = function (){
    if (resultado){
        alert(`Sesión iniciada correctamente`);
    }
    else {
        alert(`Vuelva a intentarlo.`);
        resetearloggueo()
    }
}

=======
//corroborar contraseña
}

>>>>>>> e3467d4cfcceeb0edd08b90a8f1d60ee0828660f
// REGISTRARSE 

const obtenerUsuario = function (usuario){
// guardar usuario en base de datos
}

const obtenerContraseña = function (contraseña){
// guardar contraseña en base de datos
}

const obtenerApellido = function (apellido) {
// guardar apellido en base de datos 
}
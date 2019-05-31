// INICIAR SESION

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
//corroborar usuario
}

const verificarContraseña = function (contraseña) {
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
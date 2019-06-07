// // INICIAR SESION



let resetearloggueo = function (){
    usuario = "";
    contraseña = "";
}

const verificarUsuario = function () {
    document.getElementById('username-login').innerHTML = username;
    document.getElementById('username-login').style.display = 'none';
    //corroborar usuario
}

const verificarContraseña = function () {
    document.getElementById('contraseña-login').innerHTML = contraseña;
    document.getElementById('contraseña-login').style.display = 'none';


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

const obtenerNombre = function (){
    document.getElementById('name').innerHTML = name;
    document.getElementById('name').style.display = 'none';
    
    // guardar usuario en base de datos
}

const obtenerApellido = function () {
    document.getElementById('surname').innerHTML = surname
    document.getElementById('surname').style.display = 'none';
    // guardar apellido en base de datos 
}

const obtenerUsuario = function () {
    document.getElementById('username').innerHTML = username
    document.getElementById('username').style.display = 'none';
    // guardar apellido en base de datos 
}

const obtenerContraseña = function (){
    document.getElementById('password').innerHTML = password
    document.getElementById('password').style.display = 'none';
    // guardar contraseña en base de datos
}



// let cambiarAregistro = function (){
//     document.getElementById("login").style.visibility = "hidden";
//     document.getElementById("signup").style.visibility = "visible";
// }

// let cambiarAlogin = function (){
//     document.getElementById("signup").style.visibility = "hidden";
//     document.getElementById("login").style.visibility = "visible";
// }




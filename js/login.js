const botonSelected = document.getElementById("boton-selected");
const formLogin = document.getElementById("formLogin");
const formRegister = document.getElementById("formRegister"); 

if(!localStorage.getItem("usuarios")) {
  localStorage.setItem("usuarios", "[]");
};

let usuarios = JSON.parse(localStorage.getItem("usuarios"));

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  registrar();
});

function registrar () {
  const nombre = document.getElementById("inputNombreRegister").value;
  const email = document.getElementById("inputEmailRegister").value;
  const contraseña = document.getElementById("inputContraseñaRegister").value;
  const confContraseña = document.getElementById("inputConfContraseña").value;
  const registertxt = document.getElementById("registertxt");

  const estaRegistrado = usuarios.find(usuario => usuario.email === email);
  if (estaRegistrado) {
    registertxt.innerHTML = "Este usuario ya está registrado!";
  } else if (contraseña != confContraseña) {
    registertxt.innerHTML = "Las contraseñas deben coincidir!";
  } else {
    usuarios.push({nombre: nombre, email: email, contraseña: contraseña}); 
    localStorage.setItem("usuarios", JSON.stringify(usuarios)); 
    registertxt.innerHTML = "Bienvenido " + nombre + "!, Logueate para ingresar :)";
  }
};

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  loguear();
})

function loguear () {
  const email = document.getElementById("inputEmailLogin").value;
  const contraseña = document.getElementById("inputContraseñaLogin").value;
  const logintxt = document.getElementById("logintxt");
  
  const usuarioValido = usuarios.find(usuario => usuario.email === email && usuario.contraseña === contraseña);
  if(!usuarioValido) { 
    logintxt.innerHTML = "Email y/o contraseña incorrectos!";
  } else {
    window.location.href = "../index.html"; 
  }
}

function goToIndex () {
  window.location.href = "../index.html";
}

let comeFromRegister = JSON.parse(localStorage.getItem("comefromregister"));

if(comeFromRegister) {
  window.onload = function() {
    showRegister();
  };
  localStorage.removeItem("comefromregister");
}

function showRegister () {
  formLogin.style.left = "-100%"; 
  formRegister.style.left = "0px";
  botonSelected.style.left = "50%";
};

function showLogin () {
  formLogin.style.left = "0px";
  formRegister.style.left = "100%";
  botonSelected.style.left = "0px";
};

function showPassword(boton, contraseña) {
  if(contraseña.type == "password"){
    contraseña.type = "text";
    boton.style.filter = "none";
}else{
    contraseña.type = "password";
    boton.style.filter = "opacity(40%)";
}
}

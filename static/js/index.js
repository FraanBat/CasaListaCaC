const login = document.getElementById("login")

//En función de si el usuario está o no logueado, refleja el contenido del header
const login_confirmado = function(iniciado) {
  if(iniciado){
    login.innerHTML = ``
    login.innerHTML = `
      <p class="encabezado-en-linea">Bienvenido</p>
      <div class="menu-dropdown" id="login-opciones">
          <a href="templates/perfil.html">Perfil</a>
          <a href="templates/historial.html">Historial</a>
          <a href="../index.html" id="cerrar_sesion" onclick="cerrarSesion()">Cerrar Sesión</a>
      </div>`
  }
  else{
    login.innerHTML = ``
    login.innerHTML = `
      <img class="encabezado-en-linea icono" src="../static/img/header/key.png" alt="llave">
      <p class="encabezado-en-linea">Ingresar</p>`
      localStorage.removeItem("usuarioLogueado")
  }
}


//Valida si el usuario está logueado y esto se guardó localmente. En base a ello, cambia el contenido del header
const guardadoLogin = function() {
  if(localStorage.getItem("usuarioLogueado") === null){
    return false
  }
  else{
    return true
  }
}

//Al seleccionar una especialidad, valida que el usuario haya iniciado sesión. Si no lo hizo, le pide que se loguee
const validarLogin = function(iniciado, especialidad) {
  if(guardadoLogin(iniciado)){
    //sessionStorage.setItem("categoriaEspecialistaBuscado", especialidad)
    let listaEspecialistasABuscar = JSON.parse(sessionStorage.getItem("listadoEspecialistas"))
    listaEspecialistasABuscar = listaEspecialistasABuscar.filter(especialista => especialista.profesion === especialidad)
    sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(listaEspecialistasABuscar))
    window.location.replace("templates/servicios.html")
  }
  else{
    loginUsuario()
  }
}

//Valida que el mail y contraseña ingresados sean válidos
const validarUsuario = function(mail, contrasena){
  if(localStorage.getItem("listaUsuarios") !== null && JSON.parse(localStorage.getItem("listaUsuarios")).find(usuario => usuario.mail === mail && usuario.contrasena === contrasena)){
    return true
  }
  else{
    return false
  }
}

//Muestra el popup para que el usuario incie sesión
const loginUsuario = function() {
  (async () => {
    const { value: datos_login } = await Swal.fire({
      title: "Loguearse",
      html:
      'Email: <input type="email" id="swal-input1" class="swal2-input">' +
      'Clave: <input type="password" id="swal-input2" class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    },
    confirmButtonColor: "#356194",
    confirmButtonText: "Ingresar",
    footer: '<a href="templates/registro.html">¿No tienes cuenta? Registrate</a>'
    })
    if (validarUsuario(datos_login[0], datos_login[1])) {
      localStorage.setItem("usuarioLogueado", datos_login[0])
      login_confirmado(true)
      window.location.replace("../")
      }
    else{
        Swal.fire({
          title: "Usuario incorrecto",
          text: "Usuario y/o contraseña no válidos",
          icon: "warning"
      })
    }
})()
}


//Si se hace click en el texto para ingresar, y el usuario no está logueado, solicita que lo haga
document.getElementById("login").addEventListener('click', function(){
  if(!guardadoLogin())
  {
    loginUsuario()
  }
})

//Cierra sesión del usuario
const cerrarSesion = function() {
  iniciado = false
  login_confirmado(iniciado)
}

// --------------------------------------

let iniciado = guardadoLogin()
login_confirmado(iniciado)
const login = document.getElementById("login")

//-------------------------------------------------


//En función de si el usuario está o no logueado, refleja el contenido del header
const login_confirmado = iniciado => {
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
const guardadoLogin = () => {
  if(localStorage.getItem("usuarioLogueado") === null){
    return false
  }
  else{
    return true
  }
}

//Valida que el campo ingresado sea un mail
const validarEmail = email => {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  return reg.test(email)
}

//Al seleccionar una especialidad, valida que el usuario haya iniciado sesión. Si no lo hizo, le pide que se loguee
const validarLogin = (iniciado, especialidad) => {
  console.log(especialidad)
  if(guardadoLogin(iniciado)){
    window.location.replace("templates/servicios.html?especialidad=" + especialidad)
  }
  else{
    loginUsuario()
  }
}

//Muestra el popup para que el usuario incie sesión
const loginUsuario = () => {
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
    if (validarEmail(datos_login[0])) {
      localStorage.setItem("usuarioLogueado", datos_login[0])
      login_confirmado(true)
      }
    else{
        Swal.fire(`Datos no válidos`)
    }
})()
}


//Si se hace click en el texto para ingresar, y el usuario no está logueado, solicita que lo haga
login.onclick = () => {
  if(!guardadoLogin())
  {
    loginUsuario()
  }
}

//Cierra sesión del usuario
const cerrarSesion = () => {
  iniciado = false
  login_confirmado(iniciado)
}

// --------------------------------------

let iniciado = guardadoLogin()
login_confirmado(iniciado)
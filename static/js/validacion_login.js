const login = document.getElementById("login")

//Si el usuario no inició sesión antes, lo manda de vuelta al main para que lo haga
const validarLogin = () => {
    if(localStorage.getItem("usuarioLogueado") === null){
        window.location.replace("../index.html")
      }
}

const cerrarSesion = () => {
    localStorage.removeItem("usuarioLogueado")
}

validarLogin()
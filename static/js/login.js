const validarUsuario = function (mail, contrasena) {
    if (localStorage.getItem("listaUsuarios") !== null && JSON.parse(localStorage.getItem("listaUsuarios")).find(usuario => usuario.mail === mail && usuario.contrasena === contrasena)) {
        return true
    }
    else {
        return false
    }
}


document.getElementById("loginUsuario").addEventListener('submit', function (event) {

    event.preventDefault()
    
    let usuario = document.getElementById("mail").value
    let password = document.getElementById("contrasena").value
    
    if (validarUsuario(usuario, password)) {

        localStorage.setItem("usuarioLogueado", JSON.parse(localStorage.getItem("listaUsuarios")).find(usuarioBuscado => usuarioBuscado.mail === usuario).id)
        window.location.replace("../")
    }
    else {
        alert("Usuario y/o contraseña no válidos")
    }
})
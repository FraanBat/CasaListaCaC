let headerContent

if (localStorage.getItem("usuarioLogueado") === null) {
    headerContent = `
        <header>
        <a href="../index.html">
            <div class="logo-completo">
                <img class="encabezado-en-linea logo-imagen" src="../static/img/header/logo/logo.png" alt="logo">
                <img class="encabezado-en-linea logo-letras" src="../static/img/header/logo/letras.png" alt="casalista">
            </div>
        </a>
        <form class="buscador" id="buscadorEspecialidad">
            <input type="text" name="especialidad" id="especialidad" placeholder="Especialidad...">
            <input class="buscador-boton" type="submit" value="🔍">
        </form>
        <div class="menu" id="login">
            <img class="encabezado-en-linea icono" src="../static/img/header/key.png" alt="llave">
            <p class="encabezado-en-linea" onclick="loginUsuario()">Ingresar</p>
            <p class="encabezado-en-linea">/</p>
            <a href="../templates/registro.html"><p class="encabezado-en-linea">Registrarme</p></a>
        </div>
        </header>
        `
}
else {
    let usuarioActual = JSON.parse(localStorage.getItem("listaUsuarios")).find(usuarioBuscado => usuarioBuscado.id === parseInt(localStorage.getItem("usuarioLogueado")))
    if (!usuarioActual.especializacion.especialista) {
        headerContent = `
        <header>
        <a href="../index.html">
            <div class="logo-completo">
                <img class="encabezado-en-linea logo-imagen" src="../static/img/header/logo/logo.png" alt="logo">
                <img class="encabezado-en-linea logo-letras" src="../static/img/header/logo/letras.png" alt="casalista">
            </div>
        </a>
        <form class="buscador" id="buscadorEspecialidad">
            <input type="text" name="especialidad" id="especialidad" placeholder="Especialidad...">
            <input class="buscador-boton" type="submit" value="🔍">
        </form>
        <div class="menu" id="login">
            <p class="encabezado-en-linea">Bienvenido</p>
            <div class="menu-dropdown" id="login-opciones">
                <a href="../templates/perfil.html">Perfil</a>
                <a href="../templates/historial.html">Historial</a>
                <a href="../index.html" id="cerrar_sesion" onclick="cerrarSesion()">Cerrar Sesión</a>
            </div>
        </div>
        </header>
        `
    }
    else {
        headerContent = `
        <header>
        <a href="../index.html">
            <div class="logo-completo">
                <img class="encabezado-en-linea logo-imagen" src="../static/img/header/logo/logo.png" alt="logo">
                <img class="encabezado-en-linea logo-letras" src="../static/img/header/logo/letras.png" alt="casalista">
            </div>
        </a>
        <form class="buscador" id="buscadorEspecialidad">
            <input type="text" name="especialidad" id="especialidad" placeholder="Especialidad...">
            <input class="buscador-boton" type="submit" value="🔍">
        </form>
        <div class="menu" id="login">
            <p class="encabezado-en-linea">Bienvenido</p>
            <div class="menu-dropdown" id="login-opciones">
                <a href="../templates/perfil.html">Perfil</a>
                <a href="../templates/historial.html">Historial</a>
                <a href="../templates/pedidos.html">Pedidos</a>
                <a href="../index.html" id="cerrar_sesion" onclick="cerrarSesion()">Cerrar Sesión</a>
            </div>
        </div>
        </header>
        `
    }
}

document.body.insertAdjacentHTML('afterbegin', headerContent)

//Valida que el mail y contraseña ingresados sean válidos
const validarUsuario = function (mail, contrasena) {
    if (localStorage.getItem("listaUsuarios") !== null && JSON.parse(localStorage.getItem("listaUsuarios")).find(usuario => usuario.mail === mail && usuario.contrasena === contrasena)) {
        return true
    }
    else {
        return false
    }
}

//Si se hace click en el texto para ingresar, y el usuario no está logueado, solicita que lo haga
const loginUsuario = function () {
    if (localStorage.getItem("usuarioLogueado") === null) {
        let usuario = prompt("Ingrese su mail")
        let password = prompt("Ingrese su contraseña")
        if (validarUsuario(usuario, password)) {

            localStorage.setItem("usuarioLogueado", JSON.parse(localStorage.getItem("listaUsuarios")).find(usuarioBuscado => usuarioBuscado.mail === usuario).id)
            window.location.replace("../")
        }
        else {
            alert("Usuario y/o contraseña no válidos")
        }
    }
}

const cerrarSesion = () => {
    localStorage.removeItem("usuarioLogueado")
    window.location.replace("../index.html")
}
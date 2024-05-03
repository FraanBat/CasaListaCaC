if (localStorage.getItem("usuarioLogueado") !== null) {
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
        <img class="encabezado-en-linea icono" src="../static/img/header/key.png" alt="llave">
        <p class="encabezado-en-linea">Ingresar</p>
    </div>
    </header>
    `
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
document.getElementById("login").addEventListener('click', function () {
    if (localStorage.getItem("usuarioLogueado") === null) {
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
                window.location.replace("../")
            }
            else {
                Swal.fire({
                    title: "Usuario incorrecto",
                    text: "Usuario y/o contraseña no válidos",
                    icon: "warning"
                })
            }
        })()
    }
})
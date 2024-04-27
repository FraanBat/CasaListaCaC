const headerContent = `
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
        <a href="perfil.html">Perfil</a>
        <a href="historial.html">Historial</a>
        <a href="../index.html" id="cerrar_sesion" onclick="cerrarSesion()">Cerrar Sesión</a>
    </div>
</div>
</header>
`

document.body.insertAdjacentHTML('afterbegin', headerContent);
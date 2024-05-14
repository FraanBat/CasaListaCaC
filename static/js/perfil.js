const mailUsuario = document.getElementById("mail")
const nombreUsuario = document.getElementById("nombre")
const apellidoUsuario = document.getElementById("apellido")
const fotoUsuario = document.getElementById("fotoPerfil")
const imagenNuevaUsuario = document.getElementById("imagenNueva")
const telefonoUsuario = document.getElementById("telefono")
const zonaUsuario = document.getElementById("zona")
const generoUsuario = document.getElementById("genero")
const contrasenaUsuario = document.getElementById("contrasenaNueva")
const repetirContrasenaUsuario = document.getElementById("repetir_contrasena_nueva")
const usuarioEspecialidad = document.getElementById("especialidadPerfil")

const validarMail = function(nuevoMail, mailUusuario){
    if(mailUusuario === nuevoMail){
        return true
    }
    else{
        if (JSON.parse(localStorage.getItem("listaUsuarios")).find(usuarioBuscado => usuarioBuscado.mail === nuevoMail)) {
            return false
        }
        else {
            return true
        }
    }
}

const validarEspecialidad = function(especialidad, usuarioEspecialidad){
    if(!especialidad || especialidad && usuarioEspecialidad !== ""){
        return true
    }
    else{
        return false
    }
}

function validarDatos(){
    let mailUsuarioValidar = document.getElementById("mail").value.trim();
    let nombreUsuarioValidar = document.getElementById("nombre").value.trim();
    let apellidoUsuarioValidar = document.getElementById("apellido").value.trim();
    let telefonoUSuarioValidar = document.getElementById("telefono").value.trim();
    let contrasenaUsuarioValidar = document.getElementById("contrasenaNueva").value.trim();
    let contraRepetidaUsuarioValidar = document.getElementById("repetir_contrasena_nueva").value.trim();
    let campos = document.getElementById("campos");

    if (!/^[a-zA-Z\s]+$/.test(nombreUsuarioValidar)) {
        campos.textContent = "❌ Ingrese un nombre valido. "
        campos.style.color = "red"
        return false
    }
    if (!/^[a-zA-Z\s]+$/.test(apellidoUsuarioValidar)) {
        campos.textContent = "❌ Ingrese un apellido valido. "
        campos.style.color = "red"
        return false
    }
    if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).test(mailUsuarioValidar)){
        campos.textContent = "❌ Ingrese un correo valido. "
        campos.style.color = "red"
        return false
    }
    if (telefonoUSuarioValidar.length !== 10 || !/^\d+$/.test(telefonoUSuarioValidar)) {
        campos.textContent = "❌ El telefono debe tener solamente números y 10 caracteres. "
        campos.style.color = "red"
        return false
    }
    if (contrasenaUsuarioValidar !== contraRepetidaUsuarioValidar) {
        campos.textContent = "❌ Las contraseñas deben de ser iguales "
        campos.style.color = "red"
        return false
    }
    return true;
}

const cargarFoto = function(usuario, fotoUsuario){
    const foto = document.createElement("img")
    foto.className = "imagen"
    foto.setAttribute("src", usuario.imagen)
    foto.setAttribute("alt", "foto de perfil")
    fotoUsuario.appendChild(foto)
}

const solicitarPerfil = function(usuario, mailUsuario, nombreUsuario, apellidoUsuario, fotoUsuario, telefonoUsuario, generoUsuario, zonaUsuario, contrasenaUsuario, repetirContrasenaUsuario, usuarioEspecialidad){
    mailUsuario.value = usuario.mail
    nombreUsuario.value = usuario.nombre
    apellidoUsuario.value = usuario.apellido
    cargarFoto(usuario, fotoUsuario)
    generoUsuario.value = usuario.genero
    zonaUsuario.value = usuario.zona
    telefonoUsuario.value = usuario.telefono
    contrasenaUsuario.value = usuario.contrasena
    repetirContrasenaUsuario.value = usuario.contrasena
    if(usuario.especializacion.especialista){
        usuarioEspecialidad.value = usuario.especializacion.profesion
    }
}

const seccionEspecialidad = function(especialidad){
    const seccionProfesion = document.getElementById("seccionProfesion")
    if(!especialidad){
        seccionProfesion.style.display = "none"
    }
    else{
        seccionProfesion.style.display = "block"
    }
}

const actualizarDatosUsuario = function(perfilUsuario){
    const listadoUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))
    listadoUsuarios.forEach(usuario => {
        if(usuario.id === perfilUsuario.id){
            usuario.mail = perfilUsuario.mail
            usuario.nombre = perfilUsuario.nombre
            usuario.apellido = perfilUsuario.apellido
            usuario.zona = perfilUsuario.zona
            usuario.telefono = perfilUsuario.telefono
            usuario.imagen = perfilUsuario.imagen
            usuario.especializacion.especialista = perfilUsuario.especializacion.especialista
            usuario.especializacion.profesion = perfilUsuario.especializacion.profesion
            usuario.contrasena = perfilUsuario.contrasena
        }
    });
    localStorage.setItem("listaUsuarios", JSON.stringify(listadoUsuarios))

    alert("Datos actualizados")
    window.location.replace("../index.html")
}

document.getElementById("habilitarEspecialidad").addEventListener('click', function(event){

    event.preventDefault()

    especialidad = !especialidad
    seccionEspecialidad(especialidad)
})

document.getElementById("actualizarDatos").addEventListener('click', function(event){
    
    event.preventDefault()
    let campos = document.getElementById("campos")
    if (validarDatos()) {
        campos.textContent = ""
        if(validarMail(mailUsuario.value, perfilUsuario.mail) && validarEspecialidad(especialidad, usuarioEspecialidad.value)){
            perfilUsuario.mail = mailUsuario.value
            perfilUsuario.nombre = nombreUsuario.value
            perfilUsuario.apellido = apellidoUsuario.value
            perfilUsuario.zona = zonaUsuario.value
            perfilUsuario.telefono = telefonoUsuario.value
            perfilUsuario.contrasena = contrasenaUsuario.value
            if(imagenNuevaUsuario.value !== ""){perfilUsuario.imagen = imagenNuevaUsuario.value.replace('C:\\fakepath\\', 'https://raw.githubusercontent.com/FraanBat/imagenesCaC/main/')}
            perfilUsuario.especializacion.especialista = especialidad
            if(especialidad) {perfilUsuario.especializacion.profesion = usuarioEspecialidad.value}
            else {perfilUsuario.especializacion.profesion = null}
        
            actualizarDatosUsuario(perfilUsuario)
        }
        else if(!validarEspecialidad(especialidad, usuarioEspecialidad.value)){
            campos.textContent = "❌ No ha ingresado ninguna especialidad "
            campos.style.color = "red"
            return false
        }
        else{
            campos.textContent = "❌ El mail ingresado pertenece a otro usuario "
            campos.style.color = "red"
            return false
        }
    }
})

let perfilUsuario = JSON.parse(localStorage.getItem("listaUsuarios")).find(usuario => usuario.id === parseInt(localStorage.getItem("usuarioLogueado")))
let especialidad = perfilUsuario.especializacion.especialista
solicitarPerfil(perfilUsuario, mailUsuario, nombreUsuario, apellidoUsuario, fotoUsuario, telefonoUsuario, generoUsuario, zonaUsuario, contrasenaUsuario, repetirContrasenaUsuario, usuarioEspecialidad)
seccionEspecialidad(especialidad)
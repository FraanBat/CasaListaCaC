const mailUsuario = document.getElementById("mail")
const nombreUsuario = document.getElementById("nombre")
const apellidoUsuario = document.getElementById("apellido")
const fotoUsuario = document.getElementById("fotoPerfil")
const imagenNuevaUsuario = document.getElementById("imagenNueva")
const telefonoUsuario = document.getElementById("telefono")
const zonaUsuario = document.getElementById("zona")
const contrasenaUsuario = document.getElementById("contrasenaNueva")
const repetirContrasenaUsuario = document.getElementById("repetir_contrasena_nueva")
const usuarioEspecialidad = document.getElementById("especialidadPerfil")

const solicitarPerfil = function(usuario, mailUsuario, nombreUsuario, apellidoUsuario, fotoUsuario, telefonoUsuario, zonaUsuario, contrasenaUsuario, repetirContrasenaUsuario){
    mailUsuario.textContent = "Correo de usuario: " + usuario.mail
    nombreUsuario.value = usuario.nombre
    apellidoUsuario.value = usuario.apellido
    fotoUsuario.setAttribute("src", usuario.imagen)
    telefonoUsuario.value = usuario.telefono
    contrasenaUsuario.value = usuario.contrasena
    repetirContrasenaUsuario.value = usuario.contrasena
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
        if(usuario.mail === perfilUsuario.mail){
            usuario.nombre = perfilUsuario.nombre
            usuario.apellido = perfilUsuario.apellido
            usuario.zona = perfilUsuario.zona
            usuario.telefono = perfilUsuario.telefono
            usuario.imagen = perfilUsuario.imagen
            usuario.especializacion.especialista = perfilUsuario.especializacion.especialista
            usuario.especializacion.profesion = perfilUsuario.especializacion.profesion
        }
    });
    localStorage.setItem("listaUsuarios", JSON.stringify(listadoUsuarios))

    Swal.fire({
        title: "Datos actualizados",
        confirmButtonText: "Aceptar",
        icon: "success"
      }).then((result) =>{
        if(result.isConfirmed){
            window.location.replace("../index.html")
        }
      });
}

document.getElementById("habilitarEspecialidad").addEventListener('click', function(event){

    event.preventDefault()

    especialidad = !especialidad
    seccionEspecialidad(especialidad)
})

document.getElementById("actualizarDatos").addEventListener('click', function(event){
    
    event.preventDefault()

    perfilUsuario.nombre = nombreUsuario.value
    perfilUsuario.apellido = apellidoUsuario.value
    perfilUsuario.zona = zonaUsuario.value
    perfilUsuario.telefono = telefonoUsuario.value
    perfilUsuario.imagen = imagenNuevaUsuario.value.replace('C:\\fakepath\\', '../static/img/perfil/')
    perfilUsuario.especializacion.especialista = especialidad
    if(especialidad) {perfilUsuario.especializacion.profesion = usuarioEspecialidad.value}
    else {perfilUsuario.especializacion.profesion = null}

    actualizarDatosUsuario(perfilUsuario)
})

let perfilUsuario = JSON.parse(localStorage.getItem("listaUsuarios")).find(usuario => usuario.id === parseInt(localStorage.getItem("usuarioLogueado")))
let especialidad = perfilUsuario.especializacion.especialista
solicitarPerfil(perfilUsuario, mailUsuario, nombreUsuario, apellidoUsuario, fotoUsuario, telefonoUsuario, zonaUsuario, contrasenaUsuario, repetirContrasenaUsuario)
seccionEspecialidad(especialidad)
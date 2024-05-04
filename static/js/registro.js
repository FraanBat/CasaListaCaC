const buscarUsuario = function(mail) {
    if(localStorage.getItem("listaUsuarios") !== null){
        if(JSON.parse(localStorage.getItem("listaUsuarios")).find(usuarioBuscado => usuarioBuscado.mail === mail)){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

document.getElementById("altaUsuario").addEventListener('submit', function(event){

    event.preventDefault()

    if(buscarUsuario(document.getElementById("mail").value) === false){
        let usuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || []
        usuarios.push({
            id: usuarios.length + 1,
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            mail: document.getElementById("mail").value,
            zona: document.getElementById("zona").value,
            telefono: document.getElementById("telefono").value,
            genero: document.getElementById("genero").value,
            imagen: document.getElementById("imagen").value.replace('C:\\fakepath\\', '../static/img/perfil/'),
            especializacion: {
                especialista: false,
                profesion: null
            },
            contrasena: document.getElementById("contrasena").value
        })
        localStorage.setItem("listaUsuarios", JSON.stringify(usuarios))

        Swal.fire({
            title: "Usuario creado",
            confirmButtonText: "Aceptar",
            icon: "success"
          }).then((result) =>{
            if(result.isConfirmed){
                localStorage.setItem("usuarioLogueado", usuarios[usuarios.length - 1].id)
                window.location.replace("../index.html")
            }
          });
        
    }
    else{
        Swal.fire({
            title: "Usuario ya existente",
            text: "Lo siento, ya existe un usuario con el mail especificado",
            icon: "error",
            confirmButtonColor: "#356194",
            confirmButtonText: "Aceptar"
          });
    }
})
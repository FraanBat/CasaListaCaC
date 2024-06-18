document.getElementById("loginUsuario").addEventListener('submit', function (event) {

    event.preventDefault()
    
    let usuario = document.getElementById("mail").value
    let password = document.getElementById("contrasena").value

    let url = "http://127.0.0.1:5000/loginUsuario"

    let data = {
        mail: usuario,
        contrasena: password
    }

    let options = {
        body: JSON.stringify(data),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }

    fetch(url, options)
    .then(response => response.json())
    .then(data =>{
        if(data.mensaje === "usuario y/o contraseña no válidos"){
            alert(data.mensaje)
        }
        else{
            localStorage.setItem("usuarioLogueado", data.id)
            window.location.replace("../")
        }
    })
})
//Solicita a la API el listado con todos los especialistas y lo guarda
const solicitarEspecialistas = function() {
    if(localStorage.getItem("usuarioLogueado") !== null){
        fetch("http://127.0.0.1:5000/solicitarEspecialistas/" + localStorage.getItem("usuarioLogueado"))
        .then(response => response.json())
        .then(data => {
        sessionStorage.setItem("listadoEspecialistas", JSON.stringify(data))
        sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(data))
    })
    .catch(error => console.error(error))
    }
}

solicitarEspecialistas()
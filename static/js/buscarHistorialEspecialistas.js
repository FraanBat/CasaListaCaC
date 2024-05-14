//Solicita a la API el listado con el historial de todos los especialistas y lo guarda
const solicitarHistorial = function() {
    fetch(`https://api.mockaroo.com/api/b76268d0?count=40&key=df8e15e0`)
    .then(response => response.json())
    .then(data => {
        sessionStorage.setItem("historialEspecialistas", JSON.stringify(data))
    })
    .catch(error => console.error(error))
}

solicitarHistorial()
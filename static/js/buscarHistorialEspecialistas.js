//Solicita a la API el listado con el historial de todos los especialistas y lo guarda
const solicitarHistorial = function() {
    fetch(`https://api.mockaroo.com/api/4c6523b0?count=40&key=b59cfd90`)
    .then(response => response.json())
    .then(data => new Promise(() => {
        sessionStorage.setItem("historialEspecialistas", JSON.stringify(data))
    }))
}

solicitarHistorial()
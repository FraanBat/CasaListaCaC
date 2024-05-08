//Solicita a la API el listado con todos los especialistas y lo guarda
const solicitarEspecialistas = function() {
    fetch(`https://api.mockaroo.com/api/9d323580?count=80&key=b59cfd90`)
    .then(response => response.json())
    .then(data => new Promise(() => {
        sessionStorage.setItem("listadoEspecialistas", JSON.stringify(data))
        sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(data))
    }))
    .catch(error => console.error(error))
}

solicitarEspecialistas()
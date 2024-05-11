//Solicita a la API el listado con todos los especialistas y lo guarda
const solicitarEspecialistas = function() {
    fetch(`https://api.mockaroo.com/api/e6a3a530?count=80&key=df8e15e0`)
    .then(response => response.json())
    .then(data => {
        sessionStorage.setItem("listadoEspecialistas", JSON.stringify(data))
        sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(data))
    })
    .catch(error => console.error(error))
}

solicitarEspecialistas()
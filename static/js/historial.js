let listaHistorial = []

//Solicita a la API el listado con el historial de todos los especialistas y lo guarda
const solicitarHistorial = function() {
    fetch(`https://api.mockaroo.com/api/4c6523b0?count=40&key=b59cfd90`)
    .then(response => response.json())
    .then(data => new Promise(() => {
        sessionStorage.setItem("historialEspecialistas", JSON.stringify(data))
        listaHistorial = data
        mostrarHistorialEspecialistas(data)
    }))
}

const mostrarHistorialEspecialistas = function(listadoEspecialistas) {
    const especialistas = document.getElementById("historialEspecialistas")
    const especialistaHistorial = []

    listadoEspecialistas.forEach(especialista => {
        const nuevoEspecialista = document.createElement("div")
        nuevoEspecialista.className = "en-linea"
        nuevoEspecialista.innerHTML = 
        `
            <div>
                <img class="foto" src="${especialista.foto_perfil}" alt="imagen">
            </div>
            <div class="derecha">
                <h3>${especialista.profesion}: ${especialista.apellido} ${especialista.nombre}</h3>
                <p><strong>Fecha de realización: ${especialista.fecha_trabajo}</strong>
                    <br>Dejar comentario <span class="boton" onclick="enviarDetalleHistorial(${especialista.id})"> Click </a>
                </p>
            </div>
        `
        especialistaHistorial.push(nuevoEspecialista)
    })

    especialistas.append(...especialistaHistorial)
}

const enviarDetalleHistorial = function(idEspecialista){
    sessionStorage.setItem("historialEspecialistaDetalle", idEspecialista)
    window.location.replace("../templates/trabajador.html")
}

solicitarHistorial()
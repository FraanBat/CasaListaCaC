let listaEspecialistas = []


//Solicita a la API el listado con todos los especialistas y lo guarda
const solicitarEspecialistas = () => {
    fetch(`https://api.mockaroo.com/api/9d323580?count=80&key=b59cfd90`)
        .then(response => response.json())
        .then(data => new Promise(() => {
            sessionStorage.setItem("listadoEspecialistas", JSON.stringify(data))
            listaEspecialistas = data
            mostrarEspecialistas(data)
        }))
}

const filtroEspecialistas = (listaEspecialistas, filtroEspecialista) => {
    if (filtroEspecialista !== "") {
        listaEspecialistas = listaEspecialistas.filter(especialista => especialista.profesion === filtroEspecialista)
    }
    return listaEspecialistas
}

document.getElementById("buscadorEspecialidad").addEventListener('submit', function (event) {
    event.preventDefault()

    let especialidad = document.getElementById("especialidad").value
    let listaEspecialistasFiltrada = filtroEspecialistas(listaEspecialistas, especialidad)
    if (listaEspecialistasFiltrada.length > 0) {
        mostrarEspecialistas(listaEspecialistasFiltrada)
    }
    else {
        Swal.fire({
            title: "Sin disponibilidad",
            text: "Lo siento, pero no se encontraron especialistas con las especificaciones realizadas",
            icon: "warning",
            confirmButtonColor: "#356194",
            confirmButtonText: "Aceptar"
        });
    }
})

//Muestra los especialistas, de acuerdo con las especificaciones realizadas
const mostrarEspecialistas = listadoEspecialistas => {

    //Verifica si hay que limpiar el listado de especialistas que muestra actualmente
    const limpiarListado = document.querySelectorAll("div.especialista")
    if (limpiarListado.length > 0) {
        limpiarListado.forEach(especialista => especialista.remove())
    }

    const especialistas = document.getElementById("especialistas")
    const especialistaDisponible = []
    listadoEspecialistas.forEach(especialista => {
        const nuevoEspecialista = document.createElement("div")
        nuevoEspecialista.className = "especialista"
        nuevoEspecialista.innerHTML =
            `
        <a class="linea" href="detalle.html?id_especialista=${especialista.id}">
            <div>
                <img class="foto" src="${especialista.foto_perfil}" alt="">
            </div>
            <div>
                <br> <br><br>
            
                    <h4>${especialista.profesion}<br>
                        ${especialista.apellido} ${especialista.nombre}
                    </h4>
                
            </div>
            <div class="descripcion">
                <br>
                <h4>Descripción:</h4><br>
                <p>
                    ${especialista.descripcion}
                </p>
                <br>
            </div>
        </a>
        `
        especialistaDisponible.push(nuevoEspecialista)
    })
    especialistas.append(...especialistaDisponible)
}

solicitarEspecialistas()
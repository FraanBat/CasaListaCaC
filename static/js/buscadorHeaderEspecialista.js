document.getElementById("buscadorEspecialidad").addEventListener('submit', function(event){
    event.preventDefault()

    if(localStorage.getItem("usuarioLogueado") !== null){
        if(document.getElementById("especialidad").value === ""){
            sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(JSON.parse(sessionStorage.getItem("listadoEspecialistas"))))
        }
        else{
            let listaEspecialistasFiltrada = JSON.parse(sessionStorage.getItem("listadoEspecialistas"))
            listaEspecialistasFiltrada = listaEspecialistasFiltrada.filter(especialista => especialista.profesion.toLowerCase() === document.getElementById("especialidad").value.toLowerCase())
            sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(listaEspecialistasFiltrada))
        }

        if(JSON.parse(sessionStorage.getItem("FiltradoEspecialistaBuscado")).length > 0){
            window.location.replace("../templates/servicios.html")
        }
        else{
            sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(JSON.parse(sessionStorage.getItem("listadoEspecialistas"))))

            alert("Lo siento, pero no se encontraron especialistas con las especificaciones realizadas")
        }
    }
    else{
        alert("Lo siento, pero debe estar logueado para usar la funcionalidad de búsqueda de especialista")
    }
})
document.getElementById("buscadorEspecialidad").addEventListener('submit', function(event){
    event.preventDefault()

    if(localStorage.getItem("usuarioLogueado") !== null){
        if(document.getElementById("especialidad").value === ""){
            sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(JSON.parse(sessionStorage.getItem("listadoEspecialistas"))))
        }
        else{
            let listaEspecialistasFiltrada = JSON.parse(sessionStorage.getItem("listadoEspecialistas"))
            listaEspecialistasFiltrada = listaEspecialistasFiltrada.filter(especialista => especialista.profesion === document.getElementById("especialidad").value)
            sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(listaEspecialistasFiltrada))
        }

        if(JSON.parse(sessionStorage.getItem("FiltradoEspecialistaBuscado")).length > 0){
            window.location.replace("../templates/servicios.html")
        }
        else{
            sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(JSON.parse(sessionStorage.getItem("listadoEspecialistas"))))

            Swal.fire({
                title: "Sin disponibilidad",
                text: "Lo siento, pero no se encontraron especialistas con las especificaciones realizadas",
                icon: "warning",
                confirmButtonColor: "#356194",
                confirmButtonText: "Aceptar"
            });
        }
    }
    else{
        Swal.fire({
            title: "Usuario sin loguearse",
            text: "Lo siento, pero debe estar logueado para usar la funcionalidad de búsqueda de especialista",
            icon: "warning",
            confirmButtonColor: "#356194",
            confirmButtonText: "Aceptar"
        });
    }
})
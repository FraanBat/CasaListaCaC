const mostrarHistorialEspecialistas = function (listadoEspecialistas) {
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
                <h3>${especialista.profesion}: 
${especialista.apellido} ${especialista.nombre}</h3>
<<<<<<< HEAD
                <p><strong>  Fecha de realización: 
        ${especialista.fecha_trabajo}</strong>
        Dejar comentario 
=======
                <p><strong>Fecha de realización: ${especialista.fecha_trabajo}</strong></p>
            <p>Dejar comentario 
>>>>>>> main
            
           <span class="boton" onclick="enviarDetalleHistorial(${especialista.id})"> Click </span>
                </p>
            </div>
        `
        especialistaHistorial.push(nuevoEspecialista)
    })

    especialistas.append(...especialistaHistorial)
}

const enviarDetalleHistorial = function (idEspecialista) {
    sessionStorage.setItem("historialEspecialistaDetalle", idEspecialista)
    window.location.replace("../templates/trabajador.html")
}

mostrarHistorialEspecialistas(JSON.parse(sessionStorage.getItem("historialEspecialistas")))
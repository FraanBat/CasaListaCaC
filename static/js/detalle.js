const mostrarDetalleEspecialista = function () {

    let detalleEspecialista = JSON.parse(sessionStorage.getItem("listadoEspecialistas")).find(especialista => especialista.id === parseInt(sessionStorage.getItem("especialistaDetalle")))

    const seccionEspecialista = document.getElementById("detalleEspecialista")
    const especialistaContenido = document.createElement("div")
    especialistaContenido.innerHTML = `
    <div class="fila1">
            <div class="imagen"><img class="foto" src="${detalleEspecialista.foto_perfil}" alt="imagen"></div>
            <div class="medio">
                <br><br>
                <h3>${detalleEspecialista.profesion} <br><br>
                    ${detalleEspecialista.apellido} ${detalleEspecialista.nombre}
                </h3>
            </div>
            <div class="derecha">
                <p>Teléfono: ${detalleEspecialista.telefono}</p>
                <p>Zona: ${detalleEspecialista.zona}</p>
                <p>Valoración: ${Math.floor(detalleEspecialista.valoracion)}/5 ⭐</p>
            </div>
        </div>
        <div class="fila2">
            <br>
            <h4>Descripción:</h4><br>
            <p>
                ${detalleEspecialista.descripcion}
            </p>
            <br>
        </div>
        <div class="fila3"><button class="boton" onclick="confirmarPedido()">Confirmar</button>
        </div>
        <div class="fila4">
            <h4>Opiniones sobre el profesional</h4>
            <div class="opiniones">
                <h5 class="comentarista">${detalleEspecialista.nombre_comentarios}</h5>
                <p class="comentario">${detalleEspecialista.comentarios}</p>
            </div>
        </div>
    `

    seccionEspecialista.appendChild(especialistaContenido)
}

const confirmarPedido = function () {
    alert("Pedido confirmado")
    window.location.replace("servicios.html")
}

mostrarDetalleEspecialista()
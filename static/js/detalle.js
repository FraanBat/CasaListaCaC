const mostrarDetalleEspecialista = function () {

    let detalleEspecialista = JSON.parse(sessionStorage.getItem("listadoEspecialistas")).find(especialista => especialista.id === parseInt(sessionStorage.getItem("especialistaDetalle")))

    const seccionEspecialista = document.getElementById("detalleEspecialista")
    const especialistaContenido = document.createElement("div")
    especialistaContenido.innerHTML = `
    <div class="fila1">
            <div class="imagen"><img class="foto" src="${detalleEspecialista.foto_perfil}" alt="imagen"></div>
            <div class="medio">           
         <h3>

${detalleEspecialista.profesion} 
${detalleEspecialista.apellido} ${detalleEspecialista.nombre}
           </h3>
            </div>
            <div class="derecha">
         <p>
Teléfono: ${detalleEspecialista.telefono}
Zona: ${detalleEspecialista.zona}
Valoración: ${Math.floor(detalleEspecialista.valoracion)}/5 ⭐</p>
            </div>
        </div>
        <div class="fila2">
            
            <h4>Descripción:</h4>
            <p>
                ${detalleEspecialista.descripcion}
            </p>
            
        </div>
        <div class="fila3"><button class="boton" onclick="confirmarPedido(${detalleEspecialista.id})">Confirmar</button>
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

const confirmarPedido = idEspecialista => {

    let url = "http://127.0.0.1:5000/altaPedido"

    let datosPedido = {
        clienteId: parseInt(localStorage.getItem("usuarioLogueado")),
        profesionalId: idEspecialista
    }

    let options = {
        body: JSON.stringify(datosPedido),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }

    fetch(url, options)
                .then(function(){
                    alert("Pedido confirmado")
                    window.location.replace("servicios.html")
                })
                .catch(err => {
                    alert("Error al grabar" )
                    console.error(err);
                })
}

mostrarDetalleEspecialista()
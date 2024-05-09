const identificadorUsuarioActual = parseInt(localStorage.getItem("usuarioLogueado"))

let listadoPedidos = []

const mostrarPedidos = function (listadoPedidosUsuario) {
    const pedidos = document.getElementById("pedidos")
    const pedidosPendientes = []

    //Verifica si hay que limpiar el listado de pedidos que muestra actualmente
    const limpiarListado = document.querySelectorAll("div.pedido")
    if (limpiarListado.length > 0) {
        limpiarListado.forEach(pedido => pedido.remove())
    }

    listadoPedidosUsuario.forEach(pedidoPendiente => {
        const pedido = document.createElement("div")
        pedido.className = "pedido"
        pedido.innerHTML = `
                <h4 class="Cli">Cliente</h4> 
                <img class="foto" src="${pedidoPendiente.foto_perfil}" alt="">
                <p class="nombre">
    ${pedidoPendiente.nombre}       
    ${pedidoPendiente.apellido}     
    ${pedidoPendiente.telefono}
                </p>
                <button class="boton" onclick="pedidoRealizado(${pedidoPendiente.id})">Aceptar</button>              
        `
        pedidosPendientes.push(pedido)
    })

    pedidos.append(...pedidosPendientes)
}

const cargarPedidos = function () {

    let listadoPedidosUsuario

    if (localStorage.getItem("listadoPedidos") === null) {
        fetch(`https://api.mockaroo.com/api/e805c390?count=6&key=df8e15e0`)
            .then(response => response.json())
            .then(data => new Promise(() => {
                listadoPedidosUsuario = { id: identificadorUsuarioActual, pedidos: data }
                listadoPedidos.push(listadoPedidosUsuario)
                localStorage.setItem("listadoPedidos", JSON.stringify(listadoPedidos))
                mostrarPedidos(listadoPedidosUsuario.pedidos)
            }))
    }
    else {
        listadoPedidos = JSON.parse(localStorage.getItem("listadoPedidos"))
        listadoPedidosUsuario = listadoPedidos.find(especialistaBuscado => especialistaBuscado.id === identificadorUsuarioActual)
        if (listadoPedidosUsuario === undefined || listadoPedidosUsuario.pedidos.length === 0) {
            fetch(`https://api.mockaroo.com/api/e805c390?count=6&key=df8e15e0`)
                .then(response => response.json())
                .then(data => new Promise(() => {
                    listadoPedidosUsuario = { id: identificadorUsuarioActual, pedidos: data }
                    listadoPedidos.push(listadoPedidosUsuario)
                    localStorage.setItem("listadoPedidos", JSON.stringify(listadoPedidos))
                    mostrarPedidos(listadoPedidosUsuario.pedidos)
                }))
                .catch(error => console.error(error))
        }
        else {
            mostrarPedidos(listadoPedidosUsuario.pedidos)
        }
    }
}

const pedidoRealizado = function (idPedido) {
    let usuarioPedidos = listadoPedidos.find(especialistaBuscado => especialistaBuscado.id === identificadorUsuarioActual) //Contiene la información sobre pedidos de un usuario en particular
    const listadoPedidosUsuario = usuarioPedidos.pedidos //Contiene la información de los pedidos del usuario
    const pedidoRealizado = listadoPedidosUsuario.findIndex(pedido => pedido.id === idPedido) //Contiene la posición del pedido realizado

    listadoPedidosUsuario.splice(pedidoRealizado, 1)

    if (listadoPedidosUsuario.length > 0) {
        usuarioPedidos = { id: identificadorUsuarioActual, pedidos: listadoPedidosUsuario }
        listadoPedidos[listadoPedidos.findIndex(usuario => usuario.id === identificadorUsuarioActual)] = usuarioPedidos
    }

    else {
        listadoPedidos.splice(listadoPedidos.findIndex(usuario => usuario.id === identificadorUsuarioActual), 1)
        alert("No cuenta con pedidos pendientes")
    }

    localStorage.setItem("listadoPedidos", JSON.stringify(listadoPedidos))

    mostrarPedidos(usuarioPedidos.pedidos)

}

cargarPedidos()
const solicitarEspecialistas = () => {
    fetch(`https://api.mockaroo.com/api/9d323580?count=80&key=b59cfd90`)
    .then(response => response.json())
    .then(data => new Promise(() => {
        sessionStorage.setItem("listadoEspecialistas", JSON.stringify(data))
        mostrarEspecialistas(data)
    }))
}

const mostrarEspecialistas = listadoEspecialistas => {
    const especialistas = document.getElementById("especialistas")
    const especialistaDisponible = []
    listadoEspecialistas.forEach(especialista => {
        const nuevoEspecialista = document.createElement("div")
        nuevoEspecialista.className = "especialista"
        nuevoEspecialista.innerHTML = 
        `
        <a href="detalle.html?id_especialista=${especialista.id}">
            <div>
                <img class="foto" src="${especialista.foto_perfil}" alt="">
            </div>
            <div>
                <br> <br><br>
                <a href="detalle.html?id_especialista=${especialista.id}">
                    <h4>${especialista.profesion}<br>
                        ${especialista.apellido} ${especialista.nombre}
                    </h4>
                </a>
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
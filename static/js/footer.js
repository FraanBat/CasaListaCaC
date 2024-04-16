const terminosYCondiciones = document.getElementById("TerminosYCondiciones")
const quienesSomos = document.getElementById("QuienesSomos")

terminosYCondiciones.onclick = () => {
    Swal.fire({
        title: "Términos y condiciones",
        text: "Casa Lista nunca compartirá sus datos personales, más allá de su nombre, apellido, zona en donde vive y número de teléfono",
        icon: "info",
        confirmButtonText: "Confirmar"
    });
}

quienesSomos.onclick = () => {
    const equipo = "Desarrolladores:\n- Eduardo Ojeda\n- Franco Andres Riggio\n- Silvia Gomez\nUI/UX:\n- Noelia Sciorra"
    Swal.fire({
        title: "¿Quiénes somos?",
        icon: "info",
        html: '<pre>' + equipo + '</pre>',
        confirmButtonText: "Confirmar"
    });
}
document.getElementById("TerminosYCondiciones").addEventListener('click', function(){
    Swal.fire({
        title: "Términos y condiciones",
        text: "Casa Lista nunca compartirá sus datos personales, más allá de su nombre, apellido, zona en donde vive y número de teléfono",
        icon: "info",
        confirmButtonText: "Confirmar"
    });
})

document.getElementById("QuienesSomos").addEventListener('click', function(){
    const equipo = "Desarrolladores:\n- Eduardo Ojeda\n- Franco Andres Riggio\n- Silvia Gomez\nUI/UX:\n- Noelia Sciorra"
    Swal.fire({
        title: "¿Quiénes somos?",
        icon: "info",
        html: '<pre>' + equipo + '</pre>',
        confirmButtonText: "Confirmar"
    });
})
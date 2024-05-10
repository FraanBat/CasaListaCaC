const mostrarDetalleHistorial = function () {

    let detalleHistorial = JSON.parse(sessionStorage.getItem("historialEspecialistas")).find(especialista => especialista.id === parseInt(sessionStorage.getItem("historialEspecialistaDetalle")))

    const seccionHistorialEspecialista = document.getElementById("detalleHistorialEspecialista")
    const especialistaContenido = document.createElement("div")
    especialistaContenido.className = "en-linea"
    especialistaContenido.innerHTML = `
                <div class="imagenes">
                    <img class="foto" src="${detalleHistorial.foto_perfil}" alt="imagen">
                </div>
                <div class="derecha">
                        <h3>${detalleHistorial.profesion}:    ${detalleHistorial.apellido}   ${detalleHistorial.nombre}</h3>                  
<strong>Amabilidad</strong> <strong class="amabilidad">
                                <input type="radio" id="star5" name="Amabilidad" value="5">
                                <label class="star" for="star5">★</label>
                                <input type="radio" id="star4" name="Amabilidad" value="4">
                                <label class="star" for="star4">★</label>
                                <input type="radio" id="star3" name="Amabilidad" value="3">
                                <label class="star" for="star3">★</label>
                                <input type="radio" id="star2" name="Amabilidad" value="2">
                                <label class="star" for="star2">★</label>
                                <input type="radio" id="star1" name="Amabilidad" value="1">
                                <label class="star" for="star1">★</label>
                             </strong>
                        
<strong>Puntualidad</strong> <strong class="puntualidad">
                                <input type="radio" id="star10" name="Puntualidad" value="5">
                                <label class="star" for="star10">★</label>
                                <input type="radio" id="star9" name="Puntualidad" value="4">
                                <label class="star" for="star9">★</label>
                                <input type="radio" id="star8" name="Puntualidad" value="3">
                                <label class="star" for="star8">★</label>
                                <input type="radio" id="star7" name="Puntualidad" value="2">
                                <label class="star" for="star7">★</label>
                                <input type="radio" id="star6" name="Puntualidad" value="1">
                                <label class="star" for="star6">★</label>
                                
                             </strong>
                        
<strong>Prolijidad</strong><strong class="proligidad">
                                <input type="radio" id="star15" name="Proligidad" value="5">
                                <label class="star" for="star15">★</label>
                                <input type="radio" id="star14" name="Proligidad" value="4">
                                <label class="star" for="star14">★</label>
                                <input type="radio" id="star13" name="Proligidad" value="3">
                                <label class="star" for="star13">★</label>
                                <input type="radio" id="star12" name="Proligidad" value="2">
                                <label class="star" for="star12">★</label>
                                <input type="radio" id="star11" name="Proligidad" value="1">
                                <label class="star" for="star11">★</label>
                             </strong>
                      
<strong>Confiabilidad</strong><strong class="confiabilidad">
                                    <input type="radio" id="star20" name="Confiabilidad" value="5">
                                    <label class="star" for="star20">★</label>
                                    <input type="radio" id="star19" name="Confiabilidad" value="4">
                                    <label class="star" for="star19">★</label>
                                    <input type="radio" id="star18" name="Confiabilidad" value="3">
                                    <label class="star" for="star18">★</label>
                                    <input type="radio" id="star17" name="Confiabilidad" value="2">
                                    <label class="star" for="star17">★</label>
                                    <input type="radio" id="star16" name="Confiabilidad" value="1">
                                    <label class="star" for="star16">★</label>
                             </strong>
                        
        <strong><label for="comentario">Comentario</label></strong>
        <textarea name="comentario" id="comentario" cols="40" rows="5" maxlength="200"></textarea>
                        
                        <strong><button class="boton booton" type="submit" onclick="enviarCalificacion()">Enviar</button></strong>
                </div>
    `

    seccionHistorialEspecialista.appendChild(especialistaContenido)
}

const validarCalificacion = function(radio){
    for (let i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
          return true
        }
    }
    return false
}

const enviarCalificacion = function () {
    let radiosAmabilidad = document.getElementsByName('Amabilidad')
    let radiosPuntualidad = document.getElementsByName('Puntualidad')
    let radiosProligidad = document.getElementsByName('Proligidad')
    let radiosConfiabilidad = document.getElementsByName('Confiabilidad')
    let textoComentarios = document.getElementById('comentario').value.trim()

    console.log(textoComentarios)

    if(validarCalificacion(radiosAmabilidad) && validarCalificacion(radiosPuntualidad) && validarCalificacion(radiosProligidad) && validarCalificacion(radiosConfiabilidad) && textoComentarios !== ""){
        alert("Su calificación ha sido enviada. ¡Muchas gracias!")
        window.location.replace("historial.html")
    }
    else{
        alert("Disculpe, falta completar alguno de los campos")
    }
}

mostrarDetalleHistorial()
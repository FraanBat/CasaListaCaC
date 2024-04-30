//Al seleccionar una especialidad,c valida que el usuario haya iniciado sesión. Si no lo hizo, le pide que se loguee
const validarLogin = function(especialidad) {
  if(localStorage.getItem("usuarioLogueado") !== null){
    let listaEspecialistasABuscar = JSON.parse(sessionStorage.getItem("listadoEspecialistas"))
      listaEspecialistasABuscar = listaEspecialistasABuscar.filter(especialista => especialista.profesion === especialidad)
    sessionStorage.setItem("FiltradoEspecialistaBuscado", JSON.stringify(listaEspecialistasABuscar))
    window.location.replace("templates/servicios.html")
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
}

//Cierra sesión del usuario
const cerrarSesion = function() {
  localStorage.removeItem("usuarioLogueado")
  window.location.replace("../index.html")
}
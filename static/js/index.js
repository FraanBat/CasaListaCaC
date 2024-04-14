const login = document.getElementById("login")
const terminosYCondiciones = document.getElementById("TerminosYCondiciones")

function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    return reg.test(email)
}

login.onclick = () => {
  Swal.fire({
      title: "Loguearse",
      html:
      'Email: <input type="email" id="swal-input1" class="swal2-input">' +
      'Clave: <input type="password" id="swal-input2" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      },
      confirmButtonColor: "#356194",
      showDenyButton: true,
      denyButtonColor: "#EB7C00",
      denyButtonText: `Registrarme`
      })
      .then((result) => {
          if (result.isConfirmed) {
              if (validateEmail(result.value[0])) {
                Swal.fire(`Listo`);
              }
              else{
                  Swal.fire(`Datos no válidos`);
              }
          } else if (result.isDenied) {
            window.open("templates/registro.html");
          }
      });
}

terminosYCondiciones.onclick = () => {
  Swal.fire({
    title: "Términos y condiciones",
    text: "Casa Lista nunca compartirá sus datos personales, más allá de su nombre, apellido, zona en donde vive y número de teléfono",
    icon: "info"
  });
}
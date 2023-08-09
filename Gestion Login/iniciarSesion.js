document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("usuario").value;
  const password = document.getElementById("contraseña").value;

  const usuarios = [
    {
      "usuario": "Admin0",
      "contrasena": "Admin0",
      "nombre": "Diego",
      "centro": "Plaza Mayor"
    },
    {
      "usuario": "Admin1",
      "contrasena": "Admin1",
      "nombre": "Jimena",
      "centro": "Centro "
    },
    {
      "usuario": "Admin2",
      "contrasena": "Admin2",
      "nombre": "Jonathan",
      "centro": "Centro Max"
    },
    // Otros usuarios aquí
  ];

  const empleados = [
    {
      "usuario": "15060000",
      "contrasena": "15060000",
      "nombre": "Karen ",
       "centro": "Galerias"
    },
    {
      "usuario": "15060001",
      "contrasena": "15060001",
      "nombre": "Alejandro ",
       "centro": "Plaza Mayor"
    },
      {
      "usuario": "15060002",
      "contrasena": "15060002",
      "nombre": "Jose",
       "centro": "Centro Max"
    },
    // Otros empleados aquí
  ];

  const user = usuarios.find(user => user.usuario === username && user.contrasena === password);
  const empleado = empleados.find(empleado => empleado.usuario === username && empleado.contrasena === password);

 if (user) {
    localStorage.setItem("nombreUsuario", user.nombre);
    localStorage.setItem("nombreCentro", user.centro);
   
    window.location.href = "../Admin/index.html";
  } else if (empleado) {
    localStorage.setItem("nombreUsuarioEmpleado", empleado.nombre);
    localStorage.setItem("nombreCentroEmpleado", empleado.centro);
   
    window.location.href = "../Empleado/index.html";
  } else {
    // Llamada a SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña incorrectos',
    });
  }
});







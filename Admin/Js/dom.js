document.addEventListener("DOMContentLoaded", function() {
    const nombreUsuario = localStorage.getItem("nombreUsuario");
     const nombreCentro = localStorage.getItem("nombreCentro");
     
    if (nombreUsuario) {
    document.getElementById('nombreUsuario').textContent = nombreUsuario;
     
    
  }
  if (nombreCentro) {
    document.getElementById('nombreCentro').textContent = nombreCentro;
  }
    });
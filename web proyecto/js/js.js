function mostrarRegistro() {
  document.getElementById("login").style.display = "none";
  document.getElementById("registro").style.display = "block";
}

function mostrarLogin() {
  document.getElementById("registro").style.display = "none";
  document.getElementById("login").style.display = "block";
}

// Recuperar usuarios guardados
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

document.addEventListener("DOMContentLoaded", () => {
  // Registro
  const formRegistro = document.getElementById("registroForm");
  if (formRegistro) {
    formRegistro.addEventListener("submit", function(event) {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const contrasena = document.getElementById("contrasenaReg").value;
      const confirmar = document.getElementById("confirmar").value;

      if (contrasena !== confirmar) {
        alert("❌ Las contraseñas no coinciden");
        return;
      }

      const nuevoUsuario = { nombre, correo, contrasena };
      usuarios.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      alert("✅ Usuario registrado correctamente");
      formRegistro.reset();
      mostrarLogin();
    });
  }

  // Login
  const formLogin = document.getElementById("loginForm");
  if (formLogin) {
    formLogin.addEventListener("submit", function(event) {
      event.preventDefault();

      const usuario = document.getElementById("usuarioLogin").value;
      const contrasena = document.getElementById("contrasenaLogin").value;
      const mensajeError = document.getElementById("mensajeError");

      const encontrado = usuarios.find(u => u.correo === usuario || u.nombre === usuario);

      if (encontrado && encontrado.contrasena === contrasena) {
        localStorage.setItem("usuarioActivo", usuario); // guardar sesión
        window.location.href = "paginas/usuario.html";

      } else {
        if (mensajeError) {
          mensajeError.textContent = "❌ Datos incorrectos, intente nuevamente";
          mensajeError.style.display = "block";
        }
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const btnSalir = document.getElementById("btnSalir");
  if (btnSalir) {
    btnSalir.addEventListener("click", (e) => {
      e.preventDefault();
      cerrarSesion();
    });
  }
});


//cerrar sesion
function cerrarSesion() {
  localStorage.removeItem("usuarioActivo"); // borrar sesión
  window.location.href = "../index.html";   // volver al login
}

//blog
//captura del formulario
    document.getElementById("comentariosForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const correo = document.getElementById("correo").value;
      const comentario = document.getElementById("comentario").value;
      alert("Gracias por tu comentario.\nCorreo: " + correo + "\nComentario: " + comentario);
    });

    function cerrarSesion() {
      localStorage.removeItem("usuarioActivo");
      window.location.href = "../index.html";
    }
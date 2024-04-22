// Función para manejar la visibilidad de la imagen
function toggleImageVisibility() {
  var logo = document.getElementById('logo');
  var contenedor = document.querySelector('.contenedor-sobre-nosotros');
  
  if (window.innerWidth <= 700) { // Si la pantalla es igual o menor a 600px
    if (logo) {
      logo.parentNode.removeChild(logo); // Elimina la imagen del DOM si existe
    }
  } else {
    if (!logo) { // Si la imagen no existe en el DOM
      var nuevaImagen = document.createElement('img');
      nuevaImagen.src = 'img/logoSinFondo.svg';
      nuevaImagen.alt = '';
      nuevaImagen.className = 'imagen-about-us';
      nuevaImagen.id = 'logo';
      contenedor.insertBefore(nuevaImagen, contenedor.firstChild); // Agrega la imagen al contenedor
    }
  }
}

// Llamamos a la función cuando se carga la página y cuando se redimensiona la ventana
window.addEventListener('DOMContentLoaded', toggleImageVisibility);
window.addEventListener('resize', toggleImageVisibility);
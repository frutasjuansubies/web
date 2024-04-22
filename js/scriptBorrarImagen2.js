function toggleImageVisibility() {
  var vendedor = document.getElementById('vendedor');
  var contenedor = document.querySelector('.contenedor-sobre-nosotros');
  
  if (window.innerWidth <= 700) { // Si la pantalla es igual o menor a 600px
    if (vendedor) {
      vendedor.parentNode.removeChild(vendedor); // Elimina la imagen del DOM si existe
    }
  } else {
    if (!vendedor) { // Si la imagen no existe en el DOM
      var nuevaImagen = document.createElement('img');
      nuevaImagen.src = 'img/vendedor.jpg';
      nuevaImagen.alt = '';
      nuevaImagen.className = 'imagen-sobre-nosotros';
      nuevaImagen.id = 'vendedor';
      contenedor.insertBefore(nuevaImagen, contenedor.firstChild); // Agrega la imagen al contenedor
    }
  }
}

// Llamamos a la función cuando se carga la página y cuando se redimensiona la ventana
window.addEventListener('DOMContentLoaded', toggleImageVisibility);
window.addEventListener('resize', toggleImageVisibility);
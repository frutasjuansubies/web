function enviarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    // Validar que los campos no estén vacíos
    if (nombre === '') {
        document.getElementById("errorNombre").innerHTML = "<strong>Por favor ingresa tu nombre.</strong>";
        return;
    } else {
        document.getElementById("errorNombre").innerHTML = "";
    }

    if (email === '') {
        document.getElementById("errorEmail").innerHTML = "<strong>Por favor ingresa tu correo electrónico.</strong>";
        return;
    } else {
        document.getElementById("errorEmail").innerHTML = "";
    }
	
	if (mensaje === '') {
        document.getElementById("errorMensaje").innerHTML = "<strong>Por favor ingresa un mensaje.</strong>";
        return;
    } else {
        document.getElementById("errorMensaje").innerHTML = "";
    }

    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").innerHTML = "<strong>Por favor ingresa un correo electrónico válido.</strong>";
        return;
    } else {
        document.getElementById("errorEmail").innerHTML = "";
    }

    // Aquí puedes agregar código para enviar los datos del formulario a través de AJAX
    // Por ejemplo, podrías usar fetch() o XMLHttpRequest para enviar los datos a un servidor

    // Aquí simularemos una alerta de éxito
    alert('¡Mensaje enviado con éxito!');
    
    // Limpiar el formulario después del envío
    document.getElementById("contactForm").reset();
}
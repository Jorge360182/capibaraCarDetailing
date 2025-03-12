//Image rotativas
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    function changeImage() {
        // Eliminar la clase "active" de todas las imágenes
        images.forEach((img) => img.classList.remove("active"));

        // Agregar la clase "active" a la siguiente imagen
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Inicializar mostrando la primera imagen
    images[currentIndex].classList.add("active");

    // Cambiar imagen cada 3 segundos
    setInterval(changeImage, 3000);
});


// Formulario de Venta y Cambio
document.getElementById('sales-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por enviar los detalles de tu auto. Nos pondremos en contacto contigo pronto.');
});

// Formulario de Impresión 3D
document.getElementById('tres-d-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu solicitud de impresión 3D. Te contactaremos para más detalles.');
});

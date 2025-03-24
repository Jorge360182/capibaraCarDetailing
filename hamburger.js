(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburger');
    
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
        hamburger.classList.toggle('open'); // Añadir clase para cambiar el ícono
    });
})()




// Seleccionar todos los contenedores de imágenes rotativas
const rotativeContainers = document.querySelectorAll('.rotative-container');

// Iterar sobre cada contenedor de imágenes rotativas
rotativeContainers.forEach((container) => {
    const rotative = container.querySelector('.rotative');
    const rotativeImages = container.querySelectorAll('.rotative img');
    const rotativePrev = container.querySelector('.rotative-prev');
    const rotativeNext = container.querySelector('.rotative-next');

    let currentRotativeIndex = 0; // Índice de la imagen visible en las imágenes rotativas

    // Actualiza la posición de las imágenes rotativas
    function updateRotative() {
        const imageWidth = rotativeImages[0].clientWidth; // Ancho real de una imagen
        const offset = -currentRotativeIndex * imageWidth;
        rotative.style.transform = `translateX(${offset}px)`;
    }

    // Evento para el botón "anterior"
    rotativePrev.addEventListener('click', () => {
        currentRotativeIndex = (currentRotativeIndex > 0)
            ? currentRotativeIndex - 1
            : rotativeImages.length - 1; // Regresa al final si está en la primera imagen
        updateRotative();
    });

    // Evento para el botón "siguiente"
    rotativeNext.addEventListener('click', () => {
        currentRotativeIndex = (currentRotativeIndex < rotativeImages.length - 1)
            ? currentRotativeIndex + 1
            : 0; // Vuelve al inicio si está en la última imagen
        updateRotative();
    });

    // Soporte táctil SOLO en dispositivos móviles
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        let touchStartX = 0;
        let touchEndX = 0;

        rotative.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        rotative.addEventListener('touchmove', (e) => {
            touchEndX = e.touches[0].clientX;
        });

        rotative.addEventListener('touchend', () => {
            let swipeDistance = touchEndX - touchStartX;

            if (swipeDistance > 50) {
                // Deslizar a la derecha (imagen anterior)
                currentRotativeIndex = (currentRotativeIndex > 0)
                    ? currentRotativeIndex - 1
                    : rotativeImages.length - 1;
            } else if (swipeDistance < -50) {
                // Deslizar a la izquierda (imagen siguiente)
                currentRotativeIndex = (currentRotativeIndex < rotativeImages.length - 1)
                    ? currentRotativeIndex + 1
                    : 0;
            }

            updateRotative();
        });
    }

    // Inicializar la posición del carrusel
    updateRotative();
});

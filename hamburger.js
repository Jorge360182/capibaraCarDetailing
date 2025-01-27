(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburger');
    
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
        hamburger.classList.toggle('open'); // Añadir clase para cambiar el ícono
    });
})()




// Seleccionar elementos del carrusel
const rotative = document.querySelector('.rotative');
const rotativeImages = document.querySelectorAll('.rotative img');
const rotativePrev = document.querySelector('.rotative-prev');
const rotativeNext = document.querySelector('.rotative-next');

let currentRotativeIndex = 0; // Índice de la imagen visible en el carrusel

function updateRotative() {
    const offset = -currentRotativeIndex * 100; // Calcula el desplazamiento
    rotative.style.transform = `translateX(${offset}%)`;
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

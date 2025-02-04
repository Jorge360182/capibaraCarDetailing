// (function () {
//     let navbar = document.querySelector('#navbar');
//     let hamburger = document.querySelector('#hamburger');
    
//     hamburger.addEventListener('click', () => {
//         navbar.classList.toggle('open');
//         hamburger.classList.toggle('open'); // Añadir clase para cambiar el ícono
//     });
// })()



// // Seleccionar elementos del carrusel
// const rotative = document.querySelector('.rotative');
// const rotativeImages = document.querySelectorAll('.rotative img');
// const rotativePrev = document.querySelector('.rotative-prev');
// const rotativeNext = document.querySelector('.rotative-next');

// let currentRotativeIndex = 0; // Índice de la imagen visible en el carrusel

// // Actualiza la posición del carrusel
// function updateRotative() {
//     const imageWidth = rotativeImages[0].clientWidth; // Ancho real de una imagen
//     const offset = -currentRotativeIndex * imageWidth;
//     rotative.style.transform = `translateX(${offset}px)`;
// }

// // Evento para el botón "anterior"
// rotativePrev.addEventListener('click', () => {
//     currentRotativeIndex = (currentRotativeIndex > 0) 
//         ? currentRotativeIndex - 1 
//         : rotativeImages.length - 1; // Regresa al final si está en la primera imagen
//     updateRotative();
// });

// // Evento para el botón "siguiente"
// rotativeNext.addEventListener('click', () => {
//     currentRotativeIndex = (currentRotativeIndex < rotativeImages.length - 1) 
//         ? currentRotativeIndex + 1 
//         : 0; // Vuelve al inicio si está en la última imagen
//     updateRotative();
// });

// //  Soporte táctil SOLO en dispositivos móviles
// if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
//     let touchStartX = 0;
//     let touchEndX = 0;

//     rotative.addEventListener('touchstart', (e) => {
//         touchStartX = e.touches[0].clientX;
//     });

//     rotative.addEventListener('touchmove', (e) => {
//         touchEndX = e.touches[0].clientX;
//     });

//     rotative.addEventListener('touchend', () => {
//         let swipeDistance = touchEndX - touchStartX;

//         if (swipeDistance > 50) {
//             // Deslizar a la derecha (imagen anterior)
//             currentRotativeIndex = (currentRotativeIndex > 0) 
//                 ? currentRotativeIndex - 1 
//                 : rotativeImages.length - 1;
//         } else if (swipeDistance < -50) {
//             // Deslizar a la izquierda (imagen siguiente)
//             currentRotativeIndex = (currentRotativeIndex < rotativeImages.length - 1) 
//                 ? currentRotativeIndex + 1 
//                 : 0;
//         }

//         updateRotative();
//     });
// }

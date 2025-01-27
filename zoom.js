const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

// Delegación de eventos para las imágenes
document.getElementById('autos-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-img')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src; // Cambia la imagen del lightbox
    }
});

// Cierra el lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Cierra el lightbox al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    // Delegación de eventos para los botones dinámicos
    document.getElementById('autos-container').addEventListener('click', (event) => {
        if (event.target.classList.contains('description-btn')) {
            const container = event.target.closest('.image-container'); // Encuentra el contenedor de la imagen
            container.classList.toggle('show-description'); // Alterna la clase para mostrar/ocultar la descripción
        }
    });
}

// Cargar imágenes dinámicas
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('autos-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.getElementById('close-lightbox');

    try {
        // Cargar datos desde el archivo JSON
        const response = await fetch('/assets/data/autos.json');
        const autos = await response.json();

        // Generar dinámicamente las tarjetas
        autos.forEach((auto) => {
            const card = document.createElement('div');
            card.classList.add('image-container');

            // Crear carrusel de imágenes
            const gallery = document.createElement('div');
            gallery.classList.add('image-gallery');
            auto.images.forEach((imageSrc) => {
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = "Auto en venta";
                img.classList.add('gallery-img');

                // Evento para abrir el lightbox
                img.addEventListener('click', () => {
                    lightbox.style.display = 'flex';
                    lightboxImg.src = img.src; // Cambia la imagen del lightbox
                });

                gallery.appendChild(img);
            });

            const description = `
                <div class="description">${auto.description}</div>
                <button class="description-btn">Detalles</button>
            `;

            card.appendChild(gallery);
            card.innerHTML += description;
            container.appendChild(card);
        });

        // Cerrar el lightbox
        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Cerrar el lightbox al hacer clic fuera de la imagen
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        container.innerHTML = '<p>Error al cargar los autos. Intenta más tarde.</p>';
    }
});

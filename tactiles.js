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

    try {
        const response = await fetch('autos.json');
        const autos = await response.json();

        autos.forEach((auto) => {
            const card = document.createElement('div');
            card.classList.add('image-container');

            // Contenedor para todas las imágenes dentro del carrusel
            const gallery = document.createElement('div');
            gallery.classList.add('image-gallery');

            const track = document.createElement('div');
            track.classList.add('gallery-track');
            track.dataset.currentIndex = "0";

            auto.images.forEach((imageSrc) => {
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = "Auto en venta";
                img.classList.add('gallery-img');
                track.appendChild(img);
            });

            gallery.appendChild(track);

            // Crear botones de navegación
            const prevButton = document.createElement('button');
            prevButton.classList.add('venta-prev');
            prevButton.innerHTML = '&#10094;';

            const nextButton = document.createElement('button');
            nextButton.classList.add('venta-next');
            nextButton.innerHTML = '&#10095;';

            const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = auto.description;

            card.appendChild(gallery);
            card.appendChild(prevButton);
            card.appendChild(nextButton);
            card.appendChild(description);
            container.appendChild(card);

            // Event Listeners para cambiar imágenes con las flechas
            prevButton.addEventListener('click', () => updateGalleryIndex(track, -1));
            nextButton.addEventListener('click', () => updateGalleryIndex(track, 1));

            // Descripción del auto y botón de detalles
            description.classList.add('description');
            description.innerText = auto.description;

            const detailsButton = document.createElement('button');
            detailsButton.classList.add('description-btn');
            detailsButton.innerText = 'Detalles';
            detailsButton.addEventListener('click', () => {
                description.classList.toggle('show-description');
            });

            card.appendChild(description);
            card.appendChild(detailsButton);

            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error al cargar los datos:', error);
        container.innerHTML = '<p>Error al cargar los autos. Intenta más tarde.</p>';
    }
});

// Función para actualizar la imagen con desplazamiento suave
function updateGalleryIndex(track, direction) {
    const images = track.querySelectorAll('.gallery-img');
    let currentIndex = parseInt(track.dataset.currentIndex, 10);

    currentIndex = (currentIndex + direction + images.length) % images.length;
    track.dataset.currentIndex = currentIndex;

    // Obtener el ancho real de la imagen para calcular el desplazamiento dinámicamente
    const imageWidth = images[0].clientWidth;
    const offset = -currentIndex * imageWidth;

    track.style.transform = `translateX(${offset}px)`; // Aplica desplazamiento suave
}

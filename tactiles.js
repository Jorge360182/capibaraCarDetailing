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
        // Cargar datos desde el archivo JSON
        const response = await fetch('autos.json');
        const autos = await response.json();

        // Generar dinámicamente las tarjetas
        autos.forEach((auto) => {
            const card = document.createElement('div');
            card.classList.add('image-container');

            card.innerHTML = `
                <img src="${auto.image}" alt="Auto en venta" class="gallery-img">
                <div class="description">${auto.description}</div>
                <button class="description-btn">Detalles</button>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        container.innerHTML = '<p>Error al cargar los autos. Intenta más tarde.</p>';
    }
});

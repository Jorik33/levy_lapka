// ====================================
// 1. ІНТЕГРАЦІЯ LEAFLET API (КАРТА)
// ====================================

// Координати для прикладу (Центр Києва)
const storeLat = 50.4501; 
const storeLng = 30.5234; 
const zoomLevel = 13;

// Функція ініціалізації карти
function initMap() {
    if (document.getElementById('mapid')) {
        const map = L.map('mapid').setView([storeLat, storeLng], zoomLevel);

        // Додавання шару тайлів (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Додавання маркера на місце розташування магазину
        L.marker([storeLat, storeLng])
            .addTo(map)
            .bindPopup("<b>Happy Paws Market</b><br>Ми тут!")
            .openPopup();
    }
}


// ====================================
// 2. ІНТЕРАКТИВНІ ЕЛЕМЕНТИ
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    // Запуск карти
    initMap(); 
    
    // Логіка мобільного меню
    const burgerButton = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav');

    if (burgerButton && navMenu) {
        burgerButton.addEventListener('click', () => {
            const isHidden = navMenu.style.display === 'none' || navMenu.style.display === '';
            navMenu.style.display = isHidden ? 'flex' : 'none';
        });
        
        document.querySelectorAll('.menu__link').forEach(link => {
             link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            });
        });
    }
});
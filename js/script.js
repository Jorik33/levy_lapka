// ====================================
// 1. ІНТЕГРАЦІЯ LEAFLET API (КАРТА)
// ====================================

// Координати для прикладу (Центр Києва)
const storeLat = 50.4501; 
const storeLng = 30.5234; 
const zoomLevel = 13;

// Функція ініціалізації карти
function initMap() {
    // Перевіряємо, чи існує елемент карти на сторінці
    if (document.getElementById('mapid')) {
        const map = L.map('mapid').setView([storeLat, storeLng], zoomLevel);

        // Додавання шару тайлів (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png', {
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
// 2. ФУНКЦІОНАЛ САЙТУ (МЕНЮ)
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Запуск карти
    initMap(); 

    // 2. Логіка мобільного меню
    const burgerButton = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav');
    const menuLinks = document.querySelectorAll('.menu__link');

    if (burgerButton && navMenu) {
        // Клік по кнопці меню
        burgerButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Запобігаємо спливанню, щоб не спрацював document.click
            navMenu.classList.toggle('active');
        });

        // Закриваємо меню при кліку на будь-яке посилання (щоб скролило до секції)
        menuLinks.forEach(link => {
             link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
            });
        });

        // Закриваємо меню при кліку будь-де поза меню
        document.addEventListener('click', (e) => {
            // Якщо клік не по меню І не по кнопці бургера
            if (!navMenu.contains(e.target) && !burgerButton.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});

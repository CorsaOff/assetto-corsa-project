document.addEventListener('DOMContentLoaded', () => {
    // Плавное появление карточек при прокрутке (Scroll Animation)
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    // Интерактивный лог в консоли для проверки JS
    console.log("Assetto Corsa Fan Page успешно загружена! JS работает исправно.");
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    button.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});
// Simple JS for toggling navbar in mobile view
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

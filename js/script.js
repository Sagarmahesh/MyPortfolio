// scripts.js

const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// dark and light mode switch

const toggleSwitch = document.getElementById('dark-mode-toggle');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

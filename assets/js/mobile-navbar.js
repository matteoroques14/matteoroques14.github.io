console.log('Script mobile-navbar.js chargé');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé');
    
    const barIcon = document.querySelector("#navbar-bar-icon");
    const xIcon = document.querySelector("#navbar-x-icon");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav .menu-element a");

    console.log('Bar icon:', barIcon);
    console.log('X icon:', xIcon);
    console.log('Nav:', nav);

    function toggleMenu() {
        console.log('Toggle menu appelé');
        nav.classList.toggle("open");
        barIcon.style.display = nav.classList.contains("open") ? "none" : "block";
        xIcon.style.display = nav.classList.contains("open") ? "block" : "none";
    }

    if (barIcon) {
        console.log('Ajout du listener sur barIcon');
        barIcon.addEventListener("click", toggleMenu);
    }
    if (xIcon) {
        console.log('Ajout du listener sur xIcon');
        xIcon.addEventListener("click", toggleMenu);
    }
    navLinks.forEach(link => {
        console.log('Ajout du listener sur un lien');
        link.addEventListener("click", toggleMenu);
    });
});
  
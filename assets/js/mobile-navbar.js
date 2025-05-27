document.addEventListener('DOMContentLoaded', function() {
    
    const barIcon = document.querySelector("#navbar-bar-icon");
    const xIcon = document.querySelector("#navbar-x-icon");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav .menu-element a");

    function toggleMenu() {
        nav.classList.toggle("open");
        const navUl = nav.querySelector('ul');
        if (navUl && nav.classList.contains("open")) {
            navUl.style.display = "flex";
        } else if (navUl) {
            navUl.style.display = "none";
        }
    }

    if (barIcon) {
        barIcon.addEventListener("click", toggleMenu);
    }
    if (xIcon) {
        xIcon.addEventListener("click", toggleMenu);
    }
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            if (nav.classList.contains("open")) toggleMenu();
        });
    });
});
  
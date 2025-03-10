document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav a");

    // Création du bouton de menu responsive
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰"; // Icône du menu
    document.querySelector("nav").prepend(menuToggle);

    // Fonction pour révéler les sections au scroll
    function revealSection() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    // Scroll fluide lors du clic sur un lien du menu
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });

    // Gestion du menu responsive
    menuToggle.addEventListener("click", () => {
        document.querySelector("nav ul").classList.toggle("open");
    });

    // Exécuter la fonction au chargement et lors du scroll
    revealSection();
    window.addEventListener("scroll", revealSection);
});

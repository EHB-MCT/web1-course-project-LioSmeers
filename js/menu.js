const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", function () {
    siteNav.classList.toggle("open");

    if (siteNav.classList.contains("open")) {
        menuToggle.textContent = "×";
    } else {
        menuToggle.textContent = "☰";
    }
});
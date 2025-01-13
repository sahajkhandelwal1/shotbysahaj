document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");

    // Toggle the "open" class when clicking on the dropdown
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the click from propagating
        dropdown.classList.toggle("open"); // Toggle the "open" class
    });

    // Close the dropdown if clicking anywhere else
    document.addEventListener("click", () => {
        dropdown.classList.remove("open");
    });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-menu");

// Toggle menu visibility on click
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});
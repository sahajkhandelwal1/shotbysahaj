document.addEventListener("DOMContentLoaded", () => {
    // --- Dropdown Toggle ---
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
        dropdown.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents event from bubbling up
            dropdown.classList.toggle("open");
        });
        document.addEventListener("click", () => dropdown.classList.remove("open"));
    }

    // --- Hamburger Menu ---
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-menu");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
    }

    // --- Lightbox Logic ---
    const images = document.querySelectorAll('.photo-gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    if (images.length > 0 && lightbox && lightboxImg) {
        let currentIndex = 0;
        const imageArray = Array.from(images);

        // Add event listeners to each image
        imageArray.forEach((img, index) => {
            img.classList.add('zoomable'); // Ensure the class is present
            img.addEventListener('click', () => {
                currentIndex = index;
                openLightbox(img.src);
            });
        });

        // Open lightbox
        function openLightbox(src) {
            lightboxImg.src = src;
            lightbox.style.display = 'flex';
            document.body.classList.add('lightbox-active');
        }

        // Close lightbox when clicking outside image
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg && !e.target.classList.contains('nav-arrow')) {
                closeLightbox();
            }
        });

        // Close lightbox function
        function closeLightbox() {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
            document.body.classList.remove('lightbox-active');
        }

        // Show next image
        function showNextImage() {
            currentIndex = (currentIndex + 1) % imageArray.length;
            lightboxImg.src = imageArray[currentIndex].src;
        }

        // Show previous image
        function showPrevImage() {
            currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
            lightboxImg.src = imageArray[currentIndex].src;
        }

        // Add event listeners to buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showNextImage();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showPrevImage();
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'Escape') closeLightbox();
            }
        });
    } else {
        console.error("Lightbox elements not found. Check your HTML structure.");
    }
});
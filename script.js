document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = hamburger.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = hamburger.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
    });

    // 2. Dynamic Navbar
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerOffset = 70;
                const elementPosition =
                    targetSection.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });

    // 4. Scroll Animation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                const progressBar =
                    entry.target.querySelector(".progress-fill");
                if (progressBar) {
                    const width = progressBar.getAttribute("data-width");
                    progressBar.style.width = width;
                }
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll(
        ".fade-in, .slide-left, .slide-right"
    );
    sections.forEach((section) => {
        observer.observe(section);
    });

    // 5. Image Modal (Lightbox)
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption-text");
    const closeBtn = document.querySelector(".close-modal");

    // Add click event to all figure containers
    document
        .querySelectorAll(".schematic-container figure")
        .forEach((figure) => {
            figure.addEventListener("click", function () {
                const img = this.querySelector("img");
                const caption = this.querySelector(".fig-desc").innerText;
                const figNum = this.querySelector(".fig-num").innerText;

                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = `<strong>${figNum}</strong>: ${caption}`;

                // Check if it's the schematic (needs white bg)
                if (img.classList.contains("schematic-img")) {
                    modalImg.style.backgroundColor = "white";
                    modalImg.style.padding = "10px";
                } else {
                    modalImg.style.backgroundColor = "transparent";
                    modalImg.style.padding = "0";
                }

                // Disable background scrolling
                document.body.style.overflow = "hidden";
            });
        });

    // Close Modal Logic
    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    closeBtn.addEventListener("click", closeModal);

    // Close if clicked outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

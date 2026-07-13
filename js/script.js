/* =============================================================
   GET FLY — js/script.js
   Plain vanilla JavaScript only. No frameworks.
   ============================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------------
       HERO SLIDESHOW — smooth fade, auto-changing, 3 images
    ----------------------------------------------------------- */
    var slides = document.querySelectorAll(".hero-slide");
    var slideIndex = 0;

    function showSlide(index) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active-slide");
        }
        if (slides.length > 0) {
            slides[index].classList.add("active-slide");
        }
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    if (slides.length > 0) {
        showSlide(slideIndex);
        setInterval(nextSlide, 3000);
    }

    /* -----------------------------------------------------------
       MOBILE HAMBURGER MENU
    ----------------------------------------------------------- */
    var navToggle = document.getElementById("navToggle");
    var navLinks = document.getElementById("navLinks");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });
    }

    /* -----------------------------------------------------------
       SHOP DROPDOWN — click to open on mobile/touch,
       hover handles it on desktop via CSS
    ----------------------------------------------------------- */
    var dropdownParent = document.querySelector(".has-dropdown");
    var dropdownLink = dropdownParent ? dropdownParent.querySelector("a") : null;

    if (dropdownParent && dropdownLink) {
        dropdownLink.addEventListener("click", function (event) {
            if (window.innerWidth <= 900) {
                event.preventDefault();
                dropdownParent.classList.toggle("open");
            }
        });
    }

    /* -----------------------------------------------------------
       PRODUCT PAGE — size selector buttons
    ----------------------------------------------------------- */
    var sizeButtons = document.querySelectorAll(".size-options button");
    sizeButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            sizeButtons.forEach(function (b) {
                b.classList.remove("selected-size");
            });
            btn.classList.add("selected-size");
        });
    });

    /* -----------------------------------------------------------
       FORMS — simple confirmation on submit
    ----------------------------------------------------------- */
    var forms = document.querySelectorAll("form");
    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you. Your message has been received.");
            form.reset();
        });
    });

});

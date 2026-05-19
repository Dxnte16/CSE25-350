var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlide(number) {
    var i;

    if (number >= slides.length) {
        slideIndex = 0;
    }

    if (number < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
    }

    if (slides.length > 0) {
        slides[slideIndex].classList.add("active-slide");
    }
}

function changeSlide(move) {
    slideIndex = slideIndex + move;
    showSlide(slideIndex);
}

function autoSlide() {
    slideIndex = slideIndex + 1;
    showSlide(slideIndex);
}

showSlide(slideIndex);
setInterval(autoSlide, 4000);

var forms = document.querySelectorAll("form");

forms.forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you. Your message has been received.");
        form.reset();
    });
});

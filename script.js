var forms = document.querySelectorAll("form");

forms.forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you - we will contact you.");
        form.reset();
    });
});

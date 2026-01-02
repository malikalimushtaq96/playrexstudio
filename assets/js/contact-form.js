// Contact Form Validation + Google reCAPTCHA
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contactForm");

        if (!form || typeof grecaptcha === "undefined") return;

        form.addEventListener("submit", function (event) {
            const recaptchaResponse = grecaptcha.getResponse();

            // Block submit if form invalid or reCAPTCHA unchecked
            if (!form.checkValidity() || recaptchaResponse.length === 0) {
                event.preventDefault();
                event.stopPropagation();

                if (recaptchaResponse.length === 0) {
                    alert("Please verify that you are not a robot.");
                }
            }

            form.classList.add("was-validated");
        });
    });
})();
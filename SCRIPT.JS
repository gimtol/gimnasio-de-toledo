// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Agregar comportamiento al botón "Saber Más"
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', function() {
        alert('¡Gracias por tu interés! Pronto tendrás más información.');
    });

    // Validación simple del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe realmente
        alert('Formulario enviado. ¡Gracias por tu mensaje!');
    });
});

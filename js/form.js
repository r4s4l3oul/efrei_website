//page contact petit pop up pour le formulaire de contact

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        alert("Message envoyé !");

        form.reset();
    });

});
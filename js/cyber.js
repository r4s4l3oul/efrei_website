//page cyber vuln xss

document.getElementById("xssForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const commentaire = document.getElementById("commentaire").value;

    // Champs NON vulnérables
    document.getElementById("resultNom").textContent = "Nom : " + nom;
    document.getElementById("resultEmail").textContent = "Email : " + email;

    // Champ vulnérable à XSS
    document.getElementById("resultCommentaire").innerHTML =
        "Commentaire : " + commentaire;
});
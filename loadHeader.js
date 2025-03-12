// loadHeader.js
fetch("header.html")  // Ajuste le chemin si besoin (./header.html, ../header.html, etc.)
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => {
        console.error("Erreur lors du chargement du header :", error);
    });

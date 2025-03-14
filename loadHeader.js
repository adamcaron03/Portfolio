document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header");

    if (headerContainer) {
        fetch("header.html") // Vérifie le chemin si besoin (./header.html, ../header.html, etc.)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                headerContainer.innerHTML = data;
            })
            .catch(error => {
                console.error("Erreur lors du chargement du header :", error);
            });
    } else {
        console.error("Élément #header introuvable dans le DOM.");
    }
});

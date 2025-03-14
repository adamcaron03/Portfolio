document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors du chargement du header.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Erreur lors du chargement du header:", error));
});

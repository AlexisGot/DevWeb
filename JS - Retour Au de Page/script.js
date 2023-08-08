// Déclaration de la variable pour stocker la dernière position de défilement
var lastScrollPosition = 0;

// Création de l'élément <p> qui affichera le bouton "up"
let up = document.createElement("p");
up.textContent = "<"; // Ajout du contenu texte à l'élément
document.body.appendChild(up); // Ajout de l'élément au corps du document

// Écouteur d'événements qui se déclenche lors du défilement de la fenêtre
window.addEventListener("scroll", () => {
    // Mise à jour de la dernière position de défilement
    lastScrollPosition = window.scrollY;

    // Vérification de la position de défilement et ajout/retir de la classe CSS en conséquence
    if (lastScrollPosition > 800) {
        up.classList.add("upCss"); // Ajoute la classe "upCss" à l'élément
    } else {
        up.classList.remove("upCss"); // Retire la classe "upCss" de l'élément
    }
});

// Écouteur d'événements qui se déclenche lorsqu'on clique sur l'élément 'up'
up.addEventListener("click", () => {
    document.body.scrollIntoView({
        behavior: "smooth", // Ajoute un effet de défilement fluide
    });
});

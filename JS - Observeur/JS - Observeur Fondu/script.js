// Sélectionne l'élément DOM ayant l'ID "last"
const lastSection = document.querySelector("#last");

const imgs = document.querySelectorAll("img")

// Crée une instance de l'Observateur d'Intersection
const observer = new IntersectionObserver(elements => {
    // Parcourt tous les éléments observés
    elements.forEach(el => {
        if (el.isIntersecting) {
            // Si l'élément est en intersection avec le viewport
            const srcImg = el.target.getAttribute("data-src");
            el.target.setAttribute("src", srcImg);
            el.target.removeAttribute("data-src")
            observer.unobserve(el.target)
            el.target.setAttribute("class", "visible"); // Ajoute la classe "visible"
            
        } else {
            // Si l'élément n'est pas en intersection avec le viewport
            el.target.setAttribute("class", "invisible"); // Ajoute la classe "invisible"
        }
    });
});

// Commence à observer l'élément "lastSection"
observer.observe(lastSection);

// Sélectionne tous les éléments DOM de type "section"
const allSections = document.querySelectorAll("section");

// Parcourt toutes les sections et commence à les observer également
allSections.forEach(sec => {
    observer.observe(sec);
});


imgs.forEach(img => {
    observer.observe(img)

})

// const baseSrc = img.getAttribute("src")
// const srcImg = img.getAttribute("data-src");
// img.setAttribute("src", srcImg);

// balise = el.target
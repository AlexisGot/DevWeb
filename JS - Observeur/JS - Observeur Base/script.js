const lastSection = document.querySelector("#last");

const observer = new IntersectionObserver(elements=>{
    elements.forEach(el=>{
        if(el.isIntersecting){
            el.target.classList.add("visible");
        }
    });
});

observer.observe(lastSection);
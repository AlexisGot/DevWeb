let btns = document.querySelectorAll("button")

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let srcImg = btn.getAttribute("data-src")
        let img = document.createElement("img")
        img.setAttribute("src", srcImg)
        document.body.appendChild(img)
    })
})


let bg = document.getElementsByClassName("bg")[0]

document.addEventListener("mousemove", (event) => {
    bg.style.transform = "translate("+ event.clientX * -0.01 +"px, " + event.clientY * -0.01 +"px) scale(1.2)"
})
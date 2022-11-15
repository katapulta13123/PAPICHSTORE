let mask = document.querySelector(".preloader")
window.addEventListener("load", () =>  {
    mask.classList.add("hide");
    setTimeout(() => {
        mask.remove();
    }, 4000)
})
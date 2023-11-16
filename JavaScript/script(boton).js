const btnup = document.getElementById("up");

window.addEventListener("scroll", (e) => {
    let y = document.documentElement.scrollTop;
    if (y === 0) {
        btnup.classList.add("hide");
        btnup.classList.remove("active");
    } else if (y >= 300) {
        btnup.classList.add("active");
        btnup.classList.remove("hide");
    }

})

document.addEventListener("click", (e) => {
    if (e.target === btnup || e.target.matches(".fa-chevron-up")) {
        window.scrollTo({
            top: 0
        })
    }
});
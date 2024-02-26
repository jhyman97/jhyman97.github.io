const toggleHamburger = () => {
    document.getElementById("main-nav-list").classList.toggle("hide");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
};
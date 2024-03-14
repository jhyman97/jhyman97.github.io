// const toggleHamburger = () => {
//     document.getElementById("main-nav-list").classList.toggle("hide");
// };

const toggleHamburger = () => {
    document.getElementById("main-nav-list").classList.toggle("hide-small");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
};
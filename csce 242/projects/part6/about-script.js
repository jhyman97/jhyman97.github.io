// const toggleHamburger = () => {
//     document.getElementById("main-nav-list").classList.toggle("hide");
// };
const toggleHamburger = () => {
    document.getElementById("main-nav-list").classList.toggle("hide-small");
};

const goToAdminPage = () => {
    window.location.href = "admin-edit-items.html";
    console.log('hi');
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
};

document.getElementById("login-button").onclick = goToAdminPage;
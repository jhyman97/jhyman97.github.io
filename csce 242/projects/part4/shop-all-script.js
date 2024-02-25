// const toggleHamburger = () => {
//     document.getElementById("main-nav-list").classList.toggle("hide");
// };
const toggleHamburger = () => {
    document.getElementById("main-nav-list").classList.toggle("hide-small");
};

const toggleClothingTab = () => {
    toggleLabels(document.getElementById('sorts-clothing'));
};

const togglePriceTab = () => {
    toggleLabels(document.getElementById('sorts-price'));
};

const toggleAlphabetTab = () => {
    toggleLabels(document.getElementById('sorts-alphabet'));
};

const toggleLabels = (label) => {
    label.classList.toggle('hide-list');
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
};

document.getElementById('sort-by-clothing-label').onclick = toggleClothingTab;
document.getElementById('sort-by-price-label').onclick = togglePriceTab;
document.getElementById('sort-by-alphabet-label').onclick = toggleAlphabetTab;
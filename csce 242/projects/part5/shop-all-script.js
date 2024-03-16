// const toggleHamburger = () => {
//     document.getElementById("main-nav-list").classList.toggle("hide");
// };

const getItems = async() => {
    try {
        return await fetch('items.json').then((response) => response.json());    
    } catch (error) {
        console.log(error);
    }
};

const showItems = async() => {
    const items = await getItems();

    items.forEach((item) => {
       const mainContentSection = document.getElementById('main-content');
       const itemLinkSection = document.createElement('section');

       // add flex wrap
       itemLinkSection.classList.add('item-containers');
       mainContentSection.append(itemLinkSection);
       
       // item link
       const a = document.createElement('a');
       a.href = './item-page.html';
       itemLinkSection.append(a);

       const itemInfoSection = document.createElement('section');
       // append actual item info as child element under anchor
       a.appendChild(itemInfoSection);

       // item img
       const img = document.createElement('img');
       img.src = './item-images/' + item.image_name;
       img.alt = item.alt_text;
       itemInfoSection.append(img);

       // item title
       const h3 = document.createElement('h3');
       h3.innerHTML = item.name;
       itemInfoSection.append(h3);

       // item price
       const h4 = document.createElement('h4');
       h4.innerHTML = `$${item.price}.00`;
       itemInfoSection.append(h4);
       
    });
};

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

showItems();
// console.log(getItems());
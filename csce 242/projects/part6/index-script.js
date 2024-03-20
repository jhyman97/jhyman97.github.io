// const toggleHamburger = () => {
//     document.getElementById("main-nav-list").classList.toggle("hide");
// };

const getItems = async() => {
    try {
        return await fetch('items.json').then((response) => response.json()); 
    } catch (error) {
        console.log('error');
    }
};

const showItems = async() => {
    const items = await getItems();
    const popularItems = [items[0], items[3], items[7], items[8]];
    
    popularItems.forEach((popularItem) => {
        const mostPopularSection = document.getElementById('bottom-most-popular');
        mostPopularSection.classList.add('columns', 'bottom-nav-list');
        

        // section to hold item
        const section = document.createElement('section');
        mostPopularSection.append(section);

        // link
        const a = document.createElement('a');
        a.href = './item-page.html';
        section.append(a);

        // img
        const img = document.createElement('img');
        img.src = './item-images/' + popularItem.image_name;
        img.alt = popularItem.alt_text;
        a.appendChild(img)

        // name
        const h3 = document.createElement('h3');
        h3.innerHTML = popularItem.name;
        a.appendChild(h3);

        // price
        const h4 = document.createElement('h4');
        h4.innerHTML = `$${popularItem.price}.00`;
        a.appendChild(h4);
    });
};  

const toggleHamburger = () => {
    document.getElementById("main-nav-list").classList.toggle("hide-small");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
};

showItems();
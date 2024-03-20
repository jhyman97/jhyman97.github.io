const getItemInfo = async() => {
    try {
        return await fetch('items.json').then((response) => response.json());    
    } catch (error) {
        console.log(error);
    }
};

const showItemInfo = async() => {
    const items = await getItemInfo();
    const item = items[0];
    const itemImgSection = document.getElementById('img-container');
    const itemInfoSection = document.getElementById('item-info');

    const img = document.createElement('img');
    img.src = './item-images/' + item.image_name;
    img.alt = item.alt_text;
    itemImgSection.append(img);

    // item title
    const h2 = document.createElement('h2');
    h2.innerHTML = item.name;
    itemInfoSection.append(h2);

    // item price
    const h3 = document.createElement('h3');
    h3.innerHTML = `$${item.price}.00`;
    itemInfoSection.append(h3);

    // form (size, quantity, add to cart)
    const form = document.createElement('form');
    form.classList.add('buttons-columns');
    form.classList.add('centered-btns');
    form.setAttribute('id', 'form');
    itemInfoSection.append(form);

    // size form section
    const sizeSection = document.createElement('section');
    sizeSection.classList.add('main-col-1-of-3');
    form.append(sizeSection);

    // size label
    const sizeLabel = document.createElement('label');
    sizeLabel.setAttribute('for', 'size');
    sizeLabel.innerHTML = 'Size';
    sizeSection.append(sizeLabel);

    // size dropdown
    const sizeDropdown = document.createElement('select');
    sizeDropdown.setAttribute('name', 'size');
    sizeDropdown.setAttribute('id', 'select-size');
    sizeSection.append(sizeDropdown);

    // add sizing options
    item.sizes.forEach((size) => {
        const option = document.createElement('option');
        option.setAttribute('value', size);
        option.innerHTML = size;
        sizeDropdown.append(option);
    });

    // quantity form section
    const quantitySection = document.createElement('section');
    quantitySection.classList.add('main-col-1-of-3');
    form.append(quantitySection);

    // quantity label
    const quantityLabel = document.createElement('label');
    quantityLabel.setAttribute('for', 'quantity');
    quantityLabel.innerHTML = 'Quantity';
    quantitySection.append(quantityLabel);
    
    // quantity input
    const quantityInput = document.createElement('input');
    quantityInput.setAttribute('name', 'quantity');
    quantityInput.setAttribute('id', 'input-quantity');
    quantityInput.setAttribute('placeholder', 'Enter a quantity');
    quantitySection.append(quantityInput);

    // add to cart section
    const addSection = document.createElement('section');
    addSection.classList.add('main-col-1-of-3');
    addSection.classList.add('button-flex-container');
    form.append(addSection);

    // add to cart button
    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'btn-add-to-cart');
    addButton.setAttribute('type', 'submit');
    addButton.setAttribute('form', 'form');
    addButton.innerHTML = 'Add to Cart';
    addSection.append(addButton);

    const sizingInfo = document.createElement('h3');
    sizingInfo.innerHTML = 'Sizing Info';
    itemInfoSection.append(sizingInfo);

    for(let i in item.sizes) {
        const p = document.createElement('p');
        p.innerHTML = `${item.sizes[i]}: Width ${item.width_length_pairs[i].width}", Length ${item.width_length_pairs[i].length}"`;
        itemInfoSection.append(p);
    }

    const descLabel = document.createElement('h3');
    descLabel.innerHTML = 'Description';
    itemInfoSection.append(descLabel);

    const descInfo = document.createElement('p');
    descInfo.innerHTML = item.description;
    itemInfoSection.append(descInfo);
};


const addToCart = (e) => {
    e.preventDefault();
};

const toggleHamburger = () => {
    document.getElementById("main-nav-list").classList.toggle("hide-small");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
};

showItemInfo();
document.getElementById('form').onsubmit = addToCart;
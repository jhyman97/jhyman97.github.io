const submitAddItem = (e) => {
    e.preventDefault();
    const section = document.getElementById('item-to-be-added');
    if(getCheckedBoxes('size').length == 0) {
        section.innerHTML = 'Please select at least 1 size before adding an item!';
        return;
    }
    section.innerHTML = '';

    const form = e.target;
    const itemId = form.elements['input-item-id'].value;
    const itemType = form.elements['input-type'].value;
    const itemAltText = form.elements['input-alt-text'].value;
    const itemImage = form.elements['btn-item-image'].value;
    const itemName = form.elements['input-item-name'].value;
    const itemPrice = form.elements['input-item-price'].value;
    const itemSizes = getCheckedBoxes('size');
    const itemDesc = form.elements['item-desc'].value;

    const widthsInputs = document.querySelectorAll('.width-input');
    const lengthsInputs = document.querySelectorAll('.length-input');

    let itemWidths = [];
    widthsInputs.forEach((width) => itemWidths.push(width.value));
    let itemLengths = [];
    lengthsInputs.forEach((length) => itemLengths.push(length.value));

    section.append(paragraph('Item ID', itemId));
    section.append(paragraph('Item name', itemName));
    section.append(paragraph('Item type', itemType));
    section.append(paragraph('Item image', itemImage));
    section.append(paragraph('Item alt text', itemAltText));
    section.append(paragraph('Item price', itemPrice));
    section.append(paragraph('Item sizes', itemSizes));
    section.append(paragraph('Item widths', itemWidths));
    section.append(paragraph('Item lengths', itemLengths))
    section.append(paragraph('Item description', itemDesc));

    const result = document.getElementById('add-result');
    result.style.color = '#00FF00';
    result.innerHTML = 'Item added succesfully!';
    setTimeout(() => result.innerHTML = '', 2000);
};

const submitDeleteItem = (e) => {
    e.preventDefault();

    const section = document.getElementById('item-to-be-deleted');
    section.innerHTML = '';

    const form = e.target;
    const itemId = form.elements['input-item-id-delete'].value;
    const reason = form.elements['text-area-reason'].value;

    section.append(paragraph('Item ID', itemId));
    section.append(paragraph('Reason for deletion', reason));

    const result = document.getElementById('remove-result');
    result.style.color = '#00FF00';
    result.innerHTML = 'Item removed successfully!';
    setTimeout(() => result.innerHTML = '', 2000);
};

const paragraph = (label, info) => {
    const p = document.createElement('p');
    p.innerHTML = `${label}: ${info}`;
    return p;
};

const showWidthLengthInputs = () => {
    const section = document.getElementById('width-length-inputs');
    const sizes = getCheckedBoxes('size');
    section.innerHTML = '';
    
    if(sizes.length == 0) {
        section.innerHTML = 'Please select at least 1 size';
        return;
    }

    section.innerHTML += 'Enter width(s)/length(s)';

    sizes.forEach((size) => {
        const p = document.createElement('p');
        const widthLabel = document.createElement('label');
        widthLabel.setAttribute('for', `width-entry-${size}`);
        widthLabel.classList.add('block');
        widthLabel.innerHTML = `${size} width`;
        const widthInput = document.createElement('input');
        widthInput.setAttribute('type', 'number');
        widthInput.setAttribute('maxlength', '3');
        widthInput.setAttribute('id', `width-entry-${size}`);
        widthInput.setAttribute('required', '');
        widthInput.setAttribute('placeholder', `${size} width`);
        widthInput.classList.add('width-input');

        const lengthLabel = document.createElement('label');
        lengthLabel.setAttribute('for', `length-entry-${size}`);
        lengthLabel.classList.add('block');
        lengthLabel.innerHTML = `${size} length`;
        const lengthInput = document.createElement('input');
        lengthInput.setAttribute('type', 'number');
        lengthInput.setAttribute('maxlength', '3');
        lengthInput.setAttribute('id', `length-entry-${size}`);
        lengthInput.setAttribute('required', '');
        lengthInput.setAttribute('placeholder', `${size} length`);
        lengthInput.classList.add('length-input');

        p.appendChild(widthLabel);
        p.appendChild(widthInput);
        p.appendChild(lengthLabel);
        p.appendChild(lengthInput);
        section.append(p);
    });  
};

const getCheckedBoxes = (checkboxes) => {
    const boxes = document.getElementsByName(checkboxes);
    const boxSizePairs = new Map([
        ['cb-small', 'Small'],
        ['cb-medium', 'Medium'], 
        ['cb-large', 'Large'],
        ['cb-extra-large', 'Extra Large'],
        ['cb-2xl', '2XL']
    ]);
    let sizes = [];

    for(let i in boxes) {
        if(boxes[i].checked) {
            sizes.push(boxSizePairs.get(boxes[i].id));
        }
    }
    return sizes;
};

const toggleHamburger = () => {
    document.getElementById("main-nav-list").classList.toggle("hide-small");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
};

document.getElementById('item-sizes').onclick = showWidthLengthInputs;
document.getElementById('form-add-item').onsubmit = submitAddItem;
document.getElementById('form-delete-item').onsubmit = submitDeleteItem;
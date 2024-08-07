const submitRaccoonForm = (e) => {
    e.preventDefault(); // don't refresh the page
    // console.log('hi');  
    const form = e.target;
    const raccoonName = form.elements['raccoon-name'].value;
    const demeanor = form.elements['demeanor'].value;
    const termsChecked = form.elements['terms'].checked;
    const size = getRadioValue('size');

    console.log(raccoonName + ' is ' + demeanor + ' terms checked ' + termsChecked + " size: " + size);

};

const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);

    for(let i in radios) {
        if(radios[i].checked) {
            return radios[i].value;
        }
    }

    return '';
};

document.getElementById('form-raccoon').onsubmit = submitRaccoonForm;
const showFormResult = async(e) => {
    e.preventDefault();

    const result = document.getElementById('result');
    let response = await getFormResult();

    if(response.status == 200) {
        result.innerHTML = 'Your form has successfully been sent!';
    } else {
        result.innerHTML = 'Sorry, your form was not sent.'
    }
};

const getFormResult = async() => {
    const form = document.getElementById('main-form');
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById('result');
    result.innerHTML = 'Sending your form...';

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: json
        });
        return response;
    } catch(error) {
        console.log(error);
        result.innerHTML = 'Sorry, your form could not be sent.';
    }
};

const toggleHamburger = () => {
    document.getElementById("main-nav-list").classList.toggle("hide-small");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
};

document.getElementById('main-form').onsubmit = showFormResult;
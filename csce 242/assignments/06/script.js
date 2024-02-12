const toggleExerciseOne = () => {
    const yogaSliderSection = document.getElementById("yoga-slide");
    const enterCommandSection = document.getElementById("enter-command");
    if(!yogaSliderSection.classList.contains("section-hide")) {
        yogaSliderSection.classList.toggle("section-hide");
        enterCommandSection.classList.toggle("section-hide");
    }
};

const toggleExerciseTwo = () => {
    const enterCommandSection = document.getElementById("enter-command");
    const yogaSliderSection = document.getElementById("yoga-slide");
    if(!enterCommandSection.classList.contains("section-hide")) {
        enterCommandSection.classList.toggle("section-hide");
        yogaSliderSection.classList.toggle("section-hide");
    }
};

const showHideNav = () => {
    const nav = document.getElementById("nav-items");
    nav.classList.toggle("hide");
    const buttonIcon = document.getElementById("btn-drop-down");
    if(nav.classList.contains("hide")) {
        buttonIcon.innerHTML = "&#9660;";
    } else {
        buttonIcon.innerHTML = "&#9650;";
    }
};

const changeEnterCommandPic = () => {
    const inputText = document.getElementById("input-enter-command").value.toLowerCase().trim().slice(-1);
    const image = document.getElementById("img-enter-command");
    const textImagePairs = new Map([
        ["b", "./images/read.jpg"],
        ["c", "./images/clown.jpg"],
        ["p", "./images/birthday.jpg"],
        ["r", "./images/rain.jpg"],
        ["s", "./images/shovel.jpg"],
        ["w", "./images/work.jpg"]
    ]);

    if(inputText.length === 0 || !textImagePairs.has(inputText)) {
        image.src = "./images/original.jpg";
    } else {
        image.src = textImagePairs.get(inputText);
    }
};

const changeYogaSliderPic = () => {
    const image = document.getElementById("img-yoga-slide");
    let value = document.getElementById("slider").value;
    // slider values being strings that are numbers is cringe
    const valueImagePairs = new Map([
        ['1', "./images/yoga1.jpg"],
        ['2', "./images/yoga2.jpg"],
        ['3', "./images/yoga3.jpg"],
        ['4', "./images/yoga4.jpg"],
        ['5', "./images/yoga5.jpg"],
        ['6', "./images/yoga6.jpg"],
        ['7', "./images/yoga7.jpg"],
        ['8', "./images/yoga8.jpg"]
    ]);

    image.src = valueImagePairs.get(value);
};

document.getElementById("btn-drop-down").onclick = showHideNav;
document.getElementById("input-enter-command").onkeyup = changeEnterCommandPic;
document.getElementById("slider").oninput = changeYogaSliderPic;
document.getElementById("btn-exercise-1").onclick = toggleExerciseOne;
document.getElementById("btn-exercise-2").onclick = toggleExerciseTwo;
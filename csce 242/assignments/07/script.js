// function call for setInterval
let updatePosition;
// sets yPosition of soccer ball
let yPosition = 0;
// tells if ball has hit bottom of container or not
// false if no (ball will go down), true if it has hit bottom 
// (ball will reverse direction and go back up container)
let isAtBottomOfContainer = false;

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

const toggleExerciseOne = () => {
    const yogaFunSection = document.getElementById("yoga-fun");
    const bounceBallSection = document.getElementById("bounce-ball");
    if(!yogaFunSection.classList.contains("hide")) {
        yogaFunSection.classList.toggle("hide");
        bounceBallSection.classList.toggle("hide");
    }
};

const toggleExerciseTwo = () => {
    const yogaFunSection = document.getElementById("yoga-fun");
    const bounceBallSection = document.getElementById("bounce-ball");
    if(!bounceBallSection.classList.contains("hide")) {
        yogaFunSection.classList.toggle("hide");
        bounceBallSection.classList.toggle("hide");
    }
};

const startStopBall = (e) => {
    const ball = document.getElementById("img-ball");
    
    if(e.target.innerHTML == "start") {
        e.target.innerHTML = "stop";
        
        updatePosition = setInterval(() => {
            // probably a better way to do this entire function
            if(yPosition === 275) {
                isAtBottomOfContainer = false;
            } else if(yPosition === 0) {
                isAtBottomOfContainer = true;
            }

            if(isAtBottomOfContainer) {
                ++yPosition;
            } else {
                --yPosition;
            }
            ball.style.setProperty("top", yPosition + "px");
        }, 5);
    } else {
        e.target.innerHTML = "start";
        clearInterval(updatePosition);
    }
};

const showText = (e) => {
    const str = e.target.getAttribute("alt");
    const id = e.target.getAttribute("id");
    const desc = document.getElementById(id + "-desc");
    const h3 = document.createElement("h3");
    h3.textContent = str;
    desc.append(h3);
};

// nav stuff
document.getElementById("btn-drop-down").onclick = showHideNav;
document.getElementById("btn-exercise-1").onclick = toggleExerciseOne;
document.getElementById("btn-exercise-2").onclick = toggleExerciseTwo;

document.getElementById("btn-ball").onclick = startStopBall;
document.querySelectorAll(".image").forEach((img) => {
    img.onclick = showText;
});

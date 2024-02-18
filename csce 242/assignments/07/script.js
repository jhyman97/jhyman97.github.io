// function call within setInterval
let updatePosition;
// sets yPosition of soccer ball
let yPosition = 0;
// tells if ball has hit bottom of container or not
// false if no (ball will go down), true if it has hit bottom 
// (ball will reverse direction and go back up container)
let isAtBottomOfContainer = false;

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

document.getElementById("btn-ball").onclick = startStopBall;
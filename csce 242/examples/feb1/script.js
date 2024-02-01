let pos = 0;

const colorSquare = () => {
    document.getElementById("square").classList.add("rainbow");
    // document.querySelector("#square")
};

const moveDown = () => {
    pos += 10;
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
    // transform: rotate()
    // google range sliders
};

const addCircle = () => {
    const color = document.getElementById("txt-color").value;
    // for changing colors of all circles
    // const root = document.querySelector(":root");
    // root.style.setProperty("--ball-color", color);

    const playground = document.getElementById("circle-playground");
    // playground.innerHTML += "<section class='circle'></section>";
    const ball = document.createElement("section");
    ball.classList.add("circle");
    playground.append(ball);
    // for changing color of 1 ball
    ball.style.background = color;
};

document.getElementById("btn-color").onclick = colorSquare;
document.getElementById("btn-move-down").onclick = moveDown;
document.getElementById("btn-add-circle").onclick = addCircle;

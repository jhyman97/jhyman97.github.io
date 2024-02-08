const toggleImageChange = () => {
    document.getElementById("togglableImage").src = "./images/second-img.jpg";
};

const rotateImage = () => {
    const image = document.getElementById("img-to-rotate");
    let value = document.getElementById("slider").value;
    image.style.transform = "rotate(" + value + "deg)";
}

const addStar = () => {
    // console.log('hi');
    const playground = document.getElementById("stars-playground");
    const star = document.createElement("img");
    star.src = "./images/star.png";
    star.width = 50;
    star.height = 50;

    playground.append(star);
    

}

document.getElementById("togglableImage").onclick = toggleImageChange;
document.getElementById("slider").oninput = rotateImage;
let elements = document.getElementsByClassName("last-col");
elements[0].onclick = addStar;
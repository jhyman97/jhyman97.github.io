const toggleImageChange = () => {
    document.getElementById("togglableImage").src = "./images/second-img.jpg";
};

document.getElementById("togglableImage").onclick = toggleImageChange;
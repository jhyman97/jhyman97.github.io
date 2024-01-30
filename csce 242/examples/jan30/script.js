const doStuff = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello Johnny!";
    messageP.classList.toggle("special");
    // can do classList.toggle as well
};

const hidePlaceholder = () => {
    document.getElementById("placeholder").classList.add("hidden");
    // .srcequals
};

document.getElementById("btn-click").onclick = doStuff;
document.getElementById("placeholder").onclick = hidePlaceholder;

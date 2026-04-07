const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("proposalCard");
const success = document.getElementById("successMessage");
const buttonsContainer = document.querySelector(".buttons");
const question = document.querySelector("h1");

let clickCount = 0;


const messages = [
    "Are you sure? 🥺",
    "Think again 💕",
    "Please accept me 😭",
    "Are you sure? 🥳",
    "Think again! 🥺 ",
    "Last chance 😢",
    "You can't escape destiny 💘"
];

noBtn.addEventListener("mouseover", function() {

    const containerRect = buttonsContainer.getBoundingClientRect();


    const rangeX = buttonsContainer.offsetWidth + 80;
    const rangeY = buttonsContainer.offsetHeight + 80;

    let newLeft = Math.random() * rangeX - 40;
    let newTop = Math.random() * rangeY - 40;

    noBtn.style.left = newLeft + "px";
    noBtn.style.top = newTop + "px";
});


noBtn.addEventListener("click", function() {
    if (clickCount < messages.length) {
        question.innerText = messages[clickCount];
    } else {
        question.innerText = "Just say Yes already 😌💖";
    }
    clickCount++;


    let currentScale = 1 + (clickCount * 0.1);
    yesBtn.style.transform = `scale(${currentScale})`;
});

yesBtn.addEventListener("click", function() {
    card.classList.add("hidden");
    success.classList.remove("hidden");
    createHearts();
});


function createHearts() {
    const container = document.getElementById("heartsContainer");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
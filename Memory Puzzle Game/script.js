const iconPool = [
    "fa-cat",
    "fa-dog",
    "fa-crow",
    "fa-dove",
    "fa-dragon",
    "fa-feather",
    "fa-fish",
    "fa-frog",
    "fa-hippo",
    "fa-horse",
    "fa-locust",
    "fa-mosquito",
    "fa-otter",
    "fa-paw",
    "fa-shrimp",
    "fa-spider",
    "fa-worm",
    "fa-bug",
    "fa-cow",
    "fa-kiwi-bird",
    "fa-drumstick-bite",
    "fa-horse-head",
    "fa-crow",
    "fa-dove",
    "fa-fish-fins",
    "fa-car",
    "fa-car-side",
    "fa-car-battery",
    "fa-car-crash",
    "fa-truck",
    "fa-truck-pickup",
    "fa-truck-monster",
    "fa-bus",
    "fa-shuttle-van",
    "fa-taxi",
    "fa-motorcycle",
    "fa-gas-pump",
    "fa-oil-can",
    "fa-charging-station",
    "fa-ambulance",
    "fa-trailer",
    "fa-caravan",
    "fa-train",
    "fa-tram",
    "fa-subway",
    "fa-bicycle",
    "fa-plane",
    "fa-helicopter",
    "fa-rocket",
    "fa-ship"
];

let gameIconsIndex = [];
let cards = [];

function generateRandomNumber() {
    const num = Math.floor(Math.random() * iconPool.length);
    return num;
}

function chooseGameIcons() {
    while (gameIconsIndex.length !== 8) {
        const index = generateRandomNumber();
        if (!gameIconsIndex.includes(index)) {
            gameIconsIndex.push(index);
        }
    }
}

const boxes = document.querySelectorAll(".boxes");

function placeIcons() {
    gameIconsIndex = [];
    cards = [];
    matchedPairs = 0;

    chooseGameIcons();

    gameIconsIndex.forEach(index => {
        cards.push(index);
        cards.push(index);
    });

    cards.sort(() => Math.random() - 0.5);

    boxes.forEach((box, i) => {
        box.innerHTML = `
        <div class="card" data-icon-index="${cards[i]}">
            <div class="front"></div>
            <div class="back">
                <span class="icon fa-solid ${iconPool[cards[i]]}"></span>
            </div>
        </div>
    `;
    });
    clearInterval(timer);

    hours = 0;
    minutes = 0;
    seconds = 0;

    timer = setInterval(updateTimer, 1000);

    const result = document.querySelector(".result");

    result.textContent = "Time taken: 00:00:00";
    result.classList.remove("green");
}

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', placeIcons);

let lockBoard = false;
let firstCard = null;
let secondCard = null;
let timer = null;

function checkMatch() {
    lockBoard = true;

    if (firstCard.dataset.iconIndex === secondCard.dataset.iconIndex) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        resetSelection();
        gameCompleted();
    }
    else {
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            resetSelection();
        }, 800);
    }
}

function resetSelection() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (lockBoard) return;

        const card = box.querySelector(".card");

        if (card === firstCard) return;
        if (card.classList.contains("matched")) return;
        card.classList.add("flip");

        if (!firstCard) {
            firstCard = card;
            return;
        }
        secondCard = card;
        checkMatch();
    });
});

let matchedPairs = 0;

function gameCompleted() {
    matchedPairs++;
    if (matchedPairs === 8) {
        clearInterval(timer);
        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        const result = document.querySelector('.result');
        result.textContent = `🎉 Congratulations! You finished in ${formattedTime}`
        result.classList.add('green');
    }
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 60;
        hours++
    }

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.querySelector(".result").textContent = "Time taken: " + formattedTime;
}
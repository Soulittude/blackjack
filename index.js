let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let startBtn = document.getElementById("btn-start");
let cardBtn = document.getElementById("btn-card");
let msg = document.getElementById("message");


let cards = [];
let sum = 0;
let isAlive = false;

function startGame() {
    resetGame();
    randomCard();
    randomCard();
}

function resetGame() {
    cards = [];
    sum = 0;
    isAlive = true;
    cardsEl.innerText = "";
    sumEl.innerText = "";
    msg.innerText = "";
}

function randomCard() {
    let pickCard = Math.floor((Math.random() * 13)) + 1;
    if (pickCard > 10) {
        pickCard = 10;
    }
    else if (pickCard === 1) {
        pickCard = 11;
    }
    gameUpdate(pickCard)
    return pickCard
}

function gameUpdate(card) {
    cards.push(card);
    sum += card;
    cardsEl.innerText = "Your Cards: " + cards;
    sumEl.innerText = "Sum: " + sum;
    gameCheck();
}

function gameCheck() {
    if (cards.length < 2) {
        return
    }
    if (sum < 21) {
        msg.innerText = ("Press new card to get another card");
    }
    else if (sum === 21) {
        msg.innerText = ("You got a blackjack! You win!");
        isAlive = false;
    }
    else {
        msg.innerText = ("You went over 21! You lose!");
        isAlive = false;
    }
    aliveCheck()
    return
}

function aliveCheck() {
    if (isAlive === false) {
        startBtn.classList.remove("hide");
        cardBtn.classList.add("hide");
    }
    else {
        startBtn.classList.add("hide");
        cardBtn.classList.remove("hide");

    }
}
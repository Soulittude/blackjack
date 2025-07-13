let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let cards = [];
let sum = 0;
let isAlive = false;

function startGame() {
    isAlive = true;
    randomCard();
    randomCard();
    gameCheck();
}
function newCard() {
    randomCard();
    gameCheck();
}

function randomCard() {
    let pickCard = Math.floor((Math.random() * 13)) + 1;
    if (pickCard > 10) {
        pickCard = 10;
    }
    else if (pickCard === 1) {
        pickCard = 11;
    }
    cards.push(pickCard);
    sum += pickCard;
    gameUpdate();
    return pickCard
}



function gameUpdate() {
    cardsEl.innerText = "Your Cards: " + cards;
    sumEl.innerText = "Sum: " + sum;
}

function gameCheck() {
    if (sum < 21) {
        alert("Press new card to get another card");
    }
    else if (sum === 21) {
        alert("You got a blackjack! You win!");
        isAlive = false;
    }
    else {
        alert("You went over 21! You lose!");
        isAlive = false;
    }
}

function newGame(){
    cards = [];
    sum = 0;
    isAlive = true;
}
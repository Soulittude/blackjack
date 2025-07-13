let cardsEl = document.getElementById("cards-el");
let casinoCardsEl = document.getElementById("casino-el");
let sumEl = document.getElementById("sum-el");

let startBtn = document.getElementById("btn-start");
let cardBtn = document.getElementById("btn-card");
let stayBtn = document.getElementById("btn-stay");

let msg = document.getElementById("message-el");



let myCards = [];
let casinoCards = [];
let mySum = 0;
let casinoSum = 0;
let isAlive = false;

function startGame() {
    resetGame();


    gameUpdate("casino");
    gameUpdate("player");
    gameUpdate("player");
}

function resetGame() {
    myCards = [];
    casinoCards = [];
    mySum = 0;
    casinoSum = 0;
    isAlive = true;

    cardsEl.innerText = "";
    sumEl.innerText = "";
    casinoCardsEl.innerText = "";
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
    return pickCard
}

function gameUpdate(side) {
    card = randomCard();
    if (side === "player") {
        myCards.push(card);
        mySum += card;
        cardsEl.innerText = "Your Cards: " + myCards;
        sumEl.innerText = "Sum: " + mySum;
        gameCheck(side);
        return
    }
    else if (side === "casino") {
        casinoCards.push(card);
        casinoSum += card;
        casinoCardsEl.innerText = "Casino cards: " + casinoCards;
        gameCheck(side);
        return
    }
}

function gameCheck(choose) {
    if (myCards.length < 2) {
        return
    }
    
    if (choose === "player") {
        if (mySum === 21) {
            msg.innerText = ("You got a blackjack! You win!");
            isAlive = false;

        }
        else if (mySum > 21) {
            msg.innerText = ("You went over 21! You lose!");
            isAlive = false;
        }
        else {
            msg.innerText = ("Do you want to new card or stay?");
        }
    }
    else if (choose === "casino" && casinoSum > 20) {
        if (casinoSum === 21) {
            msg.innerText = ("Casino blackjack! You lost!");
            isAlive = false;
        }
        else {
            myScore = 21 - mySum;
            casinoScore = casinoSum - 21;

            if (casinoScore < myScore) {
                msg.innerText = ("Casino won... You lost!");
                isAlive = false
            }
            else {
                msg.innerText = ("Casino lost... You won");
                isAlive = false
            }
        }
    }
    aliveCheck()
    return
}

function aliveCheck() {
    if (isAlive === false) {
        startBtn.classList.remove("hide");
        cardBtn.classList.add("hide");
        stayBtn.classList.add("hide");
    }
    else {
        startBtn.classList.add("hide");
        cardBtn.classList.remove("hide");
        stayBtn.classList.remove("hide");
    }
}

function stay() {
    while (casinoSum < 21) {
        gameUpdate("casino");
    }

}

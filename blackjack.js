// HTML elements
const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const startBtn = document.getElementById("start-btn");
const drawBtn = document.getElementById("draw-btn");


// variables for hand
let firstCard = 2;
let secondCard = 4;
let sum = firstCard + secondCard;

// save state whether player has BJ
let hasBlackjack = false;
// save state whether player "alive"/in the game
let isAlive = true;
// status message to user after play
let message = "";



function startGame() {
    renderGame();
}


function renderGame() {
    cardsEl.textContent = `${firstCard}, ${secondCard}`;
    sumEl.textContent = sum;
    if (sum < 21) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "Sorry, you're out of the game.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = 5;
    sum += card;
    renderGame();
}
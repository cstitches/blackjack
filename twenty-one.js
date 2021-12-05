// VARIABLES: HTML ELEMENTS
const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const startBtn = document.getElementById("start-btn");
const drawBtn = document.getElementById("draw-btn");


// GLOBAL VARIABLES: INITIAL BEFORE GAME START
let hasBlackjack = false;
let isAlive = false;
let playerCards = [];
let sum = "";
let message = "";


// FUNCTION: GENERATE A RANDOM CARD
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return 11;
    } else if (randomCard > 11) {
        return 10;
    } else {
        return randomCard;
    }
}

// FUNCTION: START NEW ROUND
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    playerCards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

// FUNCTION: RENDER OUT GAME
function renderGame() {
    cardsEl.textContent = "";
    for (let i = 0; i < playerCards.length; i++) {
        cardsEl.textContent += playerCards[i] + " ";
    };
    sumEl.textContent = sum;

    // evaluates player's hand for Blackjack, bust, or ability to hit
    if (sum < 21 && isAlive === true) {
        message = "Do you want to draw another card?";
        isAlive = true;
        hasBlackjack = false;
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "Sorry, you're out of the game.";
        isAlive = false;
        hasBlackjack = false;
    }
    messageEl.textContent = message;
}

// FUNCTION: GENERATE A NEW CARD
function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        playerCards.push(card);
        renderGame();
    } else {
        messageEl.textContent = "Start a new game."
    }
}


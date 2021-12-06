// VARIABLES: HTML ELEMENTS

// Text displays

const messageEl = document.getElementById("message-el")
const dealerHandEl = document.getElementById("dealer-hand")
const dealerSumEl = document.getElementById("dealer-sum")
const playerHandEl = document.getElementById("player-hand")
const playerSumEl = document.getElementById("player-sum")
const playerBetEl = document.getElementById("player-bet")
const playerChipsEl = document.getElementById("player-chips")
const playerEarnEl = document.getElementById("player-earn")

// Buttons

const startBtn = document.getElementById("start-btn")
const resetBtn = document.getElementById("reset-btn")
const hitBtn = document.getElementById("hit-btn")
const stayBtn = document.getElementById("stay-btn")

// Button event listeners

startBtn.addEventListener("click", startRound)
resetBtn.addEventListener("click", resetGame)
// hitBtn.addEventListener("click", playerHit)
// stayBtn.addEventListener("click", playerStay)


// GLOBAL VARIABLES
let isAlive = false; // controls what options can happen based on whether player is "alive" in the game
let dealerHand = [];
let dealerSum = 0;
let playerHand = [];
let playerSum = 0;
let playerBet = 0;
let playerChips = 0;
let playerEarnings = 0;


function startRound() {
    console.log("Start round clicked")
    // solicitBet()
    generateDealerHand()
    generatePlayerHand()
    renderDealerHand()
    renderPlayerHand()
    // evaluatePlayerHand()
}

function generateDealerHand() {
    let card1 = generateRandomCard()
    let card2 = generateRandomCard()
    dealerHand = [card1, card2]
}

function generatePlayerHand() {
    let card1 = generateRandomCard()
    let card2 = generateRandomCard()
    playerHand = [card1, card2]
}

function generateRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1
    if (card === 1) {
        return 11
    } else if (card > 10) {
        return 10
    } else {
        return card
    }
}

function renderDealerHand() {
    dealerHandEl.textContent = dealerHand[0]
    dealerSumEl.textContent = dealerHand[0]
}

function renderPlayerHand() {
    playerHandEl.textContent = ""
    for (let i = 0; i < playerHand.length; i++) {
        playerHandEl.textContent += playerHand[i] + " "
    }
    playerSum = playerHand[0] + playerHand[1]
    playerSumEl.textContent = playerSum

}


function resetGame() {
    //will reset all variables to initial values
    console.log("Reset game clicked")
}
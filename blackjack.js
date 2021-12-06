// VARIABLES: HTML ELEMENTS

// Text displays

const messageEl = document.getElementById("message-el")
const dealerHandEl = document.getElementById("dealer-hand")
const dealerSumEl = document.getElementById("dealer-sum")
const playerHandEl = document.getElementById("player-hand")
const playerBetEl = document.getElementById("player-bet")
const playerChipsEl = document.getElementById("player-chips")
const playerEarnEl = document.getElementById("player-earn")

// Buttons & event listeners

const startBtn = document.getElementById("start-btn")
const resetBtn = document.getElementById("reset-btn")
const hitBtn = document.getElementById("hit-btn")
const stayBtn = document.getElementById("stay-btn")

startBtn.addEventListener("click", startRound)
resetBtn.addEventListener("click", resetGame)


// GLOBAL VARIABLES
isAlive = false; // controls what options can happen based on whether player is "alive" in the game
dealerHand = [];
dealerSum = 0;
playerHand = [];
playerSum = 0;
playerBet = 0;
playerChips = 0;
playerEarnings = 0;


function startRound() {
    console.log("Start round clicked")
}

function resetGame() {
    //will reset all variables to initial values
    console.log("Reset game clicled")
}
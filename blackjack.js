// *** VARIABLES: HTML ELEMENTS ********************

// Text in UI

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
hitBtn.addEventListener("click", playerHit)
stayBtn.addEventListener("click", playerStay)


// *** VARIABLES: GLOBAL ***************************

let isAlive = false; // controls what options can happen based on whether player is "alive" in the game
let dealerHand = [];
let dealerSum = 0;
let playerHand = [];
let playerSum = 0;
let playerBet = 0;
let playerChips = 0;
let playerEarnings = 0;


// *** FUNCTIONS ***********************************

// FUNCTION: Starts a new round
function startRound() {
    isAlive = true
    // solicitBet()
    // generateHand(dealerHand, dealerSum)
    // generateHand(playerHand, playerSum)
    generateDealerHand()
    generatePlayerHand()
    evaluatePlayerHand()
}


// FUNCTION: Generates a random card value for Blackjack
// !!! MAKE VALUE 1 BRANCH 1 or 11 DEPENDING ON VALUE OF SUM
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

// !!!REFACTOR GENERATE HAND FUNCTIONS INTO ONE!!!

// !!! First attempt, not working
// function generateHand(hand, sum) {
//     hand = [generateRandomCard(), generateRandomCard()]
//     sum = hand[0] + hand[1]
// }


// FUNCTION: Generates dealer's hand at beginning of game
function generateDealerHand() {
    dealerHand = [generateRandomCard(), generateRandomCard()]
    dealerSum = dealerHand[0] + dealerHand[1]
    renderInitialDealerHand()
}

// FUNCTION: Generates player's hand and sum at beginning of game
function generatePlayerHand() {
    playerHand = [generateRandomCard(), generateRandomCard()]
    playerSum = playerHand[0] + playerHand[1]
    renderPlayerHand()
}

// FUNCTION: Renders the dealer's first card in the UI
function renderInitialDealerHand() {
    dealerHandEl.textContent = dealerHand[0]
    dealerSumEl.textContent = dealerHand[0]
}

// !!!REFACTOR INTO ONE renderHand FUNCTION

// FUNCTION: Renders the dealer's full hand in the UI
function renderDealerHand() {
    dealerHandEl.textContent = ""
    for (let i = 0; i < dealerHand.length; i++) {
        dealerHandEl.textContent += dealerHand[i] + " "
    }
    dealerSumEl.textContent = dealerSum
}

// FUNCTION: Renders the player's full hand in the UI
function renderPlayerHand() {
    playerHandEl.textContent = ""
    for (let i = 0; i < playerHand.length; i++) {
        playerHandEl.textContent += playerHand[i] + " "
    }
    playerSumEl.textContent = playerSum

}

// FUNCTION: Adds a new card to player's hand, renders it out and evaluates the new sum
function playerHit() {
    if (isAlive === true) {
        let newCard = generateRandomCard()
        playerHand.push(newCard)
        playerSum += newCard
        renderPlayerHand()
        evaluatePlayerHand()
    } else {
        messageEl.textContent = "Start a new game."
    }
}

// FUNCTION: Player stays, so evaluates dealer's hand
function playerStay() {
    if (isAlive === true) {
        updateDealerHand()
        evaluateDealerHand()
    } else {
        messageEl.textContent = "Start a new game."
    }
}

function updateDealerHand() {
    if (dealerSum <= 16) {
        let newCard = generateRandomCard()
        dealerHand.push(newCard)
        dealerSum += newCard
        updateDealerHand()
        renderDealerHand()
        // evaluateDealerHand()
    } else {
        renderDealerHand()
    }
}

// *** FUNCTIONS: RESOLVE HANDS ********************


// FUNCTION: Evaluates the player's hand for Blackjack, bust, or ability to hit or stay
function evaluatePlayerHand() {
    if (playerSum === 21) {
        messageEl.textContent = "You've got Blackjack! You get 1.5x your bet."
        isAlive = false
    } else if (playerSum > 21) {
        messageEl.textContent = "Bust! You lose your bet."
        isAlive = false
    } else if (playerSum < 21) {
        messageEl.textContent = "Hit or Stay?"
        isAlive = true
    }
}

// FUNCTION: Evaluates if dealer has Blackjack, is bust, or need to compare player & dealer hands
function evaluateDealerHand() {
    if (dealerSum === 21) {
        messageEl.textContent = "Dealer has Blackjack. You lose your bet."
        isAlive = false
    } else if (dealerSum > 21) {
        messageEl.textContent = "Dealer is bust. You get 2x your bet."
        isAlive = false
    } else {
        compareHands()
    }
}

// FUNCTION: Compare dealer & player's hands

function compareHands() {
    if (dealerSum > playerSum) {
        messageEl.textContent = "Dealer wins. You lose your bet."
        isAlive = false
    } else if (dealerSum < playerSum) {
        messageEl.textContent = "You win! You get 2x your bet."
        isAlive = false
    } else if (dealerSum === playerSum) {
        messageEl.textContent = "Tie. You keep your original bet."
        isAlive = false
    }
}






function resetGame() {
    //will reset all variables to initial values
    isAlive = false
    dealerHand = [];
    dealerSum = 0;
    playerHand = [];
    playerSum = 0;
    playerBet = 0;
    playerChips = 0;
    playerEarnings = 0;

    dealerHandEl.textContent = ""
    dealerSumEl.textContent = ""
    playerHandEl.textContent = ""
    playerSumEl.textContent = ""
    playerBetEl.textContent = ""
    playerChipsEl.textContent = ""
    playerEarnEl.textContent = ""
}
// variables for hand
let firstCard = 2;
let secondCard = 4;
let sum = firstCard + secondCard;

// save state whether player has BJ
let hasBlackjack = false;
// save state whether player "alive"/in the game
let isAlive = true;
// status message to user after play
let message = ""


// conditional to print result message based on value of hand
if (sum < 21) {
    message = "Do you want to draw another card?";
} else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
} else {
    message = "Sorry, you're out of the game.";
    isAlive = false;
}



console.log(message);
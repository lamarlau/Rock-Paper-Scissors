//initializing variables, creating an array for selection, a random index constant, and a results string to call after each round of the game
var selection = ["rock", "paper", "scissors"];
var computerResult;
var playerselection;
var computerScore = 0;
var playerScore = 0;
var round = 0;

//function for computer to randomly choose from variable selection
function computerPlay(computerResult) {
    let computerNum = Math.floor(Math.random() * 3);
    if (computerNum == 0) {
        computerResult = "rock";
    } else if (computerNum == 1) {
        computerResult = "paper";
    } else if (computerNum == 2) {
        computerResult = "scissors";
    }
    console.log("Computer chose: " + computerResult);
    return computerResult;
}

/* play round takes case insensitive input and compares your selection with the computers selection. Adds score and returns string */
function playRound(playerselection, computerselection) {
    playerselection = prompt("Rock, paper or scissors?").toLowerCase();
    console.log("You chose: " + playerselection);
    computerselection = computerPlay();
    if (playerselection == computerselection) {
        console.log("Tie");
    }
    else if (playerselection === 'rock' && computerselection === 'paper') {
        computerScore++;
        console.log("Paper beats rock");
    }
    else if (playerselection === 'paper' && computerselection === "scissors") {
        computerScore++;
        console.log("Scissors beats paper");
    }
    else if (playerselection === "scissors" && computerselection === 'paper') {
        playerScore++;
        console.log("Scissors beats paper");
    }
    else if (playerselection === 'paper' && computerselection === 'rock') {
        playerScore++;
        console.log("Paper beats rock");
    }
    else if (playerselection === 'rock' && computerselection === "scissors") {
        playerScore++;
        console.log("Rock beats scissors");
    }
    else if (playerselection === "scissors" && computerselection === 'rock') {
        computerScore++;
        console.log("Rock beats scissors");
}
}

//use previous function inside this one to play a 5 round game
//keeps score and reports winner or loser at the end
function game() {
     while (round < 5) {
        round++; 
        playRound();
        console.log("Computer score: " + computerScore + ", Player score: " + playerScore);
    }
    if (computerScore > playerScore) {
        console.log("Computer wins");
    }
    else if (computerScore < playerScore) {
        console.log("You won!");
    }
    else {
        console.log("You tied with the computer");
    }
}


//calls game function to initiate the code
game();
//initializing variables, creating an array for selection, a random index constant, and a results string to call after each round of the game
var selection = ["rock", "paper", "scissors"];
var computerResult;
var playerselection;
var computerScore = 0;
var playerScore = 0;
var results = "Computer score: " + computerScore + ", Player score: " + playerScore;
var round = 0;

//function for computer to randomly choose from variable selection
function computerPlay(computerResult) {
    let computerNum = Math.floor(Math.random() * 3);
    if (computerNum == 0) {
        computerResult = "rock"
    } else if (computerNum == 1) {
        computerResult = "paper"
    } else if (computerNum == 2) {
        computerResult = "scissors"
    }
    console.log("Computer chose: " + computerResult);
}
/* play round takes case insensitive input and compares your selection with the computers selection. Adds score and returns string */
function playRound(playerselection, computerselection) {
    playerselection = prompt("Rock, paper or scissors?").toLowerCase();
    console.log("You chose: " + playerselection);
    computerPlay();
    
}

//use previous function inside this one to play a 5 round game
//keeps score and reports winner or loser at the end
function game() {
    while (round < 5) {
        round++;
        playRound();
        console.log(results);
    }
    if (computerScore > playerScore) {
        console.log("Computer wins");
        return results;
    }
    else if (computerScore < playerScore) {
        console.log("You won!");
        return results;
    }
    else {
        console.log("Noone won");
    }
};

//calls game function to initiate the code
game();
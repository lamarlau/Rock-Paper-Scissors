//initializing variables, creating an array for selection, a random index constant, and a results string to call after each round of the game
var computerScore = 0;
var playerScore = 0;
var selection = ["rock", "paper", "scissors"];
const randIndex = Math.floor(Math.random() * selection.length);
var results = "Computer score: " + computerScore + "; Player score: " + playerScore;
var computerResult;
var choice;
var round = 0;

//function for computer to randomly choose from variable selection
function computerPlay() {
    computerResult = selection[randIndex];
    console.log(computerResult);
}

function playerPlay() {
    choice = prompt("Rock, paper or scissors?");
    choice.toLowerCase;
}
/* play round takes case insensitive input and compares your selection with the computers selection. Adds score and returns string */
function playRound(playerselection, computerselection) {
    playerPlay();
    computerPlay();
    choice = playerselection;
    computerResult = computerselection;
    if (playerselection = computerResult) {
        return "Tie, you both chose ${choice}";
    }
    else if (playerselection == selection[0] && computerselection == selection[1]) {
        computerScore++;
        return "Paper beats rock";
    }
    else if (playerselection == selection[1] && computerselection == selection[2]) {
        computerScore++;
        return "Scissors beats paper";
    }
    else if (playerselection == selection[2] && computerselection == selection[1]) {
        playerScore++;
        return "Scissors beats paper";
    }
    else if (playerselection == selection[1] && computerselection == selection[0]) {
        playerScore++;
        return "Paper beats rock";
    }
    else if (playerselection == selection[0] && computerselection == selection[2]) {
        playerScore++;
        return "Rock beats scissors";
    }
    else if (playerselection == selection[2] && computerselection == selection[0]) {
        computerScore++;
        return "Rock beats scissors";
    }
}

//use previous function inside this one to play a 5 round game
//keeps score and reports winner or loser at the end
function game() {
        playRound();
        playRound();
        playRound();
        playRound();
        playRound();
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
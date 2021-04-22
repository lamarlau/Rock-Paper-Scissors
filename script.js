//initializing variables, creating an array for selection, a random index constant, and a results string to call after each round of the game
var selection = ["rock", "paper", "scissors"];
const randIndex = Math.floor(Math.random() * selection.length);
var computerResult;
var playersChoice;
var computerScore = 0;
var playerScore = 0;
var results = "Computer score: " + computerScore + "; Player score: " + playerScore;
var round = 0;

//function for computer to randomly choose from variable selection
function computerPlay() {
    computerResult = selection[randIndex];
    console.log(computerResult);
}

/* play round takes case insensitive input and compares your selection with the computers selection. Adds score and returns string */
function playRound(playerselection, computerselection) {
    playerselection = prompt("Rock, paper or scissors?");
    playerselection.toLowerCase();
    computerPlay();
    if (playerselection = computerselection) {
        return "Tie, you both chose ${playerselection}";
    }
    else if (playerselection === 'rock' && computerselection === 'paper') {
        computerScore++;
        console.log(results);
        return "Paper beats rock";
    }
    else if (playersChoice === 'paper' && computerselection === "scissors") {
        computerScore++;
        console.log(results);
        return "Scissors beats paper";
    }
    else if (playersChoice === "scissors" && computerselection === 'paper') {
        playerScore++;
        console.log(results);
        return "Scissors beats paper";
    }
    else if (playersChoice === 'paper' && computerselection === 'rock') {
        playerScore++;
        console.log(results);
        return "Paper beats rock";
    }
    else if (playersChoice === 'rock' && computerselection === "scissors") {
        playerScore++;
        console.log(results);
        return "Rock beats scissors";
    }
    else if (playersChoice === "scissors" && computerselection === 'rock') {
        computerScore++;
        console.log(results);
        return "Rock beats scissors";
    }
    else {
        console.log(results);
    }
}

//use previous function inside this one to play a 5 round game
//keeps score and reports winner or loser at the end
function game() {
    while (round < 5) {
        round++;
        playRound();
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
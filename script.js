//initializing variables, creating an array for selection, a random index constant, and a results string to call after each round of the game
let computerScore = 0;
let playerScore = 0;
var selection = ["rock", "paper", "scissors"];
const randIndex = Math.floor(Math.random() * selection.length);
let results = "Computer score: " + computerScore + "; Player score: " + playerScore;
var computerResult;

//function for computer to randomly choose from variable selection
function computerPlay() {
    computerResult = selection[randIndex];
    console.log(computerResult);
    return computerResult;
}

/* play round takes case insensitive input and compares your selection with the computers selection. Adds score and returns  */
function playRound(playerselection, computerselection) {
    var choice = prompt("Rock, paper or scissors?");
    choice.toLowerCase();
    computerPlay();
    if (choice = playerselection) {
        return "Tie, you both chose ${choice}";
    }
    else if (choice == selection[0] && computerResult == selection[1]) {
        computerScore++;
        return "Paper beats rock";
    }
    else if (choice == selection[1] && computerResult == selection[2]) {
        computerScore++;
        return "Scissors beats paper";
    }
    else if (choice == selection[2] && computerResult == selection[1]) {
        playerScore++;
        return "Scissors beats paper";
    }
    else if (choice == selection[1] && computerResult == selection[0]) {
        playerScore++;
        return "Paper beats rock";
    }
    else if (choice == selection[0] && computerResult == selection[2]) {
        playerScore++;
        return "Rock beats scissors";
    }
    else if (choice == selection[2] && computerResult == selection[0]) {
        computerScore++;
        return "Rock beats scissors";
    }
}

//use previous function inside this one to play a 5 round game
//keeps score and reports winner or loser at the end
function game() {
    round = 0;
    while (round <= 5) {
        round++;
        playRound();
        return results;
    }
    if (computerScore > playerScore) {
        console.log("Computer wins")
        return results;
    }
    else {
        console.log("You won!")
        return results;
    }
};

//calls game function to initiate the code
game();
var selection = ["rock", "paper", "scissors"];
var computerResult;
var playerselection;
var computerScore = 0;
var playerScore = 0;
var round = 0;
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const results = document.querySelector('#results');

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

/* play round to have event listeners for buttons then will take the input and add score accordingly */
function playRound(playerselection, computerselection) {
if (playerselection) {
    console.log(playerselection);
}
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
game();
}

//playround until one gets 5 points
function game() {
    if (computerScore >= 5) {
        alert("Computer wins");
    }
    else if (playerScore >= 5) {
        alert("You won!");
    }
}

//dom javascript for button event listeners
rockButton.addEventListener('click', () => {
    alert("Hello World");
    playRound(selection[0], computerPlay());
  });
  paperButton.addEventListener('click', () => {
    alert("Hello World");
    playRound(selection[1], computerPlay());
  });
  scissorsButton.addEventListener('click', () => {
    alert("Hello World");
    playRound(selection[2], computerPlay());
  });
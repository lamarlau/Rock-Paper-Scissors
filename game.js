var selection = ["rock", "paper", "scissors"];
var computerResult;
var playerselection;
var computerScore = 0;
var playerScore = 0;
var round = 0;
var gameResults;
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const player = document.querySelector('#player-score');
player.textContent = `Player score: ${playerScore}`;
const computer = document.querySelector('#computer-score');
computer.textContent = `Computer score: ${computerScore}`;
const results = document.querySelector('#results');
results.textContent = `${gameResults}`;


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
        gameResults = "The computer won"
    }
    else if (playerScore >= 5) {
        gameResults = "You won!";
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
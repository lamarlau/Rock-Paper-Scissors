console.log("Hello World!")
//can be completely run inside the console
var selection = ["Rock", "Paper", "Scissors"];
const randIndex = Math.floor(Math.random() * selection.length);

//computer play is to randomly choose rock paper or scissors
function computerPlay() {
    console.log(selection[randIndex]);
}

//playround takes parameters playerselection and computerselection
//returns string at end like "Paper beats rock"
//player selection must be case insensitive
//return results of function call not console.log them
function playRound(playerselection, computerselection) {
    choice = prompt("Rock, paper or scissors?");
    let choice = new RegExp(/rock/i, /paper/i, /scissors/i);
    playerselection = choice;
    computerselection = computerPlay;
    if (computerselection = playerselection) {
        roundResults = tie;
        tie = console.log("Tie, you both chose ${choice}");
        return roundResults;
    }
    ["Rock", "Paper", "Scissors"];
    if (playerselection == selection[0] && computerselection == selection[1]) {
        computer++;
        return "Paper beats rock";
    }
    else if (playerselection == selection[1] && computerselection == selection[2]) {
        computer++;
        return "Scissors beats paper";
    }
    else if (playerselection == selection[2] && computerselection == selection[1]) {
        player++;
        return "Scissors beats paper";
    }
    else if (playerselection == selection[1] && computerselection == selection[0]) {
        player++;
        return "Paper beats rock";
    }
    else if (playerselection == selection[0] && computerselection == selection[2]) {
        player++;
        return "Rock beats scissors";
    }
    else if (playerselection == selection[2] && computerselection == selection[0]) {
        computer++;
        return "Rock beats scissors";
    }
    else {
        return roundResults;
    }
}
//use previous function inside this one to play a 5 round game
//keeps score and reports winner or loser at the end
function game() {
    round = 0;
    while (round <= 5) {
        round++;
        playRound();
}
}
//console.log()display the results of the round and winner to the user
//prompt()to get input from user
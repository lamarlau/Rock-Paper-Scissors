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
    tie = "Tie, you both chose ${choice}"
    return roundResults;
}
return roundResults;
}
/*I need to somehow connect choice to playerselection. I need to make it so that the if statement can recognize if playerselection and computerselection are equal. I need to add logic about how one choice is greater than or less than another choice. I need to finish the if/else logic for when computerselection wins, and when playerselection wins.*/

//use previous function inside this one to play a 5 round game
//keeps score and reports winner or loser at the end
function game() {

}

//console.log()display the results of the round and winner to the user
//prompt()to get input from user
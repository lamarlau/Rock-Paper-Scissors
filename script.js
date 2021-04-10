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
function playRound() {

}

//use previous function inside this one to play a 5 round game
//keeps score and reports winner or loser at the end
function game() {

}

//console.log()display the results of the round and winner to the user
//prompt()to get input from user
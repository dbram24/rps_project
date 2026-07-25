/* When getComputerChoice runs
Generate a random number
Based on that random number, return "Rock", "Paper", or "Scissors"
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100);
    //console.log(randomNumber);

    if (randomNumber <= 33) {
        return "Rock"
    } else if (randomNumber <= 66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

//const computerChoice = getComputerChoice(); - testing assigning function return value to variable
//console.log(computerChoice);

/*When getHumanChoice runs
Prompts user for input
Returns user's input
*/

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

//const humanChoice = getHumanChoice(); - testing assigning function return value to variable
//console.log(humanChoice);

//Declare variables for score of user and computer
//Initialize as 0

let humanScore = 0;
let computerScore = 0;

console.log(humanScore);
console.log(computerScore);
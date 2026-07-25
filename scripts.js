/* When getComputerChoice runs
Generate a random number
Based on that random number, return "Rock", "Paper", or "Scissors"
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100);
    //console.log(randomNumber);

    if (randomNumber <= 33) {
        return "rock"
    } else if (randomNumber <= 66) {
        return "paper"
    } else {
        return "scissors"
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

//console.log(humanScore); - testing initialize of these score variables
//console.log(computerScore);

/* When playRound is run
Takes humanChoice and computerChoice as parameters
Makes humanChoice case-insensitive
Compares humanChoice to computerChoice
Declares winner based on Rock-Paper-Scissors rules
Prints victory/defeat message to console
Increments humanScore or computerScore based on winner
*/

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    //console.log(humanChoice); - testing lowercase method on humanChoice

    if (humanChoice == computerChoice) {
        console.log("Tie! Try again");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper!");
        computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore += 1;
    } else {
        console.log("Please input a valid response!");
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
//const computerSelection = "rock"; - testing each case

playRound(humanSelection,computerSelection);
console.log("Human Score:");
console.log(humanScore);
console.log("Computer Score:");
console.log(computerScore);
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

//const computerChoice = getComputerChoice();
//console.log(computerChoice);

/*When getHumanChoice runs
Prompts user for input
Returns user's input
*/

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors?");
    console.log(humanChoice);
}
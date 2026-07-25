/* When getComputerChoice runs
Generate a random number
Based on that random number, return "Rock", "Paper", or "Scissors"
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
}

getComputerChoice();
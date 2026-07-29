console.log("Hello, world!!!!!!!!!!!!")


function randomNumberGenerator()
{
    return(Math.floor(Math.random()*3));
}

function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNumberGenerator()];
}

function getHumanChoice()
{
    const choice = prompt("Enter your choice: rock, paper, or scissors")
    return choice;
}

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice())
console.log(getHumanChoice())


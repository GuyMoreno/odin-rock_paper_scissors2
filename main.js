console.log("Hello, world!!!!!!!!!!!!")

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function randomNumberGenerator()
{
return(Math.floor(Math.random()*3));
}

function getComputerChoice()
{
return choices[randomNumberGenerator()];
}

function getHumanChoice()
{
let choice = prompt("Enter your choice: rock, paper, or scissors");

while (!choices.includes(choice.toLowerCase()))
    {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors");
    }

return choice.toLowerCase();
}

console.log(getComputerChoice())
console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }
  const beats = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

if (beats[humanChoice] === computerChoice) {
  console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  humanScore++;
} 

else {
  console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
  computerScore++;
}
}


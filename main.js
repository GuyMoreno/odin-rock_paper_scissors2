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
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNumberGenerator()];
}

console.log(getComputerChoice())


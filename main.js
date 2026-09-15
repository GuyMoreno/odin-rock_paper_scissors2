// Main function to play the game
function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Possible choices
    const choices = ["rock", "paper", "scissors"];

    // Generate random number
    function randomNumberGenerator() {
        return Math.floor(Math.random() * 3);
    }

    // Get computer choice
    function getComputerChoice() {
        return choices[randomNumberGenerator()];
    }

    // Get human choice
    function getHumanChoice() {
        let choice = prompt("Enter your choice: rock, paper, or scissors");

        while (!choices.includes(choice.toLowerCase())) {
            choice = prompt("Invalid choice. Please enter rock, paper, or scissors");
        }

        return choice.toLowerCase();
    }

    // Play a single round
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
        } else {
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    // Play five rounds
    for (let i = 0; i < 5; i++) {
        console.log(`--- Round ${i + 1} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Declare the final winner
    console.log("=== Game Over ===");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Game over! The computer won the game.");
    } else {
        console.log("It's a tie overall!");
    }
}

// Start the game
playGame();
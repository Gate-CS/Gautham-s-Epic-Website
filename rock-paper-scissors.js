function p(text) {
    console.log(text);
}
const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const randomNumber = Math.random() * 3;
    const index = Math.floor(randomNumber);

    return choices[index];
}

p(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt('Enter your choice (rock/paper/Scissors): ').toLowerCase()

    if (choices.includes(humanChoice)) {
        return humanChoice
    } else {
        return false
    }

}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === false) {
             computerScore = computerScore + 1
            p("You Lose")
         }

        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore = humanScore + 1;
            p("You Win");

        }

        if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore = humanScore + 1;
            p("You Win");
        }

        if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore = humanScore + 1;
            p("You Win");

        }

        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore = computerScore + 1;
            p("You Lose");

        }

        if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore = computerScore + 1;
            p("You Lose")

        }

        if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore = computerScore + 1;
            p("You Lose")

        }

        if (humanChoice === "rock" && computerChoice === "rock") {
            p("You Tied")

        }

        if (humanChoice === "paper" && computerChoice === "paper") {
            p("You Tied")

        }

        if (humanChoice === "scissors" && computerChoice === "scissors") {
            p("You Tied")

        }

        if (humanChoice === "sigma") {
            computerScore = computerScore + 3;
            p("U suck")
        }

        if (humanChoice === "") {
            computerScore = computerScore + 3;
            p("U suck")
        }

        if (humanChoice === "i am da goat") {
            humanScore = humanScore + 3;
            p("U are da GOAT")
        }

        if (humanChoice === "im hacking") {
            humanScore = humanScore + 1000;
            p("U broke the game")
        }
    }

    for (let i = 0; i < 7; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        p(`Computer: ${computerScore} Human: ${humanScore}`)

    }

    if (humanScore > computerScore) {
        p("You Win The Game")
    }
    if (humanScore < computerScore) {
        p("Computer Wins The Game cuz U suck")
    }
    if (humanScore === computerScore) {
        p("The Computer Wins the Tie")
    }
}

playGame()
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * options.length);
    let computerChoice = options[randomChoice];
    
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    let finalChoice = humanChoice.toLowerCase();
    
    while(finalChoice != "scissors" && finalChoice != "rock" && finalChoice != "paper") {
        alert("Wrong!");
        humanChoice = prompt("Rock, Paper or Scissors?");
        finalChoice = humanChoice;
    }

    finalChoice = finalChoice[0].toUpperCase() + finalChoice.slice(1);
    return finalChoice;
}


function playGame() 
{
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        const statement = `Computer picked ${computerChoice}, Human picked ${humanChoice}.`;
        let finalResult;
            
        if(humanChoice == "Rock") {
            if(computerChoice == "Rock") {
                finalResult = "It's a tie!";
            } else if(computerChoice == "Paper") {
                finalResult = "You lose! Paper beats Rock!";
                computerScore++;
            } else {
                finalResult = "You win! Rock beats Scissors!";
                humanScore++;
            }

        } else if(humanChoice == "Scissors") {
            if(computerChoice == "Rock") {
                finalResult = "You lose! Rock beats Scissors!";
                computerScore++;
            } else if(computerChoice == "Paper") {
                    finalResult = "You win! Scissors beats Paper!";
                humanScore++;
            } else {
                finalResult = "It's a tie!";
            }

        } else {
            if(computerChoice == "Rock") {
                finalResult = "You win! Paper beats Rock";
                humanScore++;
            } else if(computerChoice == "Paper") {
                finalResult = "It's a tie!";
            } else {
                finalResult = "You lose! Scissors beats Paper!";
                computerScore++;
            }
        }

        console.log(`${statement}\n${finalResult}\nComputer score: ${computerScore} Your score: ${humanScore}\n`);
        }
        while(rounds < 5) {
            playRound();
            rounds++;
        }
    let winner;
    if(computerScore > humanScore) {
        winner = `You lost!\nComputer won more rounds than you!`;
    } else if(humanScore > computerScore){
        winner = `You won!\nYou won more rounds than the computer!`;
    } else {
        winner = `It's a tie!\nYou won the same amount of rounds as the computer!`;
    }

    console.log(`Game over! ${winner}`);
}
setTimeout(() => {
    playGame();
}, 10000);
alert("Open devtools and go to console! Game starts in 10 seconds")



const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

let winnerText = document.querySelector(".winner-sect");

document.addEventListener("DOMContentLoaded", () => {
    winnerText.style.display = "none";
})

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * options.length);
    let computerChoice = options[randomChoice];
    
    return computerChoice;
}

const userScoreDisplay = document.querySelector(".user-score .update");
const computerScoreDisplay = document.querySelector(".computer-score .update");

let humanIcon = document.querySelector(".box1 .icon-container i")
let computerIcon = document.querySelector(".box3 .icon-container.fa-flip-horizontal i")



function playGame(){
    let rounds = 0;
    let humanScore = 0;
    let computerScore = 0;
    winnerText.style.display = "block";
    let finalResult = document.querySelector(".round-winner");

    function playRound(humanChoice) {
        let computerChoice = getComputerChoice();
        // const statement = `Computer picked ${computerChoice}, Human picked ${humanChoice}`;
    
        if(humanChoice === "Rock") {
            humanIcon.className = "fa-solid fa-hand-fist fa-rotate-90";
    
            if(computerChoice === "Rock") {
                finalResult.textContent = "It's a tie!";
                computerIcon.className = "fa-solid fa-hand-fist fa-rotate-90"
                
            } else if(computerChoice === "Paper") {
                finalResult.textContent = "You lose! Paper beats Rock!";
                computerIcon.className = "fa-solid fa-hand";
                updateComputerScore();
            } else {
                finalResult.textContent = "You win! Rock beats Scissors!";
                updateUserScore();
                computerIcon.className = "fa-solid fa-hand-scissors fa-flip-horizontal";
            }
        } else if(humanChoice === "Scissors") {
            humanIcon.className = "fa-solid fa-hand-scissors fa-flip-horizontal";
    
            if(computerChoice === "Rock") {
                finalResult.textContent = "You lose! Rock beats Scissors";
                computerIcon.className = "fa-solid fa-hand-fist fa-rotate-90"
                updateComputerScore();
            } else if(computerChoice === "Paper") {
                finalResult.textContent = "You win! Scissors beats Paper!";
                computerIcon.className = "fa-solid fa-hand";
                updateUserScore();
            } else {
                finalResult.textContent = "It's a tie!";
                computerIcon.className = "fa-solid fa-hand-scissors fa-flip-horizontal";
            }
        } else {
            humanIcon.className = "fa-solid fa-hand";
    
            if(computerChoice === "Rock") {
                finalResult.textContent = "You win! Paper beats Rock";
                computerIcon.className = "fa-solid fa-hand-fist fa-rotate-90"
                updateUserScore();
            } else if(computerChoice === "Paper") {
                finalResult.textContent = "It's a tie!";
                computerIcon.className = "fa-solid fa-hand";
            } else {
                finalResult.textContent = "You lose! Scissors beats Paper";
                updateComputerScore();
                computerIcon.className = "fa-solid fa-hand-scissors fa-flip-horizontal";
            }
        }
    }

    rockBtn.addEventListener("click", () => {
        playRound("Rock");
    });

    paperBtn.addEventListener("click", () => {
        playRound("Paper");
    });

    scissorsBtn.addEventListener("click", () => {
        playRound("Scissors");
    });

    while(rounds < 5) {
        playRound();
        rounds++;
    }

    let winner = document.querySelector(".final-winner");

    if(computerScore > humanScore) {
        winner.textContent = `You lost!\nComputer won more rounds than you!`;
        finalResult.textContent = "";
    } else if(humanScore > computerScore){
        winner.textContent = `You won!\nYou won more rounds than the computer!`;
        finalResult.textContent = "";
    } else {
        winner.textContent = `It's a tie!\nYou won the same amount of rounds as the computer!`;
        finalResult.textContent = "";
    }

    function updateUserScore() {
        humanScore++;
        userScoreDisplay.textContent = humanScore;
    }
    
    function updateComputerScore() {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

}



playGame();


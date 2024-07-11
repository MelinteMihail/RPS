const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
let winnerText = document.querySelector(".winner-sect");

document.addEventListener("DOMContentLoaded", () => {
    winnerText.style.visibility = "hidden";
});

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * options.length);
    let computerChoice = options[randomChoice];
    
    return computerChoice;
}

const userScoreDisplay = document.querySelector(".user-score .update");
const computerScoreDisplay = document.querySelector(".computer-score .update");

let humanIcon = document.querySelector(".box1 .icon-container i");
let computerIcon = document.querySelector(".box3 .icon-container.fa-flip-horizontal i");


let winner = document.querySelector(".final-winner");

let humanScore = 0;
let computerScore = 0;
let finalResult = document.querySelector(".round-winner");
let rounds = 0;
const totalRounds = 5;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    winnerText.style.visibility = "visible";

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

    rounds++;
    if(rounds === totalRounds) {
        if(computerScore > humanScore) {
            winner.textContent = `You lost! Computer won more rounds than you!`;
        } else if(humanScore > computerScore){
            winner.textContent = `You won! You won more rounds than the computer!`;
        } else {
            winner.textContent = `It's a tie! You won the same amount of rounds as the computer!`;
        }
        finalResult.textContent = "";
        disableButtons();
        setTimeout(() => {
            resetScore();
        }, 1000);
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

function resetScore() {
    let decision = confirm("Do you want to play another round?");

    if(decision) {
        rounds = 0;
        humanScore = 0;
        computerScore = 0;

        userScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;

        winnerText.style.visibility = "hidden";
        winner.textContent = "";
        finalResult.textContent = "";

        humanIcon.className = "";
        computerIcon.className ="fa-flip-horizontal";
        
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;

        rockBtn.style.cursor = "pointer";
        paperBtn.style.cursor = "pointer";
        scissorsBtn.style.cursor = "pointer";
    } else {
        alert("Thank you for playing");
        window.close();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    if(rockBtn.disabled == true) {
        rockBtn.style.cursor = "auto";
    }
    if(paperBtn.disabled == true) {
        paperBtn.style.cursor = "auto";
    }
    if(scissorsBtn.disabled == true) {
        scissorsBtn.style.cursor = "auto";
    }
}

function updateUserScore() {
    humanScore++;
    userScoreDisplay.textContent = humanScore;
}

function updateComputerScore() {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
}






const choice = document.querySelector("#Choice");
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;


const winner = document.querySelector("#winner");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const btns = document.querySelectorAll(".btn");
let human;
let computer;
let result = "";


/*showBtn.addEventListener("click", () => {
    dialog.showModal();
});
*/
//function playGame() {
    /*
  
let humanChoice = prompt("whats your choice?");
let human = humanChoice.toLowerCase();

*/

/*
let human;





rockBtn.addEventListener("click", () => {
    console.log("rock");
    choice.innerHTML = "rock";
    human  = "rock";
});

paperBtn.addEventListener("click", () => {
    console.log("paper");
    choice.innerHTML = "paper";
    human  = "paper";
})



scissorsBtn.addEventListener("click", () => {
    console.log("scissors");
    choice.innerHTML = "scissors";
    human  = "scissors";
})
   

    const computer = choices[Math.floor(Math.random() * 3)];
    
    console.log(computer);
*/
/*
    let result = "";

    if (human === computer) {
        result =  "It's a draw!!";
    } else if (human === "rock" && computer === "paper") {
        result = "You lose!!";
        computerScore++;
    } else if (human === "paper" && computer === "scissors") {
        result = "You lose!!";
        computerScore++;
    } else if (human === "scissors" && computer === "rock") {
        result = "You lose!!";
        console.log(computerScore++);
    } else if (human === "rock" && computer === "scissors") {
        result = "You win!!";
        console.log(humanScore++);
    } else if (human === "paper" && computer === "rock") {
        result = "You win!!";
        humanScore++;
    } else if (human === "scissors" && computer === "paper") {
        result = "You win!!";
        humanScore++;
    }

    playerDisplay.textContent = `PLAYER: ${human}`;
    computerDisplay.textContent = `COMPUTER: ${computer}`;
    resultDisplay.textContent = result;
}

    playGame();


    let playRound = () => {
        for (let i = 0; i < 5; i++) {

        }
    }

    playRound();

*/


const allBtn = document.querySelectorAll(".btn");
btns.forEach(allBtn => allBtn.addEventListener("click", (e) => {
    human = e.target.id
    playerDisplay.innerHTML = ` ${human}`;
    compChoice();
    playGame();
}));

function compChoice() {
    
 computer = choices[Math.floor(Math.random() * 3)];
    
    computerDisplay.innerHTML = computer;
}


function playGame() {
      

    if (human === computer) {
        result =  "It's a draw😒😒😒!!";
    } else if (human === "rock" && computer === "paper") {
        result = "You lose☹☹☹!!";
        computerScore++;
    } else if (human === "paper" && computer === "scissors") {
        result = "You lose☹☹☹!!";
        computerScore++;
    } else if (human === "scissors" && computer === "rock") {
        result = "You lose☹☹☹☹!!";
        computerScore++;
    } else if (human === "rock" && computer === "scissors") {
        result = "You win😎😎😎!!";
        console.log(humanScore++);
    } else if (human === "paper" && computer === "rock") {
        result = "You win😎😎😎!!";
        humanScore++;
    } else if (human === "scissors" && computer === "paper") {
        result = "You win😎😎😎!!";
        humanScore++;
    }

    
    computerDisplay.textContent =  `${computer}`;
    resultDisplay.textContent = result;
    winnerCount();
}

function winnerCount() {
    if (humanScore === 3 ) {
        winner.textContent = "HUMAN WINS!!";
    } else if(computerScore === 3) {
        winner.textContent = "COMPUTER WINS!!";
    } else if(human === computer) {
        winner.textContent = "PLAY AGAIN!!";
    } else {
        winner.textContent = "FIRST TO 3 WINS!!";
    }
};








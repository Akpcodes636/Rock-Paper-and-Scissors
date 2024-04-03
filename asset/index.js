// selecting the elements using javascript
const rockItems = document.querySelector(".rock");
const paperItems = document.querySelector(".paper");
const scissorItems = document.querySelector(".scissor");
const btnComputer = document.getElementById("computers");
const btnHuman = document.getElementById("human");
const heading = document.querySelector(".headingText");
const btnAgain = document.querySelector(".again");
const btnPlayAgain = document.querySelector(".reset");
const winnerText = document.querySelector(".prize");
const compScore = document.querySelector(".cScore");
const playScore = document.querySelector(".pScore");

const imgElements = document.querySelectorAll(".imgEl");
const endGameModal = document.querySelector(".popup-container");
//  heading.style.backgroundColor = "red";

const getComputerChoice = function () {
  // create variables
  const randomWords = ["rock", "paper", "scissors"];
  // console.log(randomWords);
  const randomStrings =
    randomWords[Math.floor(Math.random() * randomWords.length)];
  return randomStrings;
  // console.log(randomStrings);
};
getComputerChoice();
// Reset button
btnAgain.addEventListener("click", () => {
  console.log("This works!");

  heading.textContent = "Lets Play!";
  heading.style.color = "#7393B3";
  scorePlayer = 0;
  scoreComp = 0;
  tieCounter = 0;
});

// variables for the game scores, computer scores and player scores
let scorePlayer = 0;
let scoreComp = 0;
let tieCounter = 0;
let totalRounds = 5;
// Function to play one round of the game
const playRoundOne = function (playerSelection, computerSelection) {
  computerSelection = getComputerChoice(); // Get the computer's choice
  // console.log(computerSelection);
  compScore.textContent = scoreComp;
  playScore.textContent = scorePlayer;

  // Determine the winner
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    // heading.textContent = `You win! ${playerSelection} beats ${computerSelection}  ${score} 🎉`;

    heading.style.color = "#00ff00";
    //   score++;
    //   console.log(roundsPlayed);
    // return "Win";
    heading.textContent = `You win! ${playerSelection} beats ${computerSelection}  ${scorePlayer} 🎉`;
    heading.style.color = "#00ff00";
    // console.log('Win')
    scorePlayer += 1;
  } else if (playerSelection === computerSelection) {
    heading.textContent = `It's a tie! ${playerSelection} ${computerSelection}`;
    heading.style.color = "#FF0000";
    // return "Tie";
    // console.log('Tie')
    tieCounter += 1;
  } else if (playerSelection && computerSelection === "") {
    // heading.textContent = `Pick Your Warrior Rock,Paper,Scissors`;
    heading.textContent = `It's a tie!`;
    heading.style.color = "#FF0000";
    // console.log("pick Your battle");
  } else {
    //   heading.textContent = `Player2 wins! ${computerSelection} beats ${playerSelection} ${score}`;
    heading.style.color = "#FF6347";
    // score--;
    //  heading.textContent = `Player2 wins! ${computerSelection} beats ${playerSelection} ${scoreComp}`;
    // console.log("Player 2 wins!");
    scoreComp += 1;
  }

  if (scoreComp + scorePlayer === totalRounds) {
    if (scorePlayer > scoreComp) {
      // console.log('player wins')
      winnerText.textContent = `Congratulations You won`;
      winnerText.style.color = "green";
    } else {
      // console.log('com wins')
      winnerText.textContent = `Sorry You Lost!`;
      winnerText.style.color = "red";
    }
    endGameModal.classList.remove("hidden");
  }

  return scorePlayer;
};

function game() {
  for (let i = 0; i < 5; i++) {
    // playRoundOne();
  }
  // winners();
}

game();

btnPlayAgain.addEventListener("click", () => {
  heading.textContent = "Lets Play!";
  heading.style.color = "#7393B3";
  scorePlayer = 0;
  scoreComp = 0;
  tieCounter = 0;
  endGameModal.classList.add("hidden");
});

imgElements.forEach((img) => {
  img.addEventListener("click", function (events) {
    const clickedImg = events.currentTarget; // Target the image element itself
    const playerSelection = clickedImg.alt;
    // console.log(typeof playerSelection);
    const computerSelection = getComputerChoice();
    playRoundOne(playerSelection, computerSelection);
    game();
  });
});

// Start the game
playRoundOne();

// localStorage.setItem('Test', JSON.stringify("How many rounds boss!");

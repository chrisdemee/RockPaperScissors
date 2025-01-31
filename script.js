// Ask for the user's name when the page loads
window.onload = () => {
  const userName = prompt("Welcome! What is your name?");
  if (userName) {
    // Display a greeting message with the user's name
    const container = document.querySelector(".text-center");
    const greeting = document.createElement("p");
    greeting.innerText = `Hello, ${userName}! Let's play Rock, Paper, Scissors.`;
    greeting.style.fontSize = "1.5rem";
    greeting.style.fontWeight = "bold";
    container.prepend(greeting);
  }
};

// Variables to track scores and rounds
let userScore = 0;
let computerScore = 0;
let round = 1;
const maxRounds = 5;
const winningScore = 3;

// Function to get the computer's choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

// function to determine the winner of one round
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "It's a tie!";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "You lose this round!";
  }
};

// Function to display the chosen image
const displayChoiceImage = (choice, containerId) => {
  const imageContainer = document.getElementById(containerId);
  imageContainer.innerHTML = ""; // Clear previous images

  const img = document.createElement("img");
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.marginTop = "20px";

  switch (choice) {
    case "rock":
      img.src = "imgs/rock.png";
      img.alt = "Rock";
      break;
    case "paper":
      img.src = "imgs/hands.png";
      img.alt = "Paper";
      break;
    case "scissors":
      img.src = "imgs/scissors.png";
      img.alt = "Scissors";
      break;
  }

  imageContainer.appendChild(img);
};

// Function to update the score display
const updateScoreDisplay = () => {
  let scoreBoard = document.getElementById("scoreboard");
  if (!scoreBoard) {
    scoreBoard = document.createElement("p");
    scoreBoard.id = "scoreboard";
    scoreBoard.style.fontSize = "1.2rem";
    scoreBoard.style.fontWeight = "bold";
    document.querySelector(".text-center").appendChild(scoreBoard);
  }
  scoreBoard.innerText = `Round: ${round} | Your Score: ${userScore} | Computer Score: ${computerScore}`;
};

// Function to display the round result message
const displayRoundMessage = (message) => {
  let roundMessage = document.getElementById("round-message");
  if (!roundMessage) {
    roundMessage = document.createElement("p");
    roundMessage.id = "round-message";
    roundMessage.style.fontSize = "1.3rem";
    roundMessage.style.fontWeight = "bold";
    document.querySelector(".text-center").appendChild(roundMessage);
  }
  roundMessage.innerText = message;
};

// Function to check if the game is over
const checkGameOver = () => {
  if (userScore === winningScore) {
    alert("🎉 Congratulations! You won the game!");
    resetGame();
  } else if (computerScore === winningScore) {
    alert("😞 The computer won the game. You might win next time, only one way to find out.");
    resetGame();
  }
};

// Function to reset the game
const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  round = 1;
  updateScoreDisplay();
  displayRoundMessage("New game started! Make your move.");
  document.getElementById("user-choice-image").innerHTML = "";
  document.getElementById("computer-choice-image").innerHTML = "";
};

// Function to play the game
const playGame = (userChoice) => {
  if (userScore === winningScore || computerScore === winningScore) {
    return; // Stop game if already won
  }

  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  // Display images for both choices
  displayChoiceImage(userChoice, "user-choice-image");
  displayChoiceImage(computerChoice, "computer-choice-image");

  // Determine the round winner
  const resultMessage = determineWinner(userChoice, computerChoice);
  displayRoundMessage(resultMessage);
  updateScoreDisplay();

  round++;

  // Check if the game has a winner
  if (userScore === winningScore || computerScore === winningScore) {
    checkGameOver();
  }
};

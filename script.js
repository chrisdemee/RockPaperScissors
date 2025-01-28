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

// Function to get the computer's choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
      return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won.';
        } else {
          return 'You won!';
        }
  }

  if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
          return 'Computer won.';
      } else {
          return 'You won!';
      }
  }

  if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
          return 'Computer won.';
      } else {
          return 'You won!';
      }
  }

  if (userChoice === 'bomb') {
      return 'You won!';
  }
};

// Function to play the game
const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}.`);
    console.log(`Computer chose: ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));

    // Clear any previous images
    const imageContainer = document.getElementById("user-choice-image");
    imageContainer.innerHTML = '';

    // Create the image for the user choice
    if (userChoice === "rock") {
        const img = document.createElement("img");
        img.src = "imgs/rock.png"; 
        img.alt = "Rock";
        img.style.width = "100px"; 
        img.style.height = "100px"; 
        img.style.marginTop = "20px"; 
        imageContainer.appendChild(img);
    }

    if (userChoice === "paper") {
      const img = document.createElement("img");
      img.src = "imgs/hands.png"; 
      img.alt = "Paper";
      img.style.width = "100px"; 
      img.style.height = "100px"; 
      img.style.marginTop = "20px"; 
      imageContainer.appendChild(img);
  }

  if (userChoice === "scissors") {
    const img = document.createElement("img");
    img.src = "imgs/scissors.png"; 
    img.alt = "Scissors";
    img.style.width = "100px"; 
    img.style.height = "100px"; 
    img.style.marginTop = "20px"; 
    imageContainer.appendChild(img);
}
};

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  let target;
  target = Math.floor(Math.random()*10);
  return target;
};

const getAbsoluteDistance = (guess, secretNumber) => {
  return Math.abs(guess - secretNumber);
};

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    alert('Your number is out of range. Please select a number between 0 and 9');
  };
  let userDifference = getAbsoluteDistance(userGuess, secretNumber);
  let computerDifference = getAbsoluteDistance(computerGuess, secretNumber);
  return userDifference <= computerDifference;
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  };
};

const advanceRound = () => {
  currentRoundNumber += 1;
};
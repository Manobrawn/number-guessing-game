alert(`
Welcome to the Number Guessing Game!
Here's how to play:
- Open the console in the Spection Tools of your Browser. CMD + OPT +C (Mac) or CTRL + SHIFT + C (Windows) or Right Click and click Inspect.
- I will choose a number between 1 and 100.
- Your goal is to guess the correct number in 10 or fewer attempts.
- After each guess, I'll tell you whether your guess is too low, too high, or correct.
- To play, please use the console on your browser's inspection tool. 
Good luck! :)
`);

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getPlayerGuess = function() {
  const guess = parseInt(prompt("Enter a guess between 1 and 100: "), 10);

  if (guess >= 1 && guess <= 100) {
    return guess;
  } else {
    alert("This input is not valid. Please enter a number between 1 and 100.");
    return getPlayerGuess(); 
  }
};

const checkGuess = function(playerGuess, correctNumber) {
  if (playerGuess < correctNumber) {
    return "low";
  } else if (playerGuess > correctNumber) {
    return "high";
  } else {
    return "correct";
  }
};

const game = function(correctNumber, attempts = 0, maxAttempts = 10) {
  if (attempts >= maxAttempts) {
    console.log(`You have used all your ${maxAttempts} attempts! The correct number was ${correctNumber}.`);
    playAgain();
    return;
  }
  const playerGuess = getPlayerGuess();
  attempts++;
  const leftAttempts = maxAttempts - attempts;
  console.log(`Used attempts: ${attempts}, Left attempts: ${leftAttempts}`);
  const result = checkGuess(playerGuess, correctNumber);
  switch (result) {
    case "low":
      console.log(`${playerGuess} is too low!`);
      break;
    case "high":
      console.log(`${playerGuess} is too high!`);
      break;
    case "correct":
      console.log(`Congratulations! ${playerGuess} is the correct number. You needed ${attempts} attempts!`);
      const score = calculateScore(leftAttempts, true);
      console.log(`Your SCORE is ${score}!`);
      playAgain()
      return;
  }
  setTimeout(() => {
    game(correctNumber, attempts, maxAttempts); 
  }, 100);
};

const calculateScore = (leftAttempts, wasGuessed) => wasGuessed ? 20 + (leftAttempts * 10) : 0;
setTimeout(() => {
  game(generateRandomNumber());
}, 100);

function playAgain() {
  let response = prompt("Do you want to play again? (yes/no)").toLowerCase();
  if (response === "yes") {
      console.clear();
      game();
  } else {
      alert("Thanks for playing! See you next time.");
  }
};
alert(`
Welcome to the Number Guessing Game!
Here's how to play:
1. I will choose a number between 1 and 100.
2. Your goal is to guess the correct number in 10 or fewer attempts.
3. After each guess, I'll tell you whether your guess is too low, too high, or correct.
4. To play, please use Google Chrome and open the browser's inspector (press either F12, cmd-option-i, or right-click and select 'Inspect'). Then go to the "Console" tab to see game updates.
Good luck!
`);

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getPlayerGuess = function() {
  const guess = parseInt(Number(prompt("Enter a guess between 1 and 100: ")));

  if (guess >= 1 && guess <= 100) {
    return guess;
  } else {
    alert("This input is not valid. Please enter a number between 1 and 100");
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

const game = function(correctNumber, maxAttempts = 10) {
  let wasGuessed = false;
  let attempts = 0; 

  while (attempts < maxAttempts) {
    attempts++;
    const leftAttempts = maxAttempts - attempts;
    const playerGuess = getPlayerGuess();
    console.log(`Used attempts: ${attempts} Left attempts: ${leftAttempts}`);

    const result = checkGuess(playerGuess, correctNumber); 
    switch (result) {
      case "low":
        console.log(`${playerGuess} is too low!`);
        break;
      case "high":
        console.log(`${playerGuess} is too high!`)
        break;
      case "correct":
        wasGuessed = true;
        console.log(`Congratulations! ${playerGuess} is the correct number. You needed ${attempts} attempts!`);
        const score = calculateScore(leftAttempts, wasGuessed);
        console.log(`Your SCORE is ${score}! ${10 * leftAttempts} for each ATTEMPT LEFT + 20 for the RIGHT GUESS!`);
        return;
    }
  }
  console.log(`You have used all your ${maxAttempts} attempts! The correct number was ${correctNumber}.`);
};

const calculateScore = (leftAttempts, wasGuessed) => wasGuessed ? 20 + (leftAttempts * 10) : (leftAttempts * 10);

setTimeout(() => {
  game(generateRandomNumber());
}, 100);


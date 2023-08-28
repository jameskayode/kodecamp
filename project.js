const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const minNumber = 1;
const maxNumber = 10;
const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

function playGame() {
  rl.question(`Guess a number between ${minNumber} and ${maxNumber} (or type 'exit' to quit): `, (answer) => {
    if (answer.toLowerCase() === 'exit') {
      console.log('Exiting the game...');
      rl.close();
      return;
    }

    const guessedNumber = parseInt(answer);

    if (isNaN(guessedNumber)) {
      console.log('Please enter a valid number.');
      playGame();
    } else {
      attempts++;

      if (guessedNumber === secretNumber) {
        console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
        rl.close();
      } else if (guessedNumber < secretNumber) {
        console.log('Try a higher number.');
        playGame();
      } else {
        console.log('Try a lower number.');
        playGame();
      }
    }
  });
}

console.log('Welcome to the Guessing Game! Type "exit" anytime to quit the guessing game.');
playGame();

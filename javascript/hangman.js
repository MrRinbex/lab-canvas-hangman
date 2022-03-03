class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = []
    this.guessedLetters = "";
    this.errorsLeft = 10  

  }

  pickWord() {
    const randomWordsIndex = Math.floor(Math.random() * this.words.length)
    return this.words[randomWordsIndex]

  }

  checkIfLetter(keyCode) {
    if(keyCode <= 90 && keyCode >= 65)
      return true
    else
      return false  
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter) ? false : true
  }

  addCorrectLetter(letter) {
    return this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters.push(letter)
    return this.errorsLeft
  }

  checkGameOver() {
   return this.errorsLeft > 0 ? false : true
  }

  checkWinner() {
    return !this.checkGameOver ? false : true  
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});

class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    this.drawLines()
  }

  drawLines() {
    this.context.beginPath();
    this.context.moveTo(400, 290);
    this.context.lineTo(400, 170);
    this.context.lineTo(100, 170);
    this.context.lineTo(100, 450);
    this.context.lineTo(60, 500);
    this.context.lineTo(140, 500);
    this.context.lineTo(100, 450);
    this.context.moveTo(240, 500);
    for (let i = 0; i < this.secretWord.length; i += 1) {
      this.context.lineTo(300 + 60 * i, 500);
      this.context.moveTo(300 + 60 *  i + 10 , 500);
    }
    this.context.lineWidth = 2;
    this.context.strokeStyle = 'grey';
    this.context.stroke();
    this.context.closePath();
   }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}

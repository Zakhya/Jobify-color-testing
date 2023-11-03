export default class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.status = "playing";
    this.guessedLetters = [];
    this.permaLetters = [];
    this.areaOfEffectLetters = [];
  }
  get puzzle() {
    let _puzzle = "";

    for (let i = 0; i < this.word.length; i++) {
      if (
        this.areaOfEffectLetters.includes(this.word[i - 1]) ||
        this.areaOfEffectLetters.includes(this.word[i]) ||
        this.areaOfEffectLetters.includes(this.word[i + 1]) ||
        this.guessedLetters.includes(this.word[i]) ||
        this.permaLetters.includes(this.word[i]) ||
        this.word[i] === " "
      ) {
        _puzzle += this.word[i];
      } else {
        _puzzle += "*";
      }
    }

    return _puzzle;
  }

  calculateStatus() {
    let finishedArray = [];
    for (let i = 0; i < this.word.length; i++) {
      if (
        this.areaOfEffectLetters.includes(this.word[i - 1]) ||
        this.areaOfEffectLetters.includes(this.word[i]) ||
        this.areaOfEffectLetters.includes(this.word[i + 1]) ||
        this.guessedLetters.includes(this.word[i]) ||
        this.permaLetters.includes(this.word[i]) ||
        this.word[i] === " "
      ) {
        finishedArray.push(true);
      } else {
        finishedArray.push(false);
      }
    }
    let finished = finishedArray.every((letter) => letter === true);

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  checkLetter(guess, guessedLetters) {
    guess = guess.toLowerCase();
    const isBadGuess =
      !this.word.includes(guess) &&
      !this.guessedLetters.includes(guess) &&
      !this.permaLetters.includes(guess);

    this.calculateStatus();

    return isBadGuess;
  }

  addToAreaOfEffectLetters(letter) {
    this.guessedLetters.push(letter);
    this.calculateStatus();
  }
  addToGuessedLetters(letter) {
    this.guessedLetters.push(letter);
    this.calculateStatus();
  }

  addToPermaLetters(letter) {
    if (!this.permaLetters.includes(letter)) this.permaLetters.push(letter);
    this.addToGuessedLetters(letter);
    console.log(this.permaLetters);
    this.calculateStatus();
  }
}

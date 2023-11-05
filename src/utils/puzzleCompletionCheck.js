export const checkForCompletion = (puzzleArray) => {
  let puzzleComplete = true;
  let localScore = 0;
  puzzleArray.forEach((hangman) => {
    hangman.forEach((game) => {
      game.word.forEach((letter) => {
        console.log("letterLog");
        localScore++;
      });
      if (game.status !== "finished") {
        puzzleComplete = false;
      }
    });
  });
  return [puzzleComplete, localScore];
};

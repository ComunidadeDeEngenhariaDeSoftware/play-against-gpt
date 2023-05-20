
type Moviment = "X" | "O" | "";

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const gameState: Moviment[] = [];

function isPossibleMove(moviment: Moviment) {
  if (gameState) {
    
  }
}

function didSomeoneWon() {
  for (const pattern of winningPatterns) {
    if (gameState[pattern[0]] 
      && gameState[pattern[0]] === gameState[pattern[1]] 
      && gameState[pattern[0]] === gameState[pattern[2]])  {
        return gameState[0];
    }
  }
}

function makeMove(moviment: Moviment) {
  const whoWon = didSomeoneWon();
  
  if (whoWon) {

  }

  if (gameState.every(x => x === "X" || x === "O")) {
    // ninguem ganhou
  }

  /*
  if (!isPossibleMove(moviment)) {

  };
  */
}
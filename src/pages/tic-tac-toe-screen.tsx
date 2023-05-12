import { useState } from "react";
import TicTacToe from "../components/TicTacToe/tic-tac-toe";
import AgainButton from "../components/TicTacToe/again-button";
import Title from "../components/title";
import GameName from "../components/game-name";
import Header from "../components/Header/header";

function TicTacToeScreen() {
  let showAgainButton = false;

  function toggleShowAgainButton() {
    showAgainButton = true;
  }

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isPlayer, setIsPlayer] = useState(true);

  function handleClick(squareClicked) {
    if (win(squares) || squares[squareClicked]) {
      return;
    }

    squares[squareClicked] = isPlayer ? "X" : "O";
    setSquares(squares);
    setIsPlayer(!isPlayer);
  }

  function resetGame() {
    setSquares([]);
    setIsPlayer(true);
  }

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner = win(squares);
  let status;

  if (win(squares)) {
    status = `WINNER: ${winner}`;
    toggleShowAgainButton();
  } else {
    status = `NEXT: ${isPlayer ? "X" : "O"}`;
  }

  function win(squares) {
    for (let n = 0; n < winningPatterns.length; n++) {
      const [a, b, c] = winningPatterns[n];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="w-screen flex flex-col  h-screen bg-slate-500">     
      <Header></Header>
      <div className="flex flex-col">
        <Title></Title>
        <GameName gameName={"TIC TAC TOE"}></GameName>
        <TicTacToe
          status={status}
          squares={squares}
          onSquareClick={handleClick}
        />
        {showAgainButton && <AgainButton onGameReset={resetGame}></AgainButton>}
      </div>
    </div>
  );
}

export default TicTacToeScreen;

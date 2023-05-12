import TicTacToe from "./tic-tac-toe";

function AgainButton({ onGameReset }) {
  return <button onClick={onGameReset}>Again</button>;
}

export default AgainButton;

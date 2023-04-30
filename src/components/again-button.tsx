import TicTacToe from "../components/tic-tac-toe";

function AgainButton({ onGameReset }) {
  return <button onClick={onGameReset}>Again</button>;
}

export default AgainButton;

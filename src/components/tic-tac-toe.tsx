import { useState } from "react";
import Square from "./square";

export default function TicTacToe({ onSquareClick, squares, status }) {
  return (
    <div className="flex">
      <div className="grid grid-rows-3 grid-cols-3 mt-36">
        <Square onClick={() => onSquareClick(0)} value={squares[0]}></Square>
        <Square onClick={() => onSquareClick(1)} value={squares[1]}></Square>
        <Square onClick={() => onSquareClick(2)} value={squares[2]}></Square>
        <Square onClick={() => onSquareClick(3)} value={squares[3]}></Square>
        <Square onClick={() => onSquareClick(4)} value={squares[4]}></Square>
        <Square onClick={() => onSquareClick(5)} value={squares[5]}></Square>
        <Square onClick={() => onSquareClick(6)} value={squares[6]}></Square>
        <Square onClick={() => onSquareClick(7)} value={squares[7]}></Square>
        <Square onClick={() => onSquareClick(8)} value={squares[8]}></Square>
        <h2 className="text-5xl w-60">{status}</h2>
      </div>
    </div>
  );
}

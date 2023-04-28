import { useState } from "react";
import Square from "./square";




export default function TicTacToe({onSquareClick, squares, status}) {     
        
    return (
        <div className="flex">  
            <div className="grid grid-rows-3 grid-cols-3 mt-36">
                <Square value={squares[0]} onClick={onSquareClick}></Square>
                <Square value={squares[1]} onClick={onSquareClick}></Square>
                <Square value={squares[2]} onClick={onSquareClick}></Square>
                <Square value={squares[3]} onClick={onSquareClick}></Square>
                <Square value={squares[4]} onClick={onSquareClick}></Square>
                <Square value={squares[5]} onClick={onSquareClick}></Square>
                <Square value={squares[6]} onClick={onSquareClick}></Square>
                <Square value={squares[7]} onClick={onSquareClick}></Square>
                <Square value={squares[8]} onClick={onSquareClick}></Square>
                <h2 className="text-5xl w-60">{status}</h2>
            </div>
        </div>
    ) 
}


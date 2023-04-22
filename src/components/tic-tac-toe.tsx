import React, { useState } from "react";
import Square from "./square";



function TicTacToe() {     
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isPlayer, setIsPlayer] = React.useState(true)
    console.log(squares)

    const handleClick = (i) => {
        if(win(squares) || squares[i]) {
            return
        }

        squares[i] = isPlayer ? 'X' : 'O'
        setSquares(squares)
        setIsPlayer(!isPlayer)
    }


    
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const winner = win(squares)

    let status

    if(winner) {
        status = `WINNER: ${winner}`
    } else {
        status = `NEXT: ${isPlayer ? 'X' : 'O'}`
    }

    
    function win (squares) {
                for(let n = 0; n  < winningPatterns.length; n++ ) {
                    const [a, b, c] = winningPatterns[n]
                
                    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a]
                }
            }
    return null
    }
    
    
    
    return (
        <div className="grid grid-rows-3 grid-cols-3 mt-36">
            <Square value={squares[0]} onClick={() => handleClick(0)}></Square>
            <Square value={squares[1]} onClick={() => handleClick(1)}></Square>
            <Square value={squares[2]} onClick={() => handleClick(2)}></Square>
            <Square value={squares[3]} onClick={() => handleClick(3)}></Square>
            <Square value={squares[4]} onClick={() => handleClick(4)}></Square>
            <Square value={squares[5]} onClick={() => handleClick(5)}></Square>
            <Square value={squares[6]} onClick={() => handleClick(6)}></Square>
            <Square value={squares[7]} onClick={() => handleClick(7)}></Square>
            <Square value={squares[8]} onClick={() => handleClick(8)}></Square>
            <h2 className="text-5xl">{status}</h2>
       </div>
    ) 
}

export default TicTacToe;
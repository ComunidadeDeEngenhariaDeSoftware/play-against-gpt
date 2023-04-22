import TicTacToe from '../components/tic-tac-toe'

function TicTacToeScreen() {
    return (
        <div className="w-screen flex justify-center h-screen bg-slate-500">
            <div className="flex flex-col">
                <h1 className="text-7xl mt-4">PLAY AGAINST GPT</h1>
                <h2 className="text-4xl mt-4 flex justify-center">TIC TAC TOE</h2>
                <TicTacToe/>
            </div>
        </div>
    )
}

export default TicTacToeScreen;
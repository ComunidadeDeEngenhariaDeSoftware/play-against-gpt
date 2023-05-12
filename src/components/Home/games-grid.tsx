import GridGame from "./grid-game";

function GamesGrid() {
    return(
        <div className="grid grid-cols-3 grid-rows-3 bg-slate-600 border-solid border-slate-950 border-4 rounded-2xl">
            <GridGame gameTitle={"TIC TAC TOE"} gameLink={"/tic-tac-toe-screen"}/>
        </div>
    )
}

export default GamesGrid;
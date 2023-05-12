import GameIcon from "./game-icon";

function GridGame(props) {
    return(
        <div className="solid border-slate-950 border-2 m-3 flex flex-col">
            <h1 className="flex text-xl justify-center">{props.gameTitle}</h1>
            <GameIcon gameLink={props.gameLink}></GameIcon>
        </div>
    )
}

export default GridGame;


import Link from "next/link";

function GameIcon(props){
    return(
        <Link className="flex justify-center" href={props.gameLink} passHref>
            <img className="w-24 h-auto" src="tic-tac-toe.png"></img>
        </Link>
    )
}

export default GameIcon;
import Header from "../components/Header/header";
import GamesGrid from "../components/Home/games-grid";
import TicTacToeScreen from "./tic-tac-toe-screen";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-screen flex flex-col h-screen bg-slate-500">
        <Header></Header>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="flex  flex-col">
              <div className="bg-slate-700 w-fit h-fit p-3 border-solid border-slate-950 border-2 my-6 rounded-3xl">
                <h2 className="flex justify-center text-8xl">WELCOME TO</h2>
                <h3 className="flex justify-center  text-5xl">
                  PLAY AGAINST GPT
                </h3>
              </div>
              <GamesGrid></GamesGrid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

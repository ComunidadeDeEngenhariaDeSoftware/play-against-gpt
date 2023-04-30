import TicTacToeScreen from "../components/tic-tac-toe-screen";
import { useGetChatResponse } from "../utils/api";

export default function Home() {
  //const { data, error, isLoading } = useGetChatResponse();
  
  return (
    <div>
      <TicTacToeScreen />
    </div>
  );
}

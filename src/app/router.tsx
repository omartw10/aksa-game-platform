import { createBrowserRouter } from "react-router-dom";
import CreateGamePage from "../features/createGame/CreateGamePage";
import GameBoardPage from "../features/gameBoard/GameBoardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateGamePage />,
  },
  {
    path: "/game",
    element: <GameBoardPage />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import CreateGamePage from "../features/createGame/CreateGamePage";
import CategorySelectionPage from "../features/categorySelection/CategorySelectionPage";
import GameBoardPage from "../features/gameBoard/GameBoardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateGamePage />,
  },
  {
    path: "/categories",
    element: <CategorySelectionPage />,
  },
  {
    path: "/game",
    element: <GameBoardPage />,
  },
]);

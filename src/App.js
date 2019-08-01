import React from "react";
import { GameProvider } from "./GameContext";
import Nav from "./Nav";
import GameList from "./GameList";
import AddGame from "./AddGame";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Nav />
        <AddGame />
        <GameList />
      </div>
    </GameProvider>
  );
}

export default App;

import React, { useContext } from "react";
import { GameContext } from "./GameContext";

const Nav = () => {
  const [games, setGame] = useContext(GameContext);
  return (
    <div>
      <h1>Game Archive</h1>
      <p>List of games: {games.length}</p>
    </div>
  );
};

export default Nav;

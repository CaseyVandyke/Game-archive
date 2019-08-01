import React, { useContext, Fragment } from "react";
import { GameContext } from "./GameContext";
import { Game } from "./Game";

const GameList = () => {
  const [games, setGame] = useContext(GameContext);
  return (
    <Fragment>
      {games.map(game => (
        <Game name={game.title} price={game.price} key={game.id} />
      ))}
    </Fragment>
  );
};

export default GameList;

import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = props => {
  const [games, setGame] = useState([
    {
      title: "Bloodborne",
      price: "$29.99",
      id: 1
    },
    {
      title: "Dark Souls",
      price: "$9.99",
      id: 2
    },
    {
      title: "Skyrim",
      price: "$59.99",
      id: 3
    }
  ]);
  return (
    <GameContext.Provider value={[games, setGame]}>
      {props.children}
    </GameContext.Provider>
  );
};

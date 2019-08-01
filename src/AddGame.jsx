import React, { useState, useContext } from "react";
import { GameContext } from "./GameContext";

const AddGame = () => {
  const [title, setName] = useState("");
  const [price, setPrice] = useState("");
  const [games, setGame] = useContext(GameContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addGame = e => {
    e.preventDefault();
    setGame(prevGame => [...prevGame, { title: title, price: price }]);
  };

  return (
    <form action="#" onSubmit={addGame}>
      <input type="text" name="name" onChange={updateName} />
      <input type="text" name="price" onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddGame;

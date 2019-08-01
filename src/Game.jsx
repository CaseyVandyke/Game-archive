import React, { Fragment } from "react";

export const Game = props => {
  const { name, price } = props;
  return (
    <Fragment>
      <h3>{name}</h3>
      <p>{price}</p>
    </Fragment>
  );
};

import React from "react";
import HeroList from "../heros/HeroList";
import { heroes } from "../../data/heroes";

const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel Screen</h1>
      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};

export default MarvelScreen;

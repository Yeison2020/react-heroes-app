import React from "react";
import HeroList from "../heros/HeroList";

const DcScreen = () => {
  return (
    <div>
      <h1>Dc Screen</h1>
      <HeroList publisher={"DC Comics"} />
    </div>
  );
};

export default DcScreen;

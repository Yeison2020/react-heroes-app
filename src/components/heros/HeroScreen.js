import React from "react";
import getHeroById from "../../selectors/getHeroById";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const HeroScreen = () => {
  // This hook give me the id that It's been pass in the url and I can destrure it to see and Use the id at my disposal
  let { slug } = useParams();

  // Using the id with my function
  const hero = getHeroById(slug);
  console.log(hero);

  // This is similiar to use Navigate
  // Check if the condition is not met I will send you bak to another path or end point
  if (!hero) {
    <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Welcome here</h1>
      <p>{hero.superhero}</p>
    </div>
  );
};

export default HeroScreen;

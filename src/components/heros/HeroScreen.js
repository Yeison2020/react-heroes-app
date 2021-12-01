import React from "react";
import getHeroById from "../../selectors/getHeroById";
import { useParams, Navigate } from "react-router-dom";
const HeroScreen = () => {
  // This hook give me the id that It's been pass in the url and I can destrure it to see and Use the id at my disposal

  // Another problem is the { slug } has to match the name hero/:slug
  let { slug } = useParams();
  console.log(slug);

  // Using the id with my function
  const hero = getHeroById(slug);
  // This is similiar to use Navigate
  // Check if the condition is not met I will send you bak to another path or end point
  console.log(hero);

  if (!hero) {
    <Navigate to="/" />;
  }

  // mt marging top
  return (
    <div className="row mt-5">
      <h1>Welcome here</h1>
      <p>{hero[0].superhero}</p>
    </div>
  );
};

export default HeroScreen;

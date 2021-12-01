import React from "react";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  // Important note is how I'm passing the values using destruring with ppoprs

  return (
    <div className="card-deck">
      <h1>{publisher}</h1>
      <ul>
        {heroes.map((data) => {
          console.log(data);
          return <HeroCard key={data.id} {...data}></HeroCard>;
        })}
      </ul>
    </div>
  );
};

export default HeroList;

import React, { useMemo } from "react";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";
import "./HeroList.css";

const HeroList = ({ publisher }) => {
  // This is how I save data to the user and give performance when adding value to the useMemo I'm returning and saving the value oonly when the dependancie changes Its value the useMemo will do change.
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  // Important note is how I'm passing the values using destruring with props

  return (
    <div className="card-group animate__animated animate__swing">
      <h1>{publisher}</h1>
      <ul>
        {heroes.map((data) => {
          console.log(data);
          return (
            <HeroCard
              key={data.id}
              {...data}
              className="animate__animated animate__animated"
            ></HeroCard>
          );
        })}
      </ul>
    </div>
  );
};

export default HeroList;

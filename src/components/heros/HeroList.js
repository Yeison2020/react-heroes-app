import React from "react";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <h1>Hero list {publisher}</h1>
      <ul>
        {heroes.map((data) => {
          return <li key={data.id}>{data.superhero}</li>;
        })}
      </ul>
    </>
  );
};

export default HeroList;

import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const image_path = `assets/heroes/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={image_path} className="card-img" alt="Comic Images"></img>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}
              <p className="card-text">
                <small>{first_appearance}</small>
              </p>
              <h5>Publisher</h5>
              <p>{publisher}</p>
              <Link to={`/hero/${id}`} className="btn btn-primary">
                More ...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

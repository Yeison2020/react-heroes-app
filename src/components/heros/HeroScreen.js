import React from "react";
import getHeroById from "../../selectors/getHeroById";
import { useParams, Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
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
  // This one auto navigate while useNavigate have to be trigger by the user mostly using a function
  if (!hero) {
    <Navigate to="/" />;
  }

  const navigate = useNavigate();

  const image_path = `/assets/heroes/${slug}.jpg`;
  console.log(image_path);
  // Here the -1 one value return the useNavigate to the page It was before
  const handleReturn = () => {
    navigate(-1, { replace: true });
  };

  // mt marging top
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={image_path}
          alt={hero[0].superhero}
          className="img-thumbnail"
        ></img>
      </div>
      <div className="col-8">
        <h3>{hero[0].superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero[0].alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher:</b> {hero[0].publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First appearance:</b> {hero[0].first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{hero[0].characters}</p>
        <button className="btn btn-primary" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;

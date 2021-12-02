import React from "react";

// This labrary will help me to use the values from my useLocation Hook
// Adn query those value
import queryString from "query-string";
import getHeroesByName from "./getHeroesByName";
import { useForm } from "./useForm";
import HeroCard from "../heros/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";

const SearchScreen = () => {
  // Those terms or Hooks are really import Please be aware of them
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.search);
  const query = queryString.parse(location.search);
  const [values, handleInputChange] = useForm({
    searchText: "",
  });

  // How important Its the name of the input has to match with searchText if they do not macth I will not work.

  console.log(values);

  const { searchText } = values;

  const heroesFiltered = getHeroesByName("Super man");

  const handleform = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Searchs</h1>
      <hr />
      <form>
        Search
        <input
          type="text"
          name="searchText"
          placeholder="Search"
          className="form-control mt-2"
          autoComplete="off"
          value={searchText}
          onChange={handleInputChange}
        ></input>
        <button
          type="submit"
          className="btn btn-outline-primary mt-3 btn-block"
          onClick={handleform}
        >
          Search
        </button>
      </form>
      <hr />
      <div className="colums">
        <h4>Results</h4>
        <div className="col-5"></div>
        <div className="col-7">
          {heroesFiltered.map((data) => {
            return <HeroCard key={data.id} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;

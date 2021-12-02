import React from "react";

// This labrary will help me to use the values from my useLocation Hook
// Adn query those value
import queryString from "query-string";
import getHeroesByName from "./getHeroesByName";
import { useForm } from "./useForm";
import HeroCard from "../heros/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";

const SearchScreen = () => {
  // Those terms or Hooks are really import Please be aware of them
  const navigate = useNavigate();
  const location = useLocation();

  // Here I'm just trying to find the current value of the search object
  // using the location hook
  console.log(location, location.search);

  const { q = "" } = queryString.parse(location.search);

  // This values will be send to retrive the value Using Its name
  console.log(q);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  // How important Its the name of the input has to match with searchText if they do not macth I will not work.

  console.log(values);

  // Here I destructuring searchText from values That Its a return from useForm
  const { searchText } = values;
  // Really important Please learn how to use this hook
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleform = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  // Check how Im using coditionals to display differents ternary
  // Super important
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
          {q === "" ? (
            <div className="alert alert-info">Please Enter a valid value</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="alert alert-info">No results Sorry Try later</div>
            )
          )}
          {heroesFiltered.map((data) => {
            return <HeroCard key={data.id} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;

import React from "react";
import { useForm } from "./useForm";

const SearchScreen = () => {
  const [values, handleInputChange] = useForm({
    searchText: "",
  });

  // How important Its the name of the input has to match with searchText if they do not macth I will not work.

  console.log(values);

  const { searchText } = values;

  const handleform = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form>
            <input
              type="text"
              name="searchText"
              placeholder="Search"
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            ></input>
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
              onClick={handleform}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchScreen;

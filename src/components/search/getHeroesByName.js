import { heroes } from "../../data/heroes";
// Its really important to note the values Im recieving is the query
// That is filter with the query libray and useLocation
const getHeroesByName = (name = "") => {
  if (name === "") {
    return [];
  } else {
    return heroes.filter((data) =>
      data.superhero.toLowerCase().includes(name.toLowerCase())
    );
  }
};

export default getHeroesByName;

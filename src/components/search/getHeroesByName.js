import { heroes } from "../../data/heroes";

const getHeroesByName = (name = "") => {
  return [...heroes];
};

export default getHeroesByName;

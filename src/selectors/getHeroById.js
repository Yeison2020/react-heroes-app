import { heroes } from "../data/heroes";

const getHeroById = (id = "") => {
  return heroes.filter((data) => data.id === id);
};

export default getHeroById;

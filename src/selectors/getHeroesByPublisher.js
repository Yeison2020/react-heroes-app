import { heroes } from "../data/heroes";

const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((data) => data.publisher === publisher);
};

export default getHeroesByPublisher;

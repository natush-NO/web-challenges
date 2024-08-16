import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
    age: chance.age(),
    email: chance.email(),
    city: chance.city(),
    country: chance.country(),
  };

  res.status(200).json(character);
}

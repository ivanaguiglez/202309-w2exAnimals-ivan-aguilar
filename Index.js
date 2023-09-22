const animalA = {
  id: 1,
  nameOfAnimal: "Pepe",
  age: "7 años",
  weight: "8Kg",
  animalSpecie: "bird",
  stinctionYear: "1662",
};

const animalB = {
  id: 2,
  nameOfAnimal: "Jose",
  age: "15 años",
  weight: "200 Kg",
  animalSpecie: "feline",
  stinctionYear: "",
};

const getAnimalSpecie = (animal) => animal["animalSpecie"];

getAnimalSpecie(animal);

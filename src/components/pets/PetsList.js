import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

const PetsList = ({ pets, type }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  let displayPets =
    type === "Cats"
      ? cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)
      : type === "Dogs"
      ? dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)
      : pets.map((pet) => <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
      );
  debugger;
  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}
        {displayPets}
      </section>
    </section>
  );
};

export default PetsList;

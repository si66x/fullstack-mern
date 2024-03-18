import { useState } from "react";

const Phonebook = ({ persons, filteredItems, setFilteredItems }) => {
  const [query, setQuery] = useState("");
  const filterHandler = (e) => {
    const targetValue = e.target.value;
    setQuery(targetValue);
    const personsFilter = persons.filter(
      (person) => person.name.toLowerCase() === targetValue.toLowerCase()
    );
    setFilteredItems(personsFilter);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with <input value={query} onChange={filterHandler} />
      </p>
      {filteredItems.map((data) => {
        return (
          <div key={data.id}>
            <p>
              {data.name} : {data.number}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Phonebook;

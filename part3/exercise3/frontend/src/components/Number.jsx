import service from "../services/personService";
const Number = ({ persons }) => {
  return (
    <div>
      <div>
        <h2>Numbers</h2>
        <ul>
          {persons.map((person) => (
            <div key={person.id}>
              {person.name} : {person.number}{" "}
              <button
                onClick={() => {
                  window.confirm(`Delete ${person.name} ?`)
                    ? service.deleteData(person.id)
                    : console.log("cancel");
                }}
              >
                delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Number;

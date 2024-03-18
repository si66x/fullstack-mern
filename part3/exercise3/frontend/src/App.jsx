import { useState, useEffect } from "react";

import dataService from "../src/services/personService";
import AddNew from "./components/AddNew";
import Phonebook from "./components/Phonebook";
import Number from "./components/Number";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredItems, setFilteredItems] = useState([persons]);

  useEffect(() => {
    dataService.getAllData().then((e) => {
      setPersons(e.data);
    });
  }, []);
  return (
    <div>
      <Phonebook
        filteredItems={filteredItems}
        persons={persons}
        setFilteredItems={setFilteredItems}
      />
      <AddNew persons={persons} setPersons={setPersons} />
      <Number persons={persons} />
    </div>
  );
};
export default App;

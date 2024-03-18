import dataService from "../../../part2-notes-frontend/src/services/service";

import { useState } from "react";
const AddNew = ({ setPersons, persons }) => {
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    const objPerson = {
      name: newName,
      number: phone,
      important: Math.random() < 0.5,
      id: Math.random() * 10,
    };
    dataService.createData(objPerson).then((e) => {
      setPersons(e.data);
    });
    setNewName("");
  };

  const nameInputHandler = (e) => {
    if (persons.find((element) => element.name === e.target.value)) {
      alert(`${e.target.value} is already added to phonebook`);
    } else {
      setNewName(e.target.value);
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <h1>Add New</h1>
      <form onSubmit={formHandler}>
        <div>
          name: <input value={newName} onChange={nameInputHandler} />
        </div>
        <div>
          number: <input value={phone} onChange={phoneHandler} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
export default AddNew;

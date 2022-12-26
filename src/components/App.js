import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addTaskHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeTaskHandler = (id) => {
    const newTaskList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newTaskList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddTask addTaskHandler={addTaskHandler} />
      <TaskList contacts={contacts} getContactId={removeTaskHandler} />
    </div>
  );
}

export default App;

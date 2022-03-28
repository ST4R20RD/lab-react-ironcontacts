// src/App.js
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsList, setContactList] = useState(contacts.splice(0, 5));

  function handleAddRandom() {
    const randomContact = contacts[Math.floor(Math.random() * (contacts.length))]
    setContactList([randomContact, ...contactsList])
  }

  function sortByName() {
    const currContact = [...contactsList]
    currContact.sort((a, b) => {
      if(a.name > b.name) return 1
      if(a.name < b.name) return -1
    })
    setContactList(currContact)
  }

  function sortByPopularity() {
    const currContact = [...contactsList]
    currContact.sort((a, b) => {
     if(a.popularity > b.popularity) {return -1;}
     if(a.popularity < b.popularity) {return 1;}
    })
    setContactList(currContact)
  }

  function deleteContact(contactId) {
    setContactList((previousContacts) => {
      return previousContacts.filter((contact) => {
        return contact.id !== contactId;
      })
    });
  }
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={handleAddRandom}>Add Random Contact </button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        {contactsList.map((currContact) => (
          <tbody>
            <tr key={contactsList.id}>
              <td>
                <img
                  src={currContact.pictureUrl}
                  alt="thepicture"
                  style={{ width: "6vw" }}
                />
              </td>
              <td> {currContact.name} </td>
              <td> {currContact.popularity.toFixed(2)} </td>
              <td> {currContact.wonOscar ? "🏆" : "" }</td>
              <td> {currContact.wonEmmy ? "🏆" : ""}</td>
              <td> <button onClick={() => {deleteContact(currContact.id)}}>Delete</button></td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;

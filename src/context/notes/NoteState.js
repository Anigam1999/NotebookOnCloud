import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // get all Notes
  const getNotes = async () => {
    // api call
    const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNGE5MWYyZWY1Mjg0ZmZhODEzNDI0In0sImlhdCI6MTY5MjcwNzU0OH0.YwxIMo0riwsb_2YcXCJiMv0u_bPGsUPLUmV588dG32o",
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNGE5MWYyZWY1Mjg0ZmZhODEzNDI0In0sImlhdCI6MTY5MjcwNzU0OH0.YwxIMo0riwsb_2YcXCJiMv0u_bPGsUPLUmV588dG32o",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json()
    console.log(json)

    console.log("adding a new note");
    const note = {
      _id: "64e51814dc25c5f80ffded1b06535",
      user: "64e4a91f2ef5284ffa813424",
      title: title,
      description: description,
      tag: tag,
      date: "2023-08-22T20:18:28.916Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNGE5MWYyZWY1Mjg0ZmZhODEzNDI0In0sImlhdCI6MTY5MjcwNzU0OH0.YwxIMo0riwsb_2YcXCJiMv0u_bPGsUPLUmV588dG32o",
      },
    });
    const json = response.json()
    console.log(json)
    console.log("deleting the note with id" + id);
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNGE5MWYyZWY1Mjg0ZmZhODEzNDI0In0sImlhdCI6MTY5MjcwNzU0OH0.YwxIMo0riwsb_2YcXCJiMv0u_bPGsUPLUmV588dG32o",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes)) 
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

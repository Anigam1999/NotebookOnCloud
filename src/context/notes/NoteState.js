import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=> {
    const notesInitial = [
        {
          "_id": "64e51801dc25c5f80ed1b063",
          "user": "64e4a91f2ef5284ffa813424",
          "title": "Morning",
          "description": "Wake up early",
          "tag": "personal",
          "date": "2023-08-22T20:18:09.246Z",
          "__v": 0
        },
        {
          "_id": "64e51814dc25c5f80ed1b065",
          "user": "64e4a91f2ef5284ffa813424",
          "title": "Night",
          "description": "Early to bed",
          "tag": "personal",
          "date": "2023-08-22T20:18:28.916Z",
          "__v": 0
        },
        {
          "_id": "64e51801dc25c5f80ed1b063",
          "user": "64e4a91f2ef5284ffa813424",
          "title": "Morning",
          "description": "Wake up early",
          "tag": "personal",
          "date": "2023-08-22T20:18:09.246Z",
          "__v": 0
        },
        {
          "_id": "64e51814dc25c5f80ed1b065",
          "user": "64e4a91f2ef5284ffa813424",
          "title": "Night",
          "description": "Early to bed",
          "tag": "personal",
          "date": "2023-08-22T20:18:28.916Z",
          "__v": 0
        },
        {
          "_id": "64e51801dc25c5f80ed1b063",
          "user": "64e4a91f2ef5284ffa813424",
          "title": "Morning",
          "description": "Wake up early",
          "tag": "personal",
          "date": "2023-08-22T20:18:09.246Z",
          "__v": 0
        },
        {
          "_id": "64e51814dc25c5f80ed1b065",
          "user": "64e4a91f2ef5284ffa813424",
          "title": "Night",
          "description": "Early to bed",
          "tag": "personal",
          "date": "2023-08-22T20:18:28.916Z",
          "__v": 0
        },
        {
          "_id": "64e51801dc25c5f80ed1b063",
          "user": "64e4a91f2ef5284ffa813424",
          "title": "Morning",
          "description": "Wake up early",
          "tag": "personal",
          "date": "2023-08-22T20:18:09.246Z",
          "__v": 0
        },
        {
          "_id": "64e51814dc25c5f80ed1b065",
          "user": "64e4a91f2ef5284ffa813424",
          "title": "Night",
          "description": "Early to bed",
          "tag": "personal",
          "date": "2023-08-22T20:18:28.916Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children} 
        </NoteContext.Provider>
    )
}

export default NoteState;
import React, { useState } from "react";
import Notes from "../../Pages/Notes/Notes";
import CreateNote from "../CreateNote/CreateNote";
import Header from "../Header/Header";
import "./AddNote.css";
import CHeader from "../CHeader/CHeader";

const AddNote = () => {
  const [addnote, setAddnote] = useState([]);
  const addNote = (note) => {
    // alert("I am clicked");
    setAddnote((prevData) => {
      return [...prevData, note];
    });

    console.log(note);
  };
  const onDelete = (id) => {
    setAddnote((oldData) =>
      oldData.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <div className="addNote">
      <CHeader heading="Notes" />
      <div className="create">
      <CreateNote passNote={addNote} />

      </div>
      <div className="parallax_N"></div>
      <div className="note_N">
        {addnote.map((val, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={val.title}
              subject={val.subject}
              deleteNote={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddNote;

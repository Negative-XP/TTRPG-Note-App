import { useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

function Notes() {

  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputType, setTypeText] = useState('General')
  const [inputTitle,setInputTitle] = useState("")


  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const typeHandler = (e) => {
    setTypeText(e.target.value)
  }

  const titleHandler = (e) => {
    setInputTitle(e.target.value)
  }


  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
        type: inputType,
        title: inputTitle,
      }
    ]);
    setInputTitle("")
    setInputText("");

  };


  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  //saving data to local storage
  setTimeout(() => {
        localStorage.setItem("Notes", JSON.stringify(notes));
  }, '500'); 



  return (
    <div>
       <h3>General Notes</h3>
    <div className="notes">
     
      {notes.filter(x => x.type === 'General').map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          type={note.type}
          deleteNote={deleteNote}
        />
      ))}
          <CreateNote
      titleHandler={titleHandler}
      inputTitle={inputTitle}
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
        typeHandler={typeHandler}
      /></div>
       <h3>Character Notes</h3>
      <div className="notes">
     
      {notes.filter(x => x.type === 'Character').map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          type={note.type}
          deleteNote={deleteNote}
        />
      ))}
          <CreateNote
      titleHandler={titleHandler}
      inputTitle={inputTitle}
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
        typeHandler={typeHandler}
      /></div>
       <h3>Location Notes</h3>
      <div className="notes">
     
      {notes.filter(x => x.type === 'Location').map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          type={note.type}
          deleteNote={deleteNote}
        />
      ))}
          <CreateNote
      titleHandler={titleHandler}
      inputTitle={inputTitle}
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
        typeHandler={typeHandler}
      /></div>
        <h3>Item Notes</h3>
      <div className="notes">
    
      {notes.filter(x => x.type === 'Item').map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          type={note.type}
          deleteNote={deleteNote}
        />
      ))}
          <CreateNote
      titleHandler={titleHandler}
      inputTitle={inputTitle}
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
        typeHandler={typeHandler}
      /></div>
      
  
    </div>
  );
}

export default Notes;

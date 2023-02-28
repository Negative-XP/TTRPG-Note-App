import { useState, useEffect, useCallback } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";
import { Collapse } from 'react-collapse';

function Notes() {

  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputType, setTypeText] = useState('General')
  const [inputTitle, setInputTitle] = useState("")
  const [isCharacterCollapseOpen, setIsCharacterCollapseOpen] = useState(false);
  const [isGeneralCollapseOpen, setIsGeneralCollapseOpen] = useState(false)
  const [isLocationCollapseOpen, setIsLocationCollapseOpen] = useState(false)
  const [isItemCollapseOpen, setIsItemCollapseOpen] = useState(false)



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







  const accessibilityIds = {
    checkbox: 'accessible-marker-example1',
    button: 'accessible-marker-example2'
  };


  const generalChange = useCallback(
    ({ target: { checked } }) => setIsGeneralCollapseOpen(checked),
    [setIsGeneralCollapseOpen]
  );

  const characterChange = useCallback(
    ({ target: { checked } }) => setIsCharacterCollapseOpen(checked),
    [setIsCharacterCollapseOpen]
  );

  const locationChange = useCallback(
    ({ target: { checked } }) => setIsLocationCollapseOpen(checked),
    [setIsLocationCollapseOpen]
  );

  const itemChange = useCallback(
    ({ target: { checked } }) => setIsItemCollapseOpen(checked),
    [setIsItemCollapseOpen]
  );

  return (
    <div>
      <CreateNote
        titleHandler={titleHandler}
        inputTitle={inputTitle}
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
        typeHandler={typeHandler}
      />
      <h3>General Notes</h3>

      <input
        className="input"
        type="checkbox"
        aria-controls={accessibilityIds.checkbox}
        checked={isGeneralCollapseOpen}
        onChange={generalChange} />

      <Collapse isOpened={isGeneralCollapseOpen}>
        <div id={accessibilityIds.checkbox} className="notes">
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
        </div>
      </Collapse>


      <h3>Character Notes</h3>
      <input
        className="input"
        type="checkbox"
        aria-controls={accessibilityIds.checkbox}
        checked={isCharacterCollapseOpen}
        onChange={characterChange} />

      <Collapse isOpened={isCharacterCollapseOpen}>
        <div id={accessibilityIds.checkbox} className="notes">
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
        </div>
      </Collapse>
      <h3>Location Notes</h3>
      <input
        className="input"
        type="checkbox"
        aria-controls={accessibilityIds.checkbox}
        checked={isLocationCollapseOpen}
        onChange={locationChange} />

      <Collapse isOpened={isLocationCollapseOpen}>
        <div id={accessibilityIds.checkbox} className="notes">
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
        </div>
      </Collapse>
      <h3>Item Notes</h3>
      <input
        className="input"
        type="checkbox"
        aria-controls={accessibilityIds.checkbox}
        checked={isItemCollapseOpen}
        onChange={itemChange} />

      <Collapse isOpened={isItemCollapseOpen}>
        <div id={accessibilityIds.checkbox} className="notes">
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
        </div>
      </Collapse>














    </div>
  );
}

export default Notes;

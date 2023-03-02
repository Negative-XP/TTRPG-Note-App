function CreateNote({
  textHandler,
  saveHandler,
  inputText,
  inputTitle,
  typeHandler,
  titleHandler,
}) {
  //character limit
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;
  return (
    <div className="note saveNote" style={{ background: "rgba(255, 255, 255, 0)" }}>
     
      <textarea
        className="Title"
        value={inputTitle}
        maxLength="20"
        cols="10"
        rows="1"
        placeholder="Title..."
        onChange={titleHandler}
      ></textarea>

      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength="100"
      ></textarea>

      <div className="note__footer">
        <select className='type' onChange={typeHandler} type="select">
          <option value={"General"}>General</option>
          <option value={"Character"}> Character</option>
          <option value={"Location"}> Location</option>
          <option value={"Item"}> Item</option>
        </select>

        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>

      <span className="char__progress" variant="determinate" value={charLeft} />
    </div>
  );
}

export default CreateNote;

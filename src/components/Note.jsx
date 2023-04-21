import React from "react";
import "./Header.css";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
const Note = (props) => {
  const deleteNote = () => {
    props.deleteNote(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content} </p>
        <DeleteForeverRoundedIcon className="DeleteNote" onClick={deleteNote} />
      </div>
    </>
  );
};
export default Note;

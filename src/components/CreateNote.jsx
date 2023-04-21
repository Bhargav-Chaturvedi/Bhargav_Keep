import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Header.css";
import AddCommentIcon from "@mui/icons-material/AddComment";

function CNote(props) {
  const [expand, setexpand] = useState(false);
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  const InputEvent = (event) => {
    // const value=event.target.value;
    // const name=event.target.name;
    const { name, value } = event.target; //object destructuring
    setnote((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
    console.log(note);
  };
  const addEvent = () => {
    props.passNote(note);
    setnote({
      title: "",
      content: ""
    });
  };
  const expandIt = () => {
    setexpand(true);
  };
  const backNormal = () => {
    setexpand(false);
  };
  return (
    <>
      <div className="main_note" onDoubleClick={backNormal}>
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Write Title"
            onClick={expandIt}
          />

          {expand ? (
            <textarea
              rows=""
              column=""
              name="content"
              value={note.content}
              onChange={InputEvent}
              placeholder="Write note..."
            ></textarea>
          ) : null}
          {expand ? (
            <Button className="Button" variant="contained" onClick={addEvent}>
              <AddCommentIcon />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
}
export default CNote;

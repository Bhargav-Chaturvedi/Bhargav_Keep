import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CNote from "./components/CreateNote";
import Note from "./components/Note";
import "./styles.css";
const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert('Clicked');
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };
  const onDelete = (id) => {
    setAddItem((prevData) =>
      prevData.filter((curData, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteNote={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
};
export default App;

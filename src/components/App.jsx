import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes,setNotes]=useState([]);
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function delNote(noteId){
    setNotes(prevNotes=>{
      return notes.filter((element,index)=>{
        return index!==noteId;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((noteItem,index)=>{
        return(
        <Notes key={index} id={index} title={noteItem.heading} content={noteItem.content} onDone={delNote}/>)
      })}
      <Footer />
    </div>
  );
}

export default App;

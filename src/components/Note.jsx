import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
function Notes(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{
        props.onDone(props.id);
      }}> <DeleteIcon /> </button>
    </div>
  );
}

export default Notes;
import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note,setNote]=useState({heading:"",content:""});
  const [active,setActive]=useState(false);
  function handleChange(event)
  {
    const newItem=event.target.value;
    const element=event.target.name;
    setNote((prevValue)=>{
      return{
        ...prevValue,
        [element]:newItem
      }
    })
  }
  function addItems(event)
  {
      props.addNote(note);
      setNote({
        heading:"",
        content:""
      });
    event.preventDefault();

  }
  function handleActive()
  {
    setActive(true);
  }
  return (
    <div>
      <form className="create-note">
        {active&&<input onChange={handleChange} name="heading" placeholder="Title" value={note.heading}/>}
        <textarea onChange={handleChange} onClick={handleActive} name="content" placeholder="Take a note..." rows={active?"3":"1"} value={note.content} />
        <Zoom in={active}>
        <Fab onClick={addItems}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

import { ChangeEvent, useState } from 'react';

type inputProps = {
  addNote(note:string): void;
}

const Todo = ({addNote}:inputProps)=> {
  const [note,setNote] = useState("");
  const handleUpdate = (e:ChangeEvent<HTMLInputElement>)=>{
    setNote(e.target.value)
  }
  const handleAdd = ()=>{
    addNote(note);
    setNote("")
  }
  return (
    <div>
      <input onChange={handleUpdate} value={note} type="text" name="note" placeholder='note' />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Todo


import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Todo from './components/Todo';
import { addNote } from './Redux/action';
import { noteType } from './Redux/reducer';

function App() {
  const notes = useSelector<noteType,noteType["notes"]>((state)=>state.notes);
  const dispatch = useDispatch();

  const onAddNote = (note:string)=>{
    dispatch(addNote(note))
  }
  return (
    <div className="App">
    <Todo addNote={onAddNote}/>
    <hr />
    <ul>
      {notes.map((el)=><li key={el}>{el}</li>)}
    </ul>
    </div>
  );
}

export default App;

import './App.css';
import Tabs from './components/Tabs';

function App() {
  const data = [
    {title:"One",desc:"one!"},
    {title:"Two",desc:"two!"},
    {title:"Three",desc:"three!"},
    {title:"Four",desc:"four!"},
  ]
  return (
    <div className="App">
    <Tabs data={data}/>
    </div>
  );
}

export default App;

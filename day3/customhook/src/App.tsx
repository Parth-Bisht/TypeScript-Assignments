
import './App.css';
import useTimeout from './hooks/UseTimeout';

function App() {
  const ready = useTimeout(5000);

  return (
    <div className="App">
      {ready?<div>I am ready</div>:<div>Waiting for timer</div>}
    </div>
  );
}

export default App;


import './App.css';
import useFetch from './hooks/UseFetch';
import useTimeout from './hooks/UseTimeout';

const URL = `https://api.github.com/search/users?q=Parth-Bisht`;


function App() {
  const ready = useTimeout(5000);
  const {loading,data,error} = useFetch(URL)

  return (
    <div className="App">
      {ready?<div>I am ready</div>:<div>Waiting for timer</div>}
      { loading? <div>Loading....</div> : error? <div>Something went wrong</div> : data.map((user)=>{
          return <div key={user.id}>
            <h3>{user.login}</h3>
            <img style={{borderRadius:"50%"}} src={user.avatar_url} alt="" />
          </div>
        })}
    </div>
  );
}

export default App;

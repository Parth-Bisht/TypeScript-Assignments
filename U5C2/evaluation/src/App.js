import { useState} from "react";
import {FaEye} from "react-icons/fa";
import './App.css';
import Image from "./components/Image";
import InputBox from './components/InputBox';
import Pagination from "./components/Pagination";

function App() {
  const [t,setT] = useState("password")
  const changeType = ()=>{
      setT(t==="password"?"text":"password")
  }
 
  return (
    <div className="App">
     <InputBox type={t} size="sm" variant="filled" rightLogo={<FaEye/>} onClick={changeType}/>
     <Image src="https://avatars.githubusercontent.com/u/99276868?s=400&u=38145302282d1b3863252d99e3bf2e92fbc74049&v=4" alt="Avatar" borderRadius={400} width={90} height={90}/>
     <Pagination total={20} selected={5} />
    </div>
  );
}

export default App;

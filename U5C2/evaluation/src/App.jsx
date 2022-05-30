import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import { useState } from "react";
import {FaEye} from "react-icons/fa";

function App() {
  const [t,setT] = useState("password")
  const changeType = ()=>{
      setT(t==="password"?"text":"password")
  }
  return (
    <div data-testid="main-cont" className="container">
      <Input type={t} size="sm" variant="outline" rightLogo={<FaEye/>} rightLogoOnClick={changeType}/>

      <Image  src="https://avatars.githubusercontent.com/u/99276868?s=400&u=38145302282d1b3863252d99e3bf2e92fbc74049&v=4" alt="Avatar" borderRadius={200} width={200} height={200}/>

      <Pagination total={20} selected={5} />
    </div>
  );
}

export default App;

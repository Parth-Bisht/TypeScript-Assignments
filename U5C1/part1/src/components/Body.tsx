import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

function Body() {
  let [data,setData] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:8080/products`)
    .then(({data})=>setData(data))
  },[])
  return (
    <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(2,400px)",gap:"10px",padding:"30px"}}>
      {/* Iterate over data and show `Card` here */}
      {data.map((el:any)=>{
        return <Card key={el.id} d={el} />
      })}
    </div>
  );
}

export { Body };

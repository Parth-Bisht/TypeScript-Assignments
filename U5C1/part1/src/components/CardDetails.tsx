import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type single = {
  product_name?:string;
  image?:string;
  price?:number;
  category?:string;
}

function CardDetails() {
  const {id} = useParams();
  const [single,setSingle] = useState<single>({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/products?id=${id}`)
    .then(({data})=>{
      setSingle(data[0])
    });
    
  },[id])
  return (
    <div className="product" style={{display:"flex",flexDirection:"column"}}>
      <span>
        <h4 className="detailsTitle">
          {single.product_name}
        </h4>
      </span>
      <img className="detailsImage" src={single.image} alt="" style={{width:"40%"}} />
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">Price: ${single.price}</span>
      <span className="detailsPrice">{single.category}</span>
      <div>
        <h5>Reviews:</h5>
        {/* Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
        */}
      </div>
    </div>
  );
}
export { CardDetails };

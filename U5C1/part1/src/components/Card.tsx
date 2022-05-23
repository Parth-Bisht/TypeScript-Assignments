import { Link } from "react-router-dom";

function Card({d}:{d:any}) {
  return (
    <div className="item" style={{display:"flex",flexDirection: "column",width:"100%"}}>
      <img src={d.image} className="productImage" style={{width:"100%"}} />
      <span>
        <Link className="productLink" to={`/${d.id}`}>
          {d.product_name}
        </Link>
      </span>
      <span className="productCategory">{d.category}</span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">${d.price}</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings: {d.rating} </span>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      
      {/* <div className="itemInCart">Item Already in cart</div> 
       OR */}
      <button className="productAddtoCart">
        Add to cart
      </button>
     
    </div>
  );
}

export { Card };

import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ total, selected }) => {
  const [select,setSelect] = useState(selected)
  const pages = new Array(total).fill(0);
  return (
    <div className="pageContainer" style={{ display: "flex" }}>
      <div onClick={()=>setSelect(select-1)} className="box1">
        Prev
      </div>
      {pages.map((el, ind) => {
        return (
          <div
            className={`box1 ${select - 1 === ind ? "selected" : "box1"}`}
            key={ind}
          >
            {ind + 1}
          </div>
        );
      })}
      <div onClick={()=>setSelect(select+1)} className="box1">
        next
      </div>
    </div>
  );
};

export default Pagination;

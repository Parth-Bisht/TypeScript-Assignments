import React from 'react';
import './InputBox.css'

const Input = ({type,size,variant,rightLogo,onClick}) => {
  return (
    <div className="inputContainer">
      <input type={type} className={`box ${size || "md"} ${variant || "outline"}`} />
      <button onClick={onClick}>{rightLogo}</button>
    </div>
  )
}

export default Input

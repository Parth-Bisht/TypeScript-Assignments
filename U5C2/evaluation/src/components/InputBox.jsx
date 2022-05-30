import React from 'react';
import './InputBox.css'

const InputBox = ({type,size,variant,rightLogo,onClick}) => {
  return (
    <div>
      <input type={type} className={`box ${size || "md"} ${variant || "outline"}`} />
      <button onClick={onClick}>{rightLogo}</button>
    </div>
  )
}

export default InputBox

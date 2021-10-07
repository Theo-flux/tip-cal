import React from 'react';
import "./Tipbutton.css"

export default function Tipbutton({value}){
  return(
    <button className="tip-button">{value}%</button>
  )
}

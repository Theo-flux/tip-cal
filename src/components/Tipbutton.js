import React,{useContext} from 'react';
import "./Tipbutton.css"
import {Context} from "../Context"

export default function Tipbutton({value}){
  const {handleTipCal} = useContext(Context)

  return(
    <button onClick={() => handleTipCal(value)} className="tip-button">{value}%</button>
  )
}

import React, {useContext} from 'react';
import "./Result.css"
import {Context} from "../Context"

export default function Result(){
  const {totalTip,tipPerPerson,reset} = useContext(Context)

  return(
    <div className="result-board">
      <p>Tip Amount<small>/ person</small></p>
      <h1>${totalTip}</h1>
      <p>Total<small>/ person</small></p>
      <h1>${tipPerPerson}</h1>
      <button onClick={()=>reset()}>RESET</button>
    </div>
  )
}

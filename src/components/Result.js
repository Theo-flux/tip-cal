import React from 'react';
import "./Result.css"

export default function Result(){
  return(
    <div className="result-board">
      <p>Tip Amount<small>/ person</small></p>
      <h1>0</h1>
      <p>Tip<small>/ person</small></p>
      <h1>0</h1>
      <button>RESET</button>
    </div>
  )
}

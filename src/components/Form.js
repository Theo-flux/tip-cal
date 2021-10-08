import React from "react"
import "./Form.css"

export default function Form({icon, label, name, inputValue ,inputFunc}){
  return(
    <div className="form">
      <label>{label}</label>
      <div>
        <i className= {icon}></i>
        <input
          name={name}
          value={inputValue}
          onChange={inputFunc}
          placeholder= "0"
        />
      </div>
    </div>
  )
}

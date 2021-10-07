import React from "react"
import "./Form.css"

export default function Form({icon, label}){
  return(
    <div className="form">
      <label>{label}</label>
      <div>
        <i className= {icon}></i>
        <input placeholder= "0"/>
      </div>
    </div>
  )
}

import React from 'react'
import './Calculator.css'
import Form from "./Form"
import Tip from "./Tip"
import Result from "./Result"

export default function Calculator(){
  return(
    <div className="calc">
      <div>
        <div>
        <Form icon="ri-money-dollar-circle-line" label="Bills"/>
        <Tip />
        <Form icon="ri-account-circle-line" label="Number of People"/>
        </div>
        
        <div>
        <Result />
        </div>
      </div>
    </div>
  )
}

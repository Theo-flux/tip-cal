import React, {useContext} from 'react'
import './Calculator.css'
import Form from "./Form"
import Tip from "./Tip"
import Result from "./Result"
import {Context} from "../Context"

export default function Calculator(){
  const {val, handleInputChange} = useContext(Context)

  return(
    <div className="calc">
      <div>

        <div>
        <Form
          name="bills"
          inputValue={val.bills}
          icon="ri-money-dollar-circle-line"
          label="Bills"
          inputFunc = {handleInputChange}
        />
        <Tip />
        <Form
          name="people"
          inputValue={val.people}
          icon="ri-account-circle-line"
          label="Number of People"
          inputFunc = {handleInputChange}
        />
        </div>

        <div>
        <Result />
        </div>

      </div>
    </div>
  )
}

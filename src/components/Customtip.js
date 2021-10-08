import React,{useContext} from 'react';
import './Customtip.css'
import {Context} from '../Context'

export default function Customtip(){
  const {handleCustomTip, customtip} = useContext(Context)

  return(
    <input
      name="customtip"
      value={customtip}
      onChange={handleCustomTip}
      placeholder="custom"
    />
  )
}

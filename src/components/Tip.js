import React from 'react';
import Tipbutton from "./Tipbutton"
import "./Tip.css"
import Customtip from "./Customtip"

export default function Tip(){
  return(
    <div className="tip">
      <p><small>Select Tip %</small></p>

      <div>
        <Tipbutton value="5"/>
        <Tipbutton value="10"/>
        <Tipbutton value="15"/>
        <Tipbutton value="25"/>
        <Tipbutton value="50"/>
        <Customtip/>
      </div>
    </div>
  )
}

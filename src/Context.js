import React,{useState, useEffect} from 'react';

const Context = React.createContext()

function ContextProvider({children}){

  const [val, setVal] = useState({
    bills:"",
    people:1
  })
  const [tip ,setTip] = useState("0")
  const [customtip ,setCustomTip] = useState("")
  const [totalTip, setTotaltip] = useState("0")
  const [tipPerPerson, settipPerPerson] = useState("0")

  function handleTipCal(val){
    setTip(val)
  }
  // console.log(customtip)

  function handleInputChange(event){
    const {name, value} = event.target
    setVal({...val, [name]:value})
  }

  function handleCustomTip(event){
    const {value} = event.target
    setCustomTip(value)
  }

  function reset() {
    setTip("0")
    setCustomTip("")
    setTotaltip("0")
    settipPerPerson("0")
    setVal({bills:"",people:1})
    console.log("reset button!")
  }

  useEffect(() => {
    setTotaltip(parseFloat(tip*val.bills*0.01).toFixed(2))
  },[tip, val.bills])

  useEffect(() => {
    setTotaltip(parseFloat(customtip*val.bills*0.01).toFixed(2))
  },[customtip,val.bills])

  useEffect(() =>{
    settipPerPerson(parseFloat(totalTip*val.people).toFixed(2))
  },[totalTip,val.people])


  return(
    <Context.Provider value={{
      val,
      handleInputChange,
      handleTipCal,
      totalTip,
      handleCustomTip,
      tipPerPerson,
      reset
    }}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}

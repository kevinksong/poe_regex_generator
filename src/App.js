import React from 'react';
import './styles.css';
import Modifiers from "./components/Modifiers"
import MapMods from "./MapMods"
import Header from "./components/Header"




export default function App() {

  const [mods,setMods]=React.useState(MapMods.data)

  const modElements = mods.map(mod => (
    <Modifiers key={mod.id} value={mod.value} selected={mod.selected} handleClick={()=>handleClick(mod.id)}/>
  ))

  

  const showRegex= mods.filter(mod=>mod.selected).map(elem=>elem.regex).join("|")
  
  function handleClick(id){
    setMods(oldMods=>oldMods.map(mod=>{
      return mod.id === id? {...mod, selected: !mod.selected} :
      mod
    }))
  }

  return (
    <div className="container">
      <Header/>
      {showRegex}
      {modElements}
    </div>
  )
}


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

  
  const anySelected=mods.filter(mod=>mod.selected);
  const showRegex= anySelected.map(elem=>elem.regex).join("|")

  function handleClick(id){
    setMods(oldMods=>oldMods.map(mod=>{
      return mod.id === id? {...mod, selected: !mod.selected} :
      mod
    }))
  }

  return (
    <div className="container">
      <Header/>
      {anySelected.length==0?"Click on the mods which you wish to filter:":`"${showRegex}"`}
      {modElements}
    </div>
  )
}


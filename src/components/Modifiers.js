import React from 'react'
import MapMods from "../MapMods.js"



export default function Modifiers(props){
    
    const styles = {
        backgroundColor: props.selected? "green" : "white"
    }

    return(
        <div
            className="modlist"
            style={styles}
            onClick={props.handleClick}
        > 
            <h2 className="modlist--value" >{props.value}</h2>
        </div>
    )
}

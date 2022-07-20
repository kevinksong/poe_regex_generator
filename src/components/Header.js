import React from 'react'

export default function Header(props){

    const [generated, setGenerated]=React.useState(props)
    
    React.useEffect(function(){
        setGenerated(props)
    },generated)

    return(
        <div>{generated.selected && <h1>{generated.regex}</h1>}</div>
    )
}
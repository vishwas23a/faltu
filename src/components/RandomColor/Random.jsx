import React, { useState } from 'react'
import './Random.css'

function Random() {
    const[changeColor,setChangeColor]=useState("#ffffff")
    const hex="0123456789ABCDEF"
    let color='#';
    const change=()=>{
    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}

const changeit=()=>{
    
    let a=document.getElementById('back').style.backgroundColor=change();
    setChangeColor(a);
    
}

  return (
    <div id='back'>
        <div className="butt">
      
<button onClick={changeit} id='but'> Change Color</button>
</div>
<div className="hexcode">

    <h2>{changeColor}</h2>
</div>
   
    </div>
  )
}

export default Random

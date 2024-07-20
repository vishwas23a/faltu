import React from 'react'
import './Acodian.css'
import { useState } from 'react'
import data from './data'
function Acodian() {
  const [selected, setSelected]=useState(null)
  function handleSingleSelection (getId){
  
    setSelected(getId === selected ? null:getId)

  }
  return (
    <div className='container'>

      <div className="box">

        {
          data && data.length>0 ?
          
          data.map((e)=>
          <div className='item'>
            <div onClick={()=>handleSingleSelection(e.id)} className="title">
              <h2>{e.question}</h2>            
              <span>+</span>
            </div>
            {
              selected === e.id ?
              <div className="ans"> {e.answer}</div>

              : null
            }

          </div>
          )
          : <div>Data not found</div>
        }
      </div>
    </div>
  )
}

export default Acodian

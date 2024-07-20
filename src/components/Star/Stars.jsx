import React, { useState } from 'react'
import{FaStar} from 'react-icons/fa'
import './Stars.css'
function Stars({noOfStars}) {
    const[rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
    function handleClick(getIndex){
        setRating(getIndex)
    }
    function handleMouseEnter(getIndex){
        setHover(getIndex)


    }
    function handleMouseLeave(getIndex){
        setHover(rating)

    }
  return (
    <div className='starback'>
        <div className="starr">
        {
      [...Array(noOfStars)].map((_,index)=>{
        index +=1
        return<FaStar
         key={index}className={index <= (hover||rating)?"active":"nonActive" }
         onClick={()=> handleClick(index)}
         onMouseMove={()=>handleMouseEnter(index)}
         onMouseLeave={()=>handleMouseLeave(index)}
         size={40}
        />
      })
         }
         </div> 
         <h2> The Rating is {rating} out of 10</h2>
                   </div>

         )
}

export default Stars

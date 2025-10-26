import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './style.css';~
function StarRating({noOfStars=5}){
    const [rating, setRating]= useState(0);
    const [hover, setHover]=useState(0);

    function handleClick(getCorrentIndex){
        setRating(getCorrentIndex);
        
    }
    function handleMouseEnter(getCorrentIndex){
        setHover(getCorrentIndex);

    }
    function handleMouseLeave( ){
        setHover(rating); 

    }
    return <div>
        {
            [...Array(noOfStars)].map((__dirname, index)=>{
                index=index+1;

                return<FaStar
                className={index<=(hover||rating)? 'active':'inactive'}
                key={index}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size={40}
                />
            })
        }   
    
    
     </div>
}

export default StarRating;
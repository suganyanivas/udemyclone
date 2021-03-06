import React from 'react'
import {useStateValue} from "./StateProvider"
import "./Wishlist.css";


function Wishlist({id,image,title,rating,price,hideButton}) {
    const [{ wishlist }, dispatch] = useStateValue();
    
   
    return (
       
            
        <div className="course__container">
           
              <img className="course__img" src={image} alt="" />
            <div className="course__info">
               <p className="course__title">{title}</p>
               <div className="course__rating">
               {Array(rating)
                    .fill()
                    .map((_, i) => 
                      (
                        <p>🌟</p>
                        
                        ))}
               </div>
               <p className="course__price">
                   <small>$</small>
                   <strong>{price}</strong>
               </p>
             
            </div>
            </div>
           
    )
}

export default Wishlist

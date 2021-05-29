import React from 'react'
import "./Checkoutcourse.css";
import {useStateValue} from "./StateProvider"


function Checkoutcourse({id,image,title,rating,price,hideButton}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="course__container">
              <img className="course__img" src={image} />
            <div className="course__info">
               <p className="course__title">{title}</p>
               <div className="course__rating">
               {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
               </div>
               <p className="course__price">
                   <small>$</small>
                   <strong>{price}</strong>
               </p>
               {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                    
                )}
            <button>save for later</button>
           <button>Move to wishlist</button>
            </div>
           
        </div>
    )
}

export default Checkoutcourse

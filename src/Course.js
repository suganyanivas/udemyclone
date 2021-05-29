import React from 'react'
import "./Course.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";


  

function Course({id,image,title,rating,price}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket=()=>{
    dispatch({
      type:"ADD_TO_BASKET",
        item:{
        id:id,
        image:image,
        title: title,
        rating:rating,
        price:price,
      },
    });
  };
  const addToWishList=()=>{
    dispatch({
      type:"ADD_WISHLIST",
      item:{
        id:id,
        image:image,
        title: title,
        rating:rating,
        price:price,
      },

    });
  };
    return (
        <div className="course">
            <Link to='https://www.udemy.com/course/the-complete-web-development-bootcamp/'>
            <img  src={image} alt="" />
            </Link>
      <div className="course__info">
        <p>{title}</p>
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
       
      </div>
      <button className="click__btn"  onClick={addToBasket}>Add to Basket</button>
      <button  className="click__btn red" onClick={addToWishList}>Add to Wishlist</button>
    </div>
    )
}

export default Course

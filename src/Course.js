import React from 'react'
import "./Course.css";

import { Link } from "react-router-dom";


  

function Course({id,image,title,rating,price}) {
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

    </div>
    )
}

export default Course

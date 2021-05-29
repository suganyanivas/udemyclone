
import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import Checkoutcourse from "./Checkoutcourse";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


import { getBasketTotal } from "./reducer";



function Payment() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        
            <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
                
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Course purchase details</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                       
                    </div>
                </div>
                 {/* Payment section - Review Items */}
                 <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <Checkoutcourse
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    
                </div>
                {/* Payment section - Payment method */}
                <div className='payment__section'>
                   
                       
                  
                    <button className='button' onClick={e => history.push('/orders')}>
                        
                   <strong> COMPLETE THE PAYMENT</strong> </button>
                   

                    
                   
                </div>
        </div>
        </div>
    )
}

export default Payment

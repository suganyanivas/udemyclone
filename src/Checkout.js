import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Checkoutcourse from "./Checkoutcourse";
import Wishlist from "./Wishlist";

function Checkout() {
  const [{ basket,wishlist }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
       <h1 className="checkout__cart">Shopping Cart</h1>
        <div>
         

          {basket.map(item => (
            <Checkoutcourse
              id={item.id}
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
            />
          ))}
          {wishlist.map(item => {
              <Wishlist
              id={item.id}
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
            />
          })

          }

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
      
    </div>
  );
}

export default Checkout;
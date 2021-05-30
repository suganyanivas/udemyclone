import React from 'react'
import './Orders.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


function Orders() {
    const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
           
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

<p>Paid successfully!!Happy Learning!
</p>
<Link to="/">
<img
          className="header__logo"
          src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
        /></Link>
</div>
  
    )
}

export default Orders

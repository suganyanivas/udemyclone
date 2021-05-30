
import React from "react";
import "./subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) =>
            (
<>
<h1 className="total">
Total ({basket.length} items): <strong>{value}</strong>
</h1>
</>

)}
decimalScale={2}
value={getBasketTotal(basket)} 
displayType={"text"}
thousandSeparator={true}
prefix={"$"}
            
            />
             <button onClick={e => history.push('/payment')}>Checkout</button>
        </div>
    )
}

export default Subtotal

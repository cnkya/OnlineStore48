import { useState } from 'react';
import './styles/quantity.css';

function Quantity(){
    const [quantity, setQuantity]=useState(1);

    function decrease(){
        let val = quantity - 1;
        if(val < 1) val = 1;

        console.log("btn clicked");
        setQuantity(val);
    }
    function increase(){
        let val = quantity + 1;
        console.log("btn clicked");
        setQuantity(val);
    }
    return(
        <div className="quantity">
            <button disabled={quantity ===1} onClick={decrease}>-</button>

            <label>{quantity}</label>

            <button onClick={increase}>+</button>

        </div>

    )
}
export default Quantity;
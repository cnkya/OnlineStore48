import { useState } from 'react';
import './styles/quantity.css';

function Quantity(props) {
    const [quantity, setQuantity] = useState(1);

    function decrease() {
        let val = quantity - 1;
        if (val < 1) val = 1;

        setQuantity(val);
        props.onChange(val);
    }
    function increase() {
        let val = quantity + 1;

        setQuantity(val);
        props.onChange(val);
    }
    return (
        <div className="quantity">
            <button disabled={quantity === 1} onClick={decrease}>-</button>

            <label>{quantity}</label>

            <button onClick={increase}>+</button>

        </div>

    )
}
export default Quantity;
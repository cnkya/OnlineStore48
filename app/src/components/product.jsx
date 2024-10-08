import { useContext, useState } from 'react';
import './styles/product.css';
import Quantity from './quantity';
import DataContext from '../state/dataContext';

function Product(props) {

    const [quantity, setQuantity,] = useState(1);

    let addProductToCart = useContext(DataContext).addProductToCart;


    function add() {

        // obj that contains all info + quantity

        let cartTotal = { ...props.info, quantity: quantity };

        addProductToCart(cartTotal); //call context fn addProductToCart
    }

    function handleQuantityChange(val) {
        setQuantity(val);
    }

    function getTotal() {
        let total = props.info.price * quantity;
        return total.toFixed(2);
    }
    return (
        <div className="product">
            <img src={"/images/" + props.info.image} alt="" />
            <h5>{props.info.title}</h5>

            <label className="total">${getTotal()}</label>
            <label>${props.info.price.toFixed(2)}</label>

            <Quantity onChange={handleQuantityChange}></Quantity>

            <button className="btn btn-sm btn-dark" onClick={add}> Add to<i class="fa-solid fa-cart-shopping"></i></button>
        </div>


    );
}

export default Product;
import { useContext } from 'react';
import './styles/cart.css';
import DataContext from '../state/dataContext';


function Cart() {


    const cart = useContext(DataContext).cart;

    function getTotal() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += (prod.price * prod.quantity);
        }
        return total.toFixed(2);
    }


    return (
        <div className="cart">

            <h1>Your cart!</h1>
            <div className='parent'>
                <section className='list'>
                    <h3>Items</h3>

                    {cart.map(prod =>
                        <div className='cart-prod'>
                            <img src={"/images/" + prod.image} alt="" />
                            <h5>{prod.title}</h5>
                            <label>{prod.price.toFixed(2)}</label>
                            <label>{prod.quantity}</label>
                            <label>total</label>
                            <button className='btn btn-sm btn-danger'>Delete</button>
                        </div>)}


                </section>

                <section className='menu'>
                    <h3>Total</h3>
                    <h3>${getTotal()}</h3>

                    <hr />
                    <button className='btn btn-sm btn-dark'>Proceed to Checkout</button>

                </section>
            </div>
        </div>
    );
}
export default Cart;
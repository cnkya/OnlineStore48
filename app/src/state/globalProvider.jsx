import DataContext from "./dataContext";
import { useState } from "react";
function GlobalProvider(props) {

    const [cart, setCart] = useState([])
    const [user, setUser] = useState({ name: "💗" + "Christina" + "💗" })

    function addProductToCart(product) {
        console.log('Global fn');

        var copy = [...cart];

        let found = false;
        for (let i = 0; i < copy.length; i++) {
            let prod = copy[i];

            if (prod._id === product._id) {
                prod.quantity += product.quantity;
                found = true;
            }
        }
        if (!found) {
            copy.push(product);
        }


        setCart(copy);
        //consolidate the cart


        //let updatedCart = [...cart];
        // updatedCart.push(product);
        //setCart(updatedCart);
        //console.log(updatedCart);

        // save to local storage
        //localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    function resetCart() {


    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            resetCart: resetCart,
        }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default GlobalProvider;
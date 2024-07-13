import { createContext } from "react";

/**
 * describe here the data that will be stored in the context
 * its just a  definition (interface)
 * no implementation on this file
 */
const DataContext = createContext({

    cart:[],
    user:{},

    addProductToCart: ()=>{},
    resetCart: ()=>{},
});

export default DataContext;
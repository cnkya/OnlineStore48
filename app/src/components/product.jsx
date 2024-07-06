import './styles/product.css';
import Quantity from './quantity';

function Product(props){
    
    function add(){
        console.log ("adding" + props.info.title);
    }
    return(
        <div className="product">
            <img src={"/images/"+ props.info.image} alt=""/>
            <h5>{props.info.title}</h5>

            <label className="total">${props.info.price.toFixed(2)}</label>

            <label>${props.info.price.toFixed(2)}</label>
            <Quantity></Quantity>
            
            <button onClick={add}>Add to Cart</button>
        </div>
        

    );
}

export default Product;
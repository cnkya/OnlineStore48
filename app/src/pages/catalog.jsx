import './styles/catalog.css';
import Product from '../components/product';


const categories = ["Adult", "Kid", "Women", "Men"]
const data = [
    {
        title: "Hoodie 1",
        price: 24.99,
        category: "Adult",
        image: "hoodie1.jpg",
        _id: "123ea",
    },
    {
        title: "Hoodie 2",
        price: 24.99,
        category: "Kid",
        image: "hoodie1.jpg",
        _id: "123eb",
    },
    {
        title: "Hoodie 3",
        price: 24.99,
        category: "Women",
        image: "hoodie1.jpg",
        _id: "123ec",
    },
    {
        title: "Hoodie 4",
        price: 24.99,
        category: "Men",
        image: "hoodie1.jpg",
        _id: "123ed",
    },
    
];
function Catalog(){
    return(
        <div className="catalog">
            <h1>Hoodies R US</h1>
            
        <div className="filters">
            {categories.map(cat => <button className="btn btn-sm btn-dark">{cat}</button>)}
        </div>    
            {data.map(prod => <Product info={prod} />)}
    
            
        </div>
    );
}

export default Catalog;
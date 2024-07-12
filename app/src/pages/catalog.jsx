import './styles/catalog.css';
import Product from '../components/product';


const categories = ["Adult", "Youth", "Women", "Men"]
const data = [
    {
        title: "Hoodie (Adult/Unisex)",
        price: 24.99,
        category: "Adult",
        image: "adult hoodie.jpg",
        _id: "123ea",
    },
    {
        title: "Hoodie (Youth) ",
        price: 24.99,
        category: "Kid",
        image: "kid hoodie.jpg",
        _id: "123eb",
    },
    {
        title: "Hoodie (Women)",
        price: 24.99,
        category: "Women",
        image: "hoodie1.jpg",
        _id: "123ec",
    },
    {
        title: "Hoodie (Men)",
        price: 24.99,
        category: "Men",
        image: "men green hoodie.jpg",
        _id: "123ed",
    },

];
function Catalog() {
    return (
        <div className="catalog page p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">
            <h1>Hoodies R US</h1>

            <div className="filters">
                {categories.map(cat => <button className="btn btn-sm btn-dark">{cat}</button>)}
            </div>
            {data.map(prod => <Product info={prod} />)}


        </div>
    );
}

export default Catalog;
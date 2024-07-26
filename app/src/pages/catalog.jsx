import './styles/catalog.css';
import Product from '../components/product';
import { useEffect, useState } from 'react';
import dataService from '../services/dataService';



function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    //does something when the component loads
    useEffect(function () {
        //console.log("Catalog loaded!");
        loadCatalog();
        loadCategories();
        //fetch data from the server
        // const prods = dataService.getProducts();
        //const cats = dataService.getCategories();

        //set the fetched data to our state variables
        //setProducts(prods);
        //setCategories(cats);
    }, [])

    async function loadCatalog() {

        let prods = await dataService.getProducts();
        setProducts(prods);
        console.log(prods);


    }

    async function loadCategories() {
        let cats = await dataService.getCategories();
        setCategories(cats);
        console.log(cats);

    }
    return (
        <div className="catalog page p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">
            <h1>Hoodies R US</h1>

            <div className="filters">
                {categories.map(cat => <button className="btn btn-sm btn-dark">{cat}</button>)}
            </div>
            {products.map(prod => <Product info={prod} />)}


        </div>
    );
}

export default Catalog;
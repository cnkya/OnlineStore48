import axios from "axios"
const categories = ["Adult/Unisex", "Kid", "Women", "Men"]
const data = [
    {
        title: "Unisex Adult Gray Hoodie",
        price: 24.99,
        category: "Adult",
        image: "unisexhoodie2.jpg",
        _id: "123ea",
    },
    {
        title: "Kids Light-Purple Hoodie ",
        price: 11.99,
        category: "Kid",
        image: "kid hoodie.jpg",
        _id: "123eb",
    },
    {
        title: "Kids Black -bruh.- Hoodie ",
        price: 11.99,
        category: "Kid",
        image: "kid hoodie2.jpg",
        _id: "123ex",
    },
    {
        title: "Kids Yellow -Keep Hustling- Hoodie ",
        price: 11.99,
        category: "Kid",
        image: "kidshoodie3.jpg",
        _id: "123eu",
    },
    {
        title: "Women's Purple-Oversized Hoodie",
        price: 24.99,
        category: "Women",
        image: "hoodie1.jpg",
        _id: "123ec",
    },
    {
        title: "Women's Pink Hoodie",
        price: 34.99,
        category: "Women",
        image: "women hoodie2.jpg",
        _id: "123ee",
    },
    {
        title: "Women's Gray Hoodie",
        price: 34.99,
        category: "Women",
        image: "women hoodie3.jpg",
        _id: "123ez",
    },
    
    {
        title: "Men's Dark Grey Hoodie",
        price: 24.99,
        category: "Men",
        image: "men hoodie4.jpg",
        _id: "123ed",
    },
    {
        title: "Men's Green-Oversized with Graphic Hoodie",
        price: 34.99,
        category: "Men",
        image: "men green hoodie.jpg",
        _id: "123em",
    },
    {
        title: "Men's Light Grey Hoodie",
        price: 19.99,
        category: "Men",
        image: "men hoodie3.jpg",
        _id: "123es",
    },
];





class DataService {
    async getProducts(){
        //return data;

        //fetch a way to call data from the backend or front end
        //axios
        let response = await axios.get("http://127.0.0.1:5000/api/products")
        return response.data;

    }

    async getCategories(){
        //return categories;
        let response = await axios.get("http://127.0.0.1:5000/api/categories")
        return response.data;

    }
}
export default new DataService();
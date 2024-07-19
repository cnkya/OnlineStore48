const categories = ["Adult", "Youth", "Women", "Men"]
const data = [
    {
        title: "Unisex Adult Hoodies",
        price: 24.99,
        category: "Adult",
        image: "adult hoodie.jpg",
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
        title: "Women's Purple-Oversized Hoodie",
        price: 24.99,
        category: "Women",
        image: "hoodie1.jpg",
        _id: "123ec",
    },
    {
        title: "Men's Green-Oversized with Graphic Hoodie",
        price: 34.99,
        category: "Men",
        image: "men green hoodie.jpg",
        _id: "123ed",
    },

];





class DataService {
    getProducts(){
        return data;

    }

    getCategories(){
        return categories;

    }
}
export default new DataService();
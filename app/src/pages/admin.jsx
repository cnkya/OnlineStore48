import './styles/admin.css';
import { useState } from 'react';

function Admin() {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        category: '',
        image: '',
    });

    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });



    function handleCoupon(e) {
        const text = e.target.value;// the value of the field
        const name = e.target.name;//what input field changed
        // create a copy
        let copy = { ...coupon };
        // modify the copy
        copy[name] = text;
        // set the copy back
        setCoupon(copy);
    }

    function handleProduct(e) {
        const text = e.target.value;// the value of the field
        const name = e.target.name;//what input field changed

        // create a copy
        let copy = { ...product };
        // modify the copy
        copy[name] = text;
        // set the copy back
        setProduct(copy);

    }

    function saveCoupon() {
        console.group(coupon);
    }
    function saveProduct() {
        console.group(product);
    }


    return (

        <div className="admin">
            <h1>Admin</h1>
            <div className='parent'>
                <section className='sec-prods'>
                    <h2>Products</h2>

                    <div className="form">

                        <div>
                            <label className="form-label">Title</label>
                            <input onBlur={handleProduct} name='title' type="text" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label">Price</label>
                            <input onBlur={handleProduct} name='price' type="text" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label">Category</label>
                            <input onBlur={handleProduct} name='category' type="text" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label">Image</label>
                            <input onBlur={handleProduct} name='image' type="text" className="form-control" />
                        </div>
                        <button onClick={saveProduct} className='btn btn-sm btn-dark'><i class="fa-solid fa-floppy-disk"></i> Save Coupon</button>

                    </div>
                </section>

                <section className='sec-coupons'>
                    <h2>Coupons</h2>

                    <div className="form">

                        <div>
                            <label className="form-label">Code</label>
                            <input onBlur={handleCoupon} name='code' type="text" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label">Discount</label>
                            <input onBlur={handleCoupon} name='discount' type="text" className="form-control" />
                        </div>
                        <button onClick={saveCoupon} className='btn btn-sm btn-dark'><i class="fa-solid fa-floppy-disk"></i> Save Coupon</button>

                    </div>

                </section>

            </div>

        </div >

    )


}
export default Admin
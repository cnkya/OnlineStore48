import './styles/admin.css';
import { useState } from 'react';

function Admin() {

    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });



    function handleCoupon(e) {
        const text = e.target.value;// the value of the field
        const name = e.target.name;//what input field changed

        coupon[name] = text;
        // create a copy
        let copy = { ...coupon };
        // modify the copy
        copy[name] = text;
        // set the copy back
        setCoupon(copy);
    }


    return (

        <div className="admin">
            <h1>Admin</h1>
            <div className='parent'>
                <section className='sec-prods'>
                    <h2>Products</h2>
                </section>

                <section className='sec-coupons'>
                    <h2>Coupons</h2>

                    <div className="form">

                        <div>
                            <label className="form-label">Code</label>
                            <input onChange={handleCoupon} name='code' type="text" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label">Discount</label>
                            <input onChange={handleCoupon} name='discount' type="text" className="form-control" />
                        </div>
                        <button className='btn btn-primary'>Save Coupon</button>

                    </div>

                </section>

            </div>

        </div >

    )


}
export default Admin
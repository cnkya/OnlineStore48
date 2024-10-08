import { useContext } from 'react';
import './styles/navbar.css';
import { Link } from "react-router-dom";
import DataContext from '../state/dataContext';





function Navbar() {

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;
    return (

        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand banner" to="/"> <img src="/images/jacketicon.png"></img> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-dark navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/catalog"><i class="fa-solid fa-shop"></i> Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/admin"> <i class="fa-solid fa-lock"></i>Admin</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contact"><i class="fa-solid fa-address-book"></i>Contact Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-light">{user.name}</button>
                        <Link className="btn btn-outline-light" to="/cart">{cart.length} 🛒</Link>


                    </form>
                </div>
            </div>
        </nav >
    );

}
export default Navbar;
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Catalog from './pages/catalog';
import About from './pages/about';
import Admin from './pages/admin';
import Contact from './pages/contact';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import GlobalProvider from './state/globalProvider';


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className='App'>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog></Catalog>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        
        
      
          <Footer></Footer>
        </div>   
    </BrowserRouter>  
    </GlobalProvider>

    
  );
}

export default App;

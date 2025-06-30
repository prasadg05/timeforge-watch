import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProductDetail from "./ProductDetails";
// import Basic from "./Basic";

import Header from './Components/Header'
import Contact from './Components/Contact'
import Aboutus from './Components/Aboutus'
import Services from './Components/Services'
import Home from './Components/Home'
import Teams from './Components/Teams'
import Men from './Components/Men'
import Women from './Components/Women'
import Kids from './Components/Kids'

import Stores from './Components/Stores'
import Brands from './Components/Brands'
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Men' element={<Men/>}/>
            <Route path='/Women' element={<Women/>}/>
            <Route path='/Kids' element={<Kids/>}/>
            
            <Route path='/Brands' element={<Brands/>}/>
            <Route path='/Stores' element={<Stores/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter> 

      {/* <Axiomst3/> */}
      {/* <BrowserRouter>
      <Basic/>
        <Routes>
          <Route path="/" element={<Basic />} />
          <Route path="/products/:productid" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
export default App;

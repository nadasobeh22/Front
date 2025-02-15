import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import AllProducts from './Components/AllProducts/AllProducts';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

const App = () => {
  return (
    <>
  

    <div>
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/cart" element={<Cart />} />
      <Route path="/AllProducts" element={<AllProducts />} />
      <Route path="/Login" element={<Login/>} /> 
      <Route path="/register" element={<Register />} />
    </Routes>
    </div>
    </>
  )
}

export default App

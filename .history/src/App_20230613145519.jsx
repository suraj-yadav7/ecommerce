import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import './App.scss';
import Header from './components/Header/Header';

function App() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/category/:id" element={<Category/>} />
        <Route exact path="/product/:id" element={<SingleProduct/>} />
    </Routes>
   </Router>
   <h3>e-Commerce webapp</h3>
  
   </>
  );
}

export default App;

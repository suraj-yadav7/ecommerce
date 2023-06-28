import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Footer/Newsletter/Newsletter';

function App() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/category/:id" element={<Category/>} />
        <Route exact path="/singleproduct/:id" element={<SingleProduct/>} />
    </Routes>
    <Newsletter/>
    <Footer />
   </Router>
   </>
  );
}

export default App;

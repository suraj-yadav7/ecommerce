import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import './App.scss';

function App() {
  return (
   <>
   <Router>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/category/:id" element={<Category/>} />
        <Route exact path="/" element={<Home/>} />

    </Routes>
   </Router>
   <h3>e-Commerce webapp</h3>
  
   </>
  );
}

export default App;

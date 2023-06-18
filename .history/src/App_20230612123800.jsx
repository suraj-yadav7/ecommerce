import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import './App.scss';

function App() {
  return (
   <>
   <Router>
    <Routes>
        <Route exact path="/" element={<Home/>} />

    </Routes>
   </Router>
   <h3>e-Commerce webapp</h3>
  
   </>
  );
}

export default App;

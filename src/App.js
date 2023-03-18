import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import AboutUs from './Pages/AboutUs';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <h1>Testing</h1>
      <Router>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favourites />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

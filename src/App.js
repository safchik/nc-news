import React from 'react';
import AllArticles from './components/AllArticles';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./components/Home";
import './App.css';
import Header from './components/Header';

function App() {
  const navigate = useNavigate();

  function navigateHome() {
    navigate("/");
  }

  return (
    <div className='App'>
      <div className="div1">
        <button id="HomeButton" onClick={navigateHome}>
          Home
        </button>
      </div>

      <div className="div2">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles />} />
      </Routes>


    </div>
  );
}

export default App;

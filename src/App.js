import './App.css';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AllArticles from './components/AllArticles';
import SingleArticle from './components/SingleArticle';
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Header from './components/Header';
import Nav from './components/Nav';
import Comments from './components/Comments';

function App() {
  const [user, setUser] = useState(undefined);
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
        <Nav user={user} setUser={setUser} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn user={user} setUser={setUser} />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/articles/:comment_id" element={<Comments />} />
      </Routes>


    </div>
  );
}

export default App;
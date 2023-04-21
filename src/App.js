import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllArticles from './components/AllArticles';
import SingleArticle from './components/SingleArticle';
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Header from './components/Header';
import Nav from './components/Nav';
import Comments from './components/Comments';
import { UserContext } from './contexts/User';
import UserList from './components/UserList';

function App() {
  const [user, setUser] = useState(undefined);

  return (
    <UserContext.Provider value={user}>
      <div className='App'>
        <div>
          <Header className="header" />

          <Nav user={user} setUser={setUser} />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<SignIn user={user} setUser={setUser} />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/articles/:comment_id" element={<Comments />} />
          <Route path="/allusers" element={<UserList setUser={setUser} />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
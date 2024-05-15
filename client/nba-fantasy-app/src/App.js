import'./styles.css'


import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path ="/" element={<Home/>}></Route>
          <Route path ="/search" element={<Search/>}></Route>
        </Routes>
      </div>
    </>
  )
};

export default App;

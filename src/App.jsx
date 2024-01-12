import React, { useState } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import SideCart from './components/SideCart/SideCart';

const App = () => {
  const handleReadingTime = (time) => {
    const previousReadingTime = JSON.parse(localStorage.getItem("watchTime"));
    console.log(previousReadingTime);
    // console.log(time);
  }

  return (
    <div>
      <Header></Header>
      <div className='main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center'>
        <div className='blog-container'>
          <Blogs handleReadingTime={handleReadingTime}></Blogs>
        </div>
        <div className='sideCart'>
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  );
};

export default App;
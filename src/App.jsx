import React, { useState } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import SideCart from './components/SideCart/SideCart';

const App = () => {
const [readTime , setReadTime] =useState('');

  const handleReadingTime = (time) => {
    const previousReadingTime = JSON.parse(localStorage.getItem
      ("watchTime"));
    // console.log(previousReadingTime);
    // console.log(time);
    if (previousReadingTime) {
       const sum = previousReadingTime + time;
       localStorage.setItem("watchTime" , sum);
       setReadTime(sum);

    }
    else{
        localStorage.setItem("watchTime" , time);
        setReadTime(time);
    }
  }

  return (
    <div>
      <Header></Header>
      <div className='main grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center'>
        <div className='blog-container'>
          <Blogs handleReadingTime={handleReadingTime}></Blogs>
        </div>
        <div className='sideCart'>
          <SideCart readTime={readTime}></SideCart>
        </div>
      </div>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import SideCart from './components/SideCart/SideCart';

const App = () => {
  const [mark , setMark] =useState('');
  const [readTime, setReadTime] = useState('');

  const handleReadingTime = (time) => {
    const previousReadingTime = JSON.parse(localStorage.getItem("watchTime"));
    // console.log(previousReadingTime);
    // console.log(time);
    if (previousReadingTime) {
      const sum = previousReadingTime + time;
      localStorage.setItem("watchTime", sum);
      setReadTime(sum);

    }
    else {
      localStorage.setItem("watchTime", time);
      setReadTime(time);
    }
  }

  const handleBookmark = (bookMark) => {
    const previousBookmark = localStorage.getItem('bookMarked');
    // console.log(previousBookmark);
    // console.log('marked');
    if(previousBookmark){
      const newBookmark = [previousBookmark , bookMark];
      // console.log(newBookmark);
      localStorage.setItem("bookMarked", newBookmark);
      setMark(newBookmark);
      
    }
    else{
       localStorage.setItem('bookMarked', bookMark);
       setMark(bookMark);
    }
  }


  return (
    <div>
      <Header></Header>
      <div className='main grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center '>
        <div className='blog-container'>
          <Blogs handleReadingTime={handleReadingTime} handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className='sideCart'>
          <SideCart readTime={readTime} mark={mark}></SideCart>
        </div>
      </div>
    </div>
  );
};

export default App;
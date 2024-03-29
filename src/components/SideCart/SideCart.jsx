import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';



const SideCart = ({readTime , markedBlog}) => {

const [ spentTime , setSpentTime] = useState(readTime);
// const [ showBlog , setShowBlog ] = useState(markedBlog);

useEffect(()=>{
     const getReadTimeFS = localStorage.getItem("watchTime");
     setSpentTime(getReadTimeFS);
    },[readTime]);

    

    for(const bookMark of markedBlog){
        localStorage.setItem("added" , bookMark);
        
    }

    return (
        <div className='box w-max h-max bg-slate-50 sticky top-0 my-5 border border-2 rounded-lg'>
            <div className='cart  my-5 mx-10 '>
            <div className="time-cart  text-3xl font-bold bg-blue-100 text-blue-600 py-5 px-20 border rounded-lg border-sky-300">
                <p>Spent time on read :  
                    <input className=' ms-2 bg-transparent' type='number' value={spentTime}/>
                </p>
            </div>
            <div className="bookmark h-full w-full px-5 py-5 bg-slate-100 my-10 border rounded-md">
                <h2 className=' text-3xl font-bold '> Bookmarked Blogs : </h2>
            </div>
            <div className="bookmark h-full w-full px-5 py-5 bg-slate-100 my-10 border rounded-md">
                <h2 className=' text-3xl font-bold '> {markedBlog.length} </h2>
            </div>
        </div>
        </div>
    );
};

export default SideCart;
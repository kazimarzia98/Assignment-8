import React from 'react';

const SideCart = () => {
    return (
        <div className='cart my-5 mx-10'>
            <div className="time-cart text-3xl font-bold bg-blue-100 text-blue-600 py-5 px-20 border rounded-lg border-sky-300">
                <h1>Spent time on read : </h1>
            </div>
            <div className="bookmark h-full w-full px-5 py-5 bg-slate-100 my-10 border rounded-md">
                <h2 className=' text-3xl font-bold '> Bookmarked Blogs : </h2>
                

 
            </div>
        </div>
    );
};

export default SideCart;
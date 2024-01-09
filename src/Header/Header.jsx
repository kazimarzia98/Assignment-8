import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='display flex justify-between my-5 mx-5'>
                <div>
                    <h1 className='text-3xl font-bold font-exo my-'>Knowledge Cafe</h1>
                </div>
                <div className=''>
                    <img className='w-16 h-16 rounded-full bg-contain' src="/src/assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="" />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;
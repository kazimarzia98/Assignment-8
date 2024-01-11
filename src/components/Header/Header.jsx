import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='display flex justify-between my-5 mx-5'>
                <div>
                    <h1 className='text-5xl font-bold my-4'>Knowledge Cafe</h1>
                </div>
                <div >
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img src="/src/assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;
import React from 'react';

const SingleBLog = ({ blog , handleReadingTime , handleBookmark}) => {
    // console.log(blog);

    return (
        <div>
            <div>
                <div className="blog-container my-5 mx-2 lg:ms-20 ">
                    <div className="bolg-poster ">
                        <img className='rounded-lg' src={blog.cover} alt="" />
                    </div>

                    <div className="blog-detail flex justify-between my-5 ">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="h-20 rounded-full">
                                    <img src={blog.person} />
                                </div>
                            </div>
                            <div className="blog-person-name text-2xl font-bold mx-4 py-2">
                                {blog.name}
                                <p className='text-sm font-normal text-slate-400'>{blog.date}</p>
                            </div>
                        </div>
                        <div className="blog-readingTime flex text-slate-600">
                             {blog.time} min read
                            <svg onClick={()=> handleBookmark(blog.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer hover:text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>

                        </div>
                    </div>

                    <div className="blog-title text-5xl font-bold pb-5 leading-snug">{blog.title}</div>
                    <p className='text-slate-400 hover:cursor-pointer '>#begginers #programming</p>

                    <div>
                        <button  onClick={()=> handleReadingTime(blog.time)} className='text-blue-600 py-5 underline underline-offset-2 hover:font-medium'>
                            Mark as read
                        </button>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default SingleBLog;
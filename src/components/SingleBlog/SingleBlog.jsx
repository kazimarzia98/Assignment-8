import React from 'react';

const SingleBLog = ({ blog }) => {
    console.log(blog);

    return (
        <div>
            <div>
                <div className="blog-container my-5 mx-5">
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
                        <div className="blog-readingTime ">
                            0 min read</div>
                    </div>

                    <div className="blog-title text-5xl font-bold pb-5 leading-snug">{blog.title}</div>
                    <p className='text-slate-400'>#begginers #programming</p>

                    <div>
                        <button className='text-blue-600 py-5 underline underline-offset-2 hover:font-medium'>
                            Mark as read
                            </button>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default SingleBLog;
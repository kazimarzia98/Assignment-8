import React, { useEffect, useState } from 'react';
import SingleBLog from '../SingleBlog/SingleBLog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/public/db.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div>
            {
                blogs.map((blog)=>
                    <SingleBLog
                    key={blog.id}
                    blog={blog}
                    ></SingleBLog>
                    // console.log(blog);
                )
            }
        </div>
    );




};

export default Blogs;
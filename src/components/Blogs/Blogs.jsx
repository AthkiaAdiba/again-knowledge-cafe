
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ handleAddBookmarks, handleAddReadingTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            {
                blogs.map(blog => <Blog
                    key={blog.id} blog={blog}
                    handleAddBookmarks={handleAddBookmarks}
                    handleAddReadingTime={handleAddReadingTime}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks: PropTypes.func.isRequired,
    handleAddReadingTime: PropTypes.func.isRequired
}

export default Blogs;
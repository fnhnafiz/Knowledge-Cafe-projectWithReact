import { useEffect } from "react";
import { useState } from "react";
import Blogpost from "../Blogpost/Blogpost";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-[70%] border p-5">
      {/* <Blogpost blog={blogs}></Blogpost> */}
      <div className="space-y-10">
        {blogs.map((blog) => (
          <Blogpost key={blog.id} blog={blog}></Blogpost>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

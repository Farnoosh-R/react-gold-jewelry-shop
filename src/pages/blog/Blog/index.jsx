import { useEffect, useState } from "react";

import BlogCard from "../../../components/blog/BlogCard";
import { getPosts } from "../../../services/blogService";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div id="blog" className="page">
      <div className="app-container">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center">
            <div class="text-[var(--color-secondary)]/40 tracking-[10px]">
              Zarchic Blog
            </div>
            <h1 className="text-[var(--color-secondary)]">مقالات</h1>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 place-items-center">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from 'react';
import { Link } from 'react-router-dom';
import posts, { BlogPost } from './content';


const Blog: React.FC = () => (
  <div className="p-4">
    {posts.map((post: BlogPost) => (
      <div key={post.slug} className="mb-4">
        <Link to={`/blog/${post.slug}`} className="text-black-1000">
          {post.title}
        </Link>
      </div>
    ))}
  </div>
);

export default Blog;

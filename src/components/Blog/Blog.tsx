import React from 'react';
import { Link } from 'react-router-dom';
import posts, { BlogPost } from './content';


const Blog: React.FC = () => (
  <div className="p-4">
    {posts.map((post: BlogPost) => (
      <div key={post.slug} className="mb-4">
        <Link to={`/blog/${post.slug}`} className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
          {post.title}
        </Link>
      </div>
    ))}
  </div>
);

export default Blog;

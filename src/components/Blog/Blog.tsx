import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import posts, { BlogPost } from './content';


const Blog: React.FC = () => (
  <div className="p-4">
    {posts.map((post: BlogPost) => (
      <div key={post.slug} className="mb-4">
        <Link to={`/blog/${post.slug}`} className="text-blue-500">
          {post.title}
        </Link>
        <ReactMarkdown className="text-gray-700">{post.content.substring(0, 100) + '...'}</ReactMarkdown>
      </div>
    ))}
  </div>
);

export default Blog;

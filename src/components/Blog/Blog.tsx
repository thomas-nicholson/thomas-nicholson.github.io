import React from "react";
import { Link } from "react-router-dom";
import posts, { BlogPost } from "./content";

const Blog: React.FC = () => (
  <div className="py-12 dark:bg-gray-900 dark:text-gray-100">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Blog
      </h1>
      <div className="space-y-4">
        {posts.map((post: BlogPost) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {post.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;

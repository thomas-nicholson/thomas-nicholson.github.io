import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import posts from "./content";

const Post: React.FC = () => {
  const params = useParams() as { slug: string };
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  return (
    <div className="min-h-screen py-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        {post ? (
          <div className="prose prose-lg dark:prose-invert">
            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
            <ReactMarkdown className="prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
              {post.content}
            </ReactMarkdown>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">Post not found</p>
        )}
      </div>
    </div>
  );
};

export default Post;

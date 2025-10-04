import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import posts from './content';

const Post: React.FC = () => {
  const params = useParams() as { slug: string };
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  return (
    <div className="max-w-4xl mx-auto p-8">
      {post ? (
        <div className="prose prose-lg dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          <ReactMarkdown className="prose dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">{post.content}</ReactMarkdown>
        </div>
      ) : (
        <p className="text-gray-900 dark:text-gray-100">Post not found</p>
      )}
    </div>
  );
};

export default Post;

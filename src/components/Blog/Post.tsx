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
        <div className="prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          <ReactMarkdown className="prose prose-headings:font-bold prose-a:text-blue-600">{post.content}</ReactMarkdown>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default Post;

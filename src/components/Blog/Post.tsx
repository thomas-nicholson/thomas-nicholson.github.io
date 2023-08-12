import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import posts from './content';

const Post: React.FC = () => {
  const params = useParams() as { slug: string };
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  return (
    <div className="p-4">
      {post ? (
        <>
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default Post;

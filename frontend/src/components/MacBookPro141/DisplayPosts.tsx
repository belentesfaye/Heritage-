import React, { useContext } from 'react';
import { MediaContext } from './MediaContext';

export const DisplayPosts: React.FC = () => {
  const { posts } = useContext(MediaContext);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          {post.type === 'link' ? (
            <a href={post.url}>{post.caption}</a>
          ) : (
            <div>
              <img src={post.url} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export {}; 

import React, { useContext } from 'react';
import { MediaContext } from './MediaContext';
import classes from './HeritageHub.module.css';

export const DisplayPosts: React.FC = () => {
    const { posts } = useContext(MediaContext);
  
    return (
      <>
        {posts.map(post => (
          <div key={post.id} className={classes.helpBox}>
            {post.type === 'link' ? (
              <a href={post.url} target="_blank" rel="noopener noreferrer">{post.caption}</a>
            ) : (
              <div>
                <img src={post.url} alt={post.caption} />
                <p>{post.caption}</p>
              </div>
            )}
          </div>
        ))}
      </>
    );
  };

export {}; 

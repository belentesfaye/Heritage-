import React, { useContext } from 'react';
import { MediaContext } from './MediaContext';
import classes from './HeritageHub.module.css';

export const DisplayPosts: React.FC = () => {
    const { posts } = useContext(MediaContext);

    return (
        <div className={classes.postBox}>
            {posts.map(post => (
                <div key={post.id} className={classes.communityPost1}>
                    {post.type === 'link' ? (
                        <a href={post.url} target="_blank" rel="noopener noreferrer">{post.caption}</a>
                    ) : (
                        <div>
                            <p>{post.caption}</p>
                            <img src={post.url} alt={post.caption} className={classes.postImage} />
                        </div>
                    )}
                    
                </div>
            ))}
        </div>
    );
};


export {};

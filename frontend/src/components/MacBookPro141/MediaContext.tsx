import React, { createContext, useState, ReactNode } from 'react';
import { MediaPost } from './types';

interface MediaContextType {
  posts: MediaPost[];
  addPost: (post: MediaPost) => void;
}

const defaultState: MediaContextType = {
  posts: [],
  addPost: () => {},
};

export const MediaContext = createContext<MediaContextType>(defaultState);

export const MediaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<MediaPost[]>([]);

  const addPost = (post: MediaPost) => {
    setPosts(prevPosts => [...prevPosts, post]);
  };

  return (
    <MediaContext.Provider value={{ posts, addPost }}>
      {children}
    </MediaContext.Provider>
  );
};

export {}; 

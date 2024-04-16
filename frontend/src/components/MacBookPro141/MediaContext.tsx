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
    const newPosts = [...posts, post]; // Create a new array by spreading the old one and adding the new post
    setPosts(newPosts); // Set the new array to state
    console.log(newPosts); // Log to see what's being set
  };

  return (
    <MediaContext.Provider value={{ posts, addPost }}>
      {children}
    </MediaContext.Provider>
  );
};

export {}; 

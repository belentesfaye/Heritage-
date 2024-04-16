import React, { useState, useContext } from 'react';
import { MediaContext } from './MediaContext';
import { MediaPost } from './types';

export const MediaUpload: React.FC = () => {
  const { addPost } = useContext(MediaContext);
  const [type, setType] = useState<'image' | 'video' | 'link'>('image');
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newPost: MediaPost = { id: Date.now().toString(), type, url, caption };
    addPost(newPost);
    setUrl('');
    setCaption('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={e => setType(e.target.value as 'image' | 'video' | 'link')}>
        <option value="image">Image</option>
        <option value="video">Video</option>
        <option value="link">Link</option>
      </select>
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" />
      <input type="text" value={caption} onChange={e => setCaption(e.target.value)} placeholder="Write a caption..." />
      <button type="submit">Post</button>
    </form>
  );
};

export {}; 

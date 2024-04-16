import React, { useState, useContext, useRef } from 'react';
import { MediaContext } from './MediaContext';
import { MediaPost } from './types';
import classes from './HeritageHub.module.css';

export const MediaUpload: React.FC = () => {
    const { addPost } = useContext(MediaContext);
    const [type, setType] = useState<'image' | 'video' | 'link'>('image');
    const [url, setUrl] = useState('');
    const [caption, setCaption] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newPost: MediaPost = { id: Date.now().toString(), type, url, caption };
        addPost(newPost);
        setUrl('');
        setCaption('');
    };

    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                setUrl(e.target?.result as string);
                setType('image');
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClickImageIcon = () => {
        fileInputRef.current?.click();
    };

    return (
        <div >
            {/* <form onSubmit={handleSubmit} className={classes.formInsideRectangle10}>
                <textarea
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                    placeholder="Write a message..."
                    className={classes.writeAMessage}
                />
                <div onClick={handleClickImageIcon} className={classes.image}>
                    <img src="assets/image.png" alt="Upload Image" />
                    <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileInput}
                        style={{ display: 'none' }}
                    />
                </div>
                <button type="submit" className={classes.submitPost}>Post</button>
            </form> */}
        </div>
    );
};
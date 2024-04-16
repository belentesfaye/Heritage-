import React, { memo } from 'react';
import type { FC } from 'react';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { MacBookPro141 } from './components/MacBookPro141/HeritageHub';
import SignInPage from './components/SignInPage';
import { MediaProvider } from './components/MacBookPro141/MediaContext';
import { DisplayPosts } from './components/MacBookPro141/DisplayPosts';
import { MediaUpload } from './components/MacBookPro141/MediaUpload';

interface Props {
  className?: string;
}

export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <MediaProvider> {/* Wrap everything in MediaProvider to manage media posts */}
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <MacBookPro141 />
        <SignInPage />
        <DisplayPosts /> {/* Component for displaying media posts */}
        <MediaUpload /> {/* Component for uploading media */}
        
      </div>
    </MediaProvider>
  );
});

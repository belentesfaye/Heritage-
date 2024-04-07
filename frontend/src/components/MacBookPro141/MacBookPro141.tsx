import React, { CSSProperties, memo, useState } from 'react';
import type { FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import resets from '../_resets.module.css';
import { Group1Icon } from './Group1Icon';
import classes from './MacBookPro141.module.css';


interface Props {
  className?: string;
}
/* @figmaId 1:3 */
export const MacBookPro141: FC<Props> = memo(function MacBookPro141(props = {}) {
  const [isInfoBoxVisible, setInfoBoxVisible] = useState(false);
  const toggleInfoBox = () => setInfoBoxVisible(!isInfoBoxVisible);
  const [isAboutVisible, setAboutVisible] = useState(false);
  const toggleAbout = () => setAboutVisible(!isAboutVisible);
  const [isSignInVisible, setSignInVisible] = useState(false);
  const toggleSignIn = () => setSignInVisible(!isSignInVisible);
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
        {isInfoBoxVisible && (
          <div className={classes.howItWorksResourcesHeritageWik}>
            <div className={classes.textBlock}>How it works</div>
            <div className={classes.textBlock2}>Resources</div>
            <div className={classes.textBlock3}>HeritageWiki</div>
          </div>
        )}
      <div className={classes.heritage}>Heritage </div>
      <div className={classes.about}>About</div>

      <div className={classes.frame1}>
        <div className={classes.frame2}>
          <div className={classes.search}></div>
        </div>
      </div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
  
      <div className={classes.learn}>Learn</div>
      <div className={classes.signIn}>Sign In</div>
      <div className={classes.signIn} onClick={toggleSignIn}></div>
      <div className={classes.help}>Help</div>
      <div className={classes.expandArrow2} onClick={toggleInfoBox}></div>
      <div className={classes.stories}>Stories </div>
      <div className={classes.cultures}>Cultures</div>
      <div className={classes.communityForm}>Community Form</div>
      <div className={classes.feedback}>Feedback</div>
      <div className={classes.fAQ}>FAQ</div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
      <div className={classes.instagramCircle}></div>
      <div className={classes.chichenItza}></div>
      <div className={classes.chichenItza2}></div>
      <div className={classes.historyRemix}>HistoryRemix</div>
      <div className={classes.xboxR}></div>
      <div className={classes.chat}></div>
      <div className={classes.linkedIn}></div>
      <div className={classes.expandArrow} onClick={toggleAbout}></div>
      {isInfoBoxVisible && (
          <div className={classes.howItWorksResourcesHeritageWik}>
            <div className={classes.textBlock}>How it works</div>
            <div className={classes.textBlock2}>Resources</div>
            <div className={classes.textBlock3}>HeritageWiki</div>
          </div>
        )}
      {isAboutVisible && (
          // Applying the .rectangle1 style to the info box
          <div className={classes.aboutBox}>
            <div className={classes.textBlock2}>Our History</div>
            <div className={classes.textBlock3}>Privacy</div>
          </div>
        )} 
      {isSignInVisible && (
          <div className={`${resets.clapyResets} ${classes.root}`}>
          <div className={classes.rectangle2}>
          <div className={classes.centerContent}>
          <div className={classes.line4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.rectangle3}></div>
          <div className={classes.rectangle6}></div>
          <div className={classes.passwordbox}></div>
          <div className={classes.username}>Username</div>
          <div className={classes.password}>Password</div>
          <div className={classes.signIn2}>Sign In</div>
          <div className={classes.signInGoogle}>Sign in Google</div>
          <div className={classes.resetPassword}>Reset Password</div>
          <div className={classes.google}></div>
          </div>
        </div>
        </div>
        )}
      </div>
  );
});


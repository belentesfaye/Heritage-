import React, { CSSProperties, memo, useState } from 'react';
import type { FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import resets from '../_resets.module.css';
import { Group1Icon } from './Group1Icon';
import classes from './HeritageHub.module.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { MediaProvider } from './MediaContext';
import { MediaUpload } from './MediaUpload';
import { DisplayPosts } from './DisplayPosts';
import HeritageQuestions from './HeritageQuestions';

interface Props {
  className?: string;
}
/* @figmaId 1:3 */
export const MacBookPro141: FC<Props> = memo(function MacBookPro141(props = {}) {
  const [isInfoBoxVisible, setInfoBoxVisible] = useState(false);
  const [isAboutVisible, setAboutVisible] = useState(false);
  const [isSignInVisible, setSignInVisible] = useState(false);
  const[isChatBoxVisible, setChatBoxVisible] = useState(false);
  const [isHelpVisible, setHelpVisible] = useState(false);
  const [isCommunityFormVisible, setCommunityFormVisible] = useState(false);
  const [isHeritgae, setHeritage] = useState(false);
  const [isCulture, setCulture] = useState(false);
  const [isStories, setStories] = useState(false);
  const [isFAQ, setFAQ] = useState(false);
  const [isCommunityVisible, setCommunityVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');
  const toggleCommunity = () => {
    setCommunityVisible(!isCommunityVisible);
  };
  
  const auth = getAuth();
  
  const handleSignUp = () => {
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setUser(userCredential.user);
              console.log('Account created and user signed in!');
          })
          .catch((error) => {
              setError(error.message);
              console.error('Error signing up:', error);
          });
  };
  
  const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setUser(userCredential.user);
              console.log('User signed in!');
          })
          .catch((error) => {
              setError(error.message);
              console.error('Error signing in:', error);
          });
  };

  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            console.log('Success', result);
            // Handle navigation or user session setup here
        }).catch((error) => {
            // Handle Errors here.
            console.error('Error during Google Sign In', error);
        });
};
  


  //if hertiage is clicked, close all other boxes
  const toggleHeritage = () => {
    setInfoBoxVisible(false);
    setAboutVisible(false);
    setSignInVisible(false);
    setChatBoxVisible(false);
    setHelpVisible(false);
    setCommunityFormVisible(false);
    setCulture(false);
    setHeritage(true);
    setStories(false);
    setFAQ(false);
  };

  const toggleInfoBox = () => {
    setInfoBoxVisible(true);
    setAboutVisible(false);
    setSignInVisible(false);
    setChatBoxVisible(false);
    setHelpVisible(false);
    setCommunityFormVisible(false);
    setCulture(false);
    setHeritage(false);
    setStories(false);
    setFAQ(false);
  };

  const toggleAbout = () => {
    setInfoBoxVisible(false);
    setAboutVisible(true);
    setSignInVisible(false);
    setChatBoxVisible(false);
    setHelpVisible(false);
    setCommunityFormVisible(false);
    setCulture(false);
    setHeritage(false);
    setStories(false);
    setFAQ(false);
  };

  const toggleSignIn = () => {
    setInfoBoxVisible(false);
    setAboutVisible(false);
    setSignInVisible(true);
    setChatBoxVisible(false);
    setHelpVisible(false);
    setCommunityFormVisible(false);
    setCulture(false);
    setHeritage(false);
    setStories(false);
    setFAQ(false);
  };

  const toggleChatBox = () => {
    setInfoBoxVisible(false);
    setAboutVisible(false);
    setSignInVisible(false);
    setChatBoxVisible(true);
    setHelpVisible(false);
    setCommunityFormVisible(false);
    setCulture(false);
    setHeritage(false);
    setStories(false);
    setFAQ(false);
  };

  const toggleHelp = () => {
    setInfoBoxVisible(false);
    setAboutVisible(false);
    setSignInVisible(false);
    setChatBoxVisible(false);
    setHelpVisible(true);
    setCommunityFormVisible(false);
    setCulture(false);
    setHeritage(false);
    setStories(false);
    setFAQ(false);
  };

  const toggleCommunityForm = () => {
    setInfoBoxVisible(false);
    setAboutVisible(false);
    setSignInVisible(false);
    setChatBoxVisible(false);
    setHelpVisible(false);
    setCommunityFormVisible(true);
    setCulture(false);
    setHeritage(false);
    setStories(false);
    setFAQ(false);
  };
  const toggleCulture = () => {
    setInfoBoxVisible(false);
    setAboutVisible(false);
    setSignInVisible(false);
    setChatBoxVisible(false);
    setHelpVisible(false);
    setCommunityFormVisible(false);
    setCulture(true);
    setHeritage(false);
    setStories(false);
    setFAQ(false);
  }
  const toggleStories = () => {
    setInfoBoxVisible(false);
    setAboutVisible(false);
    setSignInVisible(false);
    setChatBoxVisible(false);
    setHelpVisible(false);
    setCommunityFormVisible(false);
    setCulture(false);
    setHeritage(false);
    setStories(true);
    setFAQ(false);
  }
  const toggleFAQ = () => {
    setInfoBoxVisible(false);
    setAboutVisible(false);
    setSignInVisible(false);
    setChatBoxVisible(false);
    setHelpVisible(false);
    setCommunityFormVisible(false);
    setCulture(false);
    setHeritage(false);
    setStories(false);
    setFAQ(true);
  }
  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    handleSignIn(); // Assuming this function handles both sign-in and registration
};
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
        {isInfoBoxVisible && (
          <div className={classes.howItWorksResourcesHeritageWik}>
            <div className={classes.textBlock}>How it works</div>
            <div className={classes.textBlock2}>Resources</div>
            <div className={classes.textBlock3}>HeritageWiki</div>
          </div>
        )}
      <div className={classes.heritage} onClick={toggleHeritage}>Heritage </div>
      <div className={classes.about}>About</div>
      <div className={classes.userProfilePhoto}></div>

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
      <div className={classes.help} onClick={toggleHelp}>Help</div>
      <div className={classes.expandArrow2} onClick={toggleInfoBox}></div>
      <div className={classes.stories} onClick={toggleStories}>Stories </div>
      <div className={classes.cultures} onClick={toggleCulture}>Cultures</div>
      <div className={classes.communityForm} onClick={toggleCommunityForm}>Community Form</div>
      <div className={classes.feedback}>Feedback</div>
      <div className={classes.fAQ} onClick={toggleFAQ}>FAQ</div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
      <div className={classes.instagramCircle}></div>
      <div className={classes.chichenItza}></div>
      {/* <div className={classes.chichenItza2}></div> */}
      <div className={classes.historyRemix}>HistoryRemix</div>
      <div className={classes.xboxR}></div>
      <div className={classes.chat} onClick={toggleChatBox}></div>
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
      {/* {isSignInVisible && (
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
          <div className={classes.signInGoogle} onClick={signInWithGoogle}>Sign in with Google</div>
          <div className={classes.resetPassword}>Reset Password</div>
          <div className={classes.google}></div>
          </div>
        </div>
        </div>
        )} */}
{isSignInVisible && (
    <div className={`${resets.clapyResets} ${classes.root}`}>
        <form className={classes.formCenter} onSubmit={handleFormSubmit}> {/* Add form tag with onSubmit handler */}
            <div className={classes.rectangle2}>
                <div className={classes.centerContent}>
                    <div className={classes.line4}></div>
                    <div className={classes.rectangle5}></div>
                    <div className={classes.rectangle3}></div>
                    <div className={classes.rectangle6}></div>
                    
                    <div className={classes.rectangle3}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Username"
                            className={classes.usernameInput}
                        />
                    </div>
                    {/* <div className={classes.username}>Username</div> */}
                    
                    <div className={classes.passwordbox}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className={classes.passwordInput}
                        />
                    </div>
                    {/* <div className={classes.password}>Password</div> */}

                    <button type="submit" className={classes.signIn2}>Sign In</button>
                    <button type="button" className={classes.signInGoogle} onClick={signInWithGoogle}>Sign in with Google</button>
                    <div className={classes.resetPassword}>Reset Password</div>
                    
                    {error && <p className={`${classes.error} error`}>Error: {error}</p>}
                </div>
            </div>
        </form>
    </div>
)}


        {isChatBoxVisible && (
           <HeritageQuestions />)}
        {isHelpVisible && (
          <div className={classes.helpBox}>
           <div className={classes.howCanWeHelp}>How can we help?</div>
           <div className={classes.helpSerch}></div>
           <div className={classes.yourInfoBox}></div>
           <div className={classes.yourAccount}>Your Account</div>
           <div className={classes.reportBox}></div>
           <div className={classes.report}>Report</div>
           <div className={classes.faqBox}></div>
           <div className={classes.fAQ2}>FAQ</div>
           <div className={classes.contactBox}></div>
           <div className={classes.contactUs}>Contact Us</div>
           <div className={classes.search2}></div>
            </div>)}
            {isCommunityFormVisible && (
    <div>
        <MediaProvider>
            <MediaUpload />
            <DisplayPosts />
        </MediaProvider>
    </div>
)}

        {isCulture && (
          <div className={classes.helpBox}>
          <div className={classes.culturesTitle }> Culture </div>
          <div className={classes.picture}></div>
          <div className={classes.picture2}></div>
          <div className={classes.picture3}></div>
          <div className={classes.picture4}></div>
          <div className={classes.picture5}></div>
          <div className={classes.picture6}></div>
          </div>
        )}
        {isStories && (
          <div className={classes.helpBox}>
          <div className={classes.december222023}>December 22, 2023</div>
          <div className={classes.echoesOfTheSilkRoad}>Echoes of the Silk Road</div>
          <div className={classes.picture7}></div>
          <div className={classes.picture8}></div>
          <div className={classes.theLighthouseKeeperSLegacy}>The Lighthouse Keeper&#39;s Legacy</div>
          <div className={classes.july122024}>July 12, 2024</div>
          <div className={classes.thisStoryUnveilsTheLegacyOfCou}>
            {' '}
            This story unveils the legacy of courage and resilience, weaving through storms and wars, as told by the current
            keeper, Emily Allen, who uncovers her ancestors&#39; secrets and their undying connection to the sea.
          </div>
          <div className={classes.tracingTheirLineageBackToAMerc}>
            Tracing their lineage back to a merchant family on the ancient Silk Road, Alex Zhang embarks on a journey to
            uncover the tales of trade, culture, and survival. Through old letters and artifacts, Alex discovers the rich
            tapestry of their ancestors&#39; lives, bridging the gap between past and present along the world&#39;s most
            famous trade route.
          </div>
          </div>
        )}
        {isFAQ && (
          <div className={classes.helpBox}>
          <div className={classes.fAQ3}>FAQ</div>
          <div className={classes.general}>General</div>
          <div className={classes.contentSharing}>Content Sharing</div>
          <div className={classes.whatIsHeritageHubHowDoICreateA}>
            <ul className={classes.list}>
            <li>
              <div className={classes.textBlock4}>What is HeritageHub?</div>
            </li>
            <li>
              <div className={classes.textBlock5}>How do I create an account on HeritageHub?</div>
            </li>
            </ul>
          </div>
          <div className={classes.howCanIShareMyFamilyHistoryOnH}>
            <ul className={classes.list2}>
              <li>
                <div className={classes.textBlock6}>How can I share my family history on HeritageHub?</div>
              </li>
              <li>
                <div className={classes.textBlock7}>What type of content can I share on HeritageHub?</div>
              </li>
              <li>
                <div className={classes.textBlock8}>How do I upload images and documents related to my family history?</div>
              </li>
            </ul>
          </div>
      </div>)}
      </div>
  );
});


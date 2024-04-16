import React, { CSSProperties, memo, useState } from 'react';
import type { FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import resets from '../_resets.module.css';
import { Group1Icon } from './Group1Icon';
import classes from './HeritageHub.module.css';


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
  const [isDiscussion, setDiscussion] = useState(false);

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
    setDiscussion(false);
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
    setDiscussion(false);
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
    setDiscussion(false);
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
    setDiscussion(false);
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
    setDiscussion(false);
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
    setDiscussion(false);
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
    setDiscussion(false);
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
    setDiscussion(false);
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
    setDiscussion(false);
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
    setDiscussion(false);
  }
  const toggleDiscussion = () => {
    setInfoBoxVisible(false);
    setAboutVisible(false);
    setSignInVisible(false);
    setChatBoxVisible(false);
    setHelpVisible(false);
    setCommunityFormVisible(false);
    setCulture(false);
    setHeritage(false);
    setStories(false);
    setFAQ(false);
    setDiscussion(true);
  }

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
      <div className={classes.chichenItza2}></div>
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
        {isChatBoxVisible && (
            <div className={classes.chatBoxPage}>
            <div className={classes.chatBoxSubmit}></div>
            <div className={classes.gpt}></div>
            <div className={classes.sendLetter}></div>
            <div className={classes.howCanIHelpYou}>How can I help you?</div>
            </div>)}
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
          <div className={classes.helpBox}>
          <div className={classes.multiMediaSelection}></div>
          <div className={classes.imageAdd}></div>
          <div className={classes.cinema}></div>
          <div className={classes.chatCommunity}></div>
          <div className={classes.addLink}></div>
          <div className={classes.sMS} onClick={toggleDiscussion}></div>
          <div className={classes.craigUser}></div>
          <div className={classes.beccaUser}></div>
          <div className={classes.craigPotter}>Craig Potter</div>
          <div className={classes.rebeccaLee}>Rebecca Lee</div>
          <div className={classes.PotterMore12}>@potterMore12</div>
          <div className={classes.BeccaLee}>@BeccaLee</div>
          <div className={classes._6h}>6h</div>
          <div className={classes._10h}>10h</div>
          <div className={classes.fullStop}></div>
          <div className={classes.fullStop2}></div>
          <div className={classes.communityPost1}>
            Thrilled to have traced my family back to the 18th century Scotland! 🏴 Discovered we were part of a small but
            fierce clan in the Highlands. Planning a trip next year to walk where they walked. #AncestryAdventure
            #ScotlandRoots
          </div>
          <div className={classes.line5}></div>
          <div className={classes.communityPost2}>
            &quot;📷 Just found this amazing photo of my great-grandfather in uniform during WWI. Never knew much about him
            until I started digging into our family archives. It&#39;s incredible to connect with your past in such a
            personal way! #FamilyHistory #WWIHeroes&quot;
          </div>
        </div>
        )}
        {isDiscussion && (
          <div className={classes.helpBox}>
            <div className={classes.craigPotter}>
              <div className={classes.craigPotter2Name}>Craig Potter</div>
              <div className={classes.craigUser2}/>
              <div className={classes.PotterMore12copy}>@potterMore12</div>
              <div className={classes.fullStop3}/>
              <div className={classes._6copy}>6h</div>
              <div className={classes.communityPost3}>Thrilled to have traced my family back to the 18th century Scotland! 🏴 Discovered we were part of a small but
            fierce clan in the Highlands. Planning a trip next year to walk where they walked. #AncestryAdventure
            #ScotlandRoots</div>
              <div className={classes.line6}></div>
            </div>
            <div className={classes.textArea}>write a message...</div>
            <div className={classes.discussionButtons}>
              <div className={classes.addLink}></div>
              <div className={classes.sMS}></div>
              <div className={classes.imageAdd}></div>
              <div className={classes.cinema}></div>
              <div className={classes.discussionSubmit}>Submit</div>
            </div>
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


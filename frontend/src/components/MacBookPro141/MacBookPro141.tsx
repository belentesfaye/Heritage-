import React, { CSSProperties, memo, useState } from 'react';
import type { FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import resets from '../_resets.module.css';
import { Group1Icon } from './Group1Icon';
import classes from './MacBookPro141.module.css';
import styles from './MacBookPro141.module.css';
import { Link } from 'react-router-dom';
import { useCollapse } from 'react-collapsed';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Tab,
  Table,
  TableCaption,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  ToastId,
  Tr,
  useToast,
  Image,
} from '@chakra-ui/react';

interface Props {
  className?: string;
}
interface SectionProps {
  title: string;
  defaultExpanded?: boolean;
  collapsedHeight?: number;
  children: React.ReactNode; // This type is appropriate for anything that can be rendered: numbers, strings, elements, or an array containing these types.
}


/* @figmaId 1:3 */
export const MacBookPro141: FC<Props> = memo(function MacBookPro141(props = {}) {
  const [isInfoBoxVisible, setInfoBoxVisible] = useState(false);
  const toggleInfoBox = () => setInfoBoxVisible(!isInfoBoxVisible);
  const [isAboutVisible, setAboutVisible] = useState(false);
  const toggleAbout = () => setAboutVisible(!isAboutVisible);
  const [isSignInVisible, setSignInVisible] = useState(false);
  const toggleSignIn = () => setSignInVisible(!isSignInVisible);
  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent form submission
    // Implement your login logic here

    // Example: Displaying a toast on login attempt
    toast({
      title: "Attempting login...",
      description: "We've received your login information.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
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
  <Box sx={{
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '770px',
    height: '701px',
    outline: 'solid 1px #000',
    outlineOffset: '-1px',
    backgroundColor: '#e8e8e8',
    filter: 'blur(2px)',
    textAlign: 'center',
  }}>
    <form onSubmit={handleLogin}>
      <Box sx={{
        display: 'inline-block',
        marginTop: '100px', // Adjust as needed
      }}>
        <Box sx={{
          color: '#999898',
          fontSize: '36px',
          fontWeight: 'bold',
          fontFamily: 'Gowun Batang, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
          marginBottom: '20px',
        }}>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" />
          </FormControl>
        </Box>

        <Box sx={{
          color: '#999898',
          fontSize: '36px',
          fontWeight: 'bold',
          fontFamily: 'Gowun Batang, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
        }}>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
        </Box>

        <Button type="submit" colorScheme="teal" style={{ display: 'block', width: '100%', marginTop: '20px' }}>
          Sign In
        </Button>
      </Box>
    </form>
  </Box>
)}



        

    </div>
  );
});
function toast(arg0: { title: string; description: string; status: string; duration: number; isClosable: boolean; }) {
  throw new Error('Function not implemented.');
}


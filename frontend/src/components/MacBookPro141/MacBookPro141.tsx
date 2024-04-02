import React, { CSSProperties, memo, useState } from 'react';
import type { FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';

import resets from '../_resets.module.css';
import { Group1Icon } from './Group1Icon';
import classes from './MacBookPro141.module.css';
import { Link } from 'react-router-dom';
import { useCollapse } from 'react-collapsed';

interface Props {
  className?: string;
}
interface SectionProps {
  title: string;
  defaultExpanded?: boolean;
  collapsedHeight?: number;
  children: React.ReactNode; // This type is appropriate for anything that can be rendered: numbers, strings, elements, or an array containing these types.
}


function Section(props: SectionProps) {
  const config = {
    defaultExpanded: props.defaultExpanded || false,
    collapsedHeight: props.collapsedHeight || 0,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          <div className="title">{props.title}</div>
          <div className="icon">
              <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
          </div>
      </div>
      <div {...getCollapseProps()}>
          <div className="content">
              {props.children}
          </div>
      </div>
  </div>
  );
}

/* @figmaId 1:3 */
export const MacBookPro141: FC<Props> = memo(function MacBookPro141(props = {}) {
  const [isInfoBoxVisible, setInfoBoxVisible] = useState(false);
  const toggleInfoBox = () => setInfoBoxVisible(!isInfoBoxVisible);
  const expandArrowStyle: CSSProperties = {
    position: 'absolute',
    left: '551px',
    top: '41px',
    width: '28px',
    height: '19px',
    backgroundImage: isInfoBoxVisible ? "url('assets/collapseArrow.png')" : "url('assets/expandArrow.png')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    cursor: 'pointer', // To indicate it's clickable
  };

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
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
      <div className={classes.expandArrow} onClick={toggleInfoBox}></div> 
      <div className={classes.learn}>Learn</div>
      <div className={classes.signIn}>Sign In</div>
      <div className={classes.help}>Help</div>
      <div className={classes.expandArrow2}></div>
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
      <div className={classes.expandArrow} onClick={toggleInfoBox}></div>
        {isInfoBoxVisible && (
          // Applying the .rectangle1 style to the info box
          <div className={classes.rectangle1}>
            <div className={classes.textBlock}>How it works</div>
            <div className={classes.textBlock2}>Resources</div>
            <div className={classes.textBlock3}>HeritageWiki</div>
          </div>
        )}
    </div>
  );
});

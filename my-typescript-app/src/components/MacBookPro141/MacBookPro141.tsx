import { memo, useState } from 'react'; // Import useState here
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group1Icon } from './Group1Icon';
import classes from './MacBookPro141.module.css';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 1:3 */
export const MacBookPro141: FC<Props> = memo(function MacBookPro141(props = {}) {
  const [isInfoBoxVisible, setInfoBoxVisible] = useState(false);
  const toggleInfoBox = () => setInfoBoxVisible(!isInfoBoxVisible);

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
      {isInfoBoxVisible && (
        <div className={classes.infoBox}>
          {/* Content of the information box */}
          <p>Information box content goes here.</p>
        </div>
      )}
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
    </div>
  );
});

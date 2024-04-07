import { memo, useState } from "react"; // Import useState here
import type { FC } from "react";

import resets from "../_resets.module.css";
import { Group1Icon } from "./Group1Icon";
import classes from "./MacBookPro141.module.css";
import { Link } from "react-router-dom";

interface Props {
	className?: string;
}
/* @figmaId 1:3 */
export const MacBookPro141: FC<Props> = memo(function MacBookPro141(props = {}) {
	const [isInfoBoxVisible, setInfoBoxVisible] = useState(false);
	const toggleInfoBox = () => setInfoBoxVisible(!isInfoBoxVisible);

	return (
		<div className={`${resets.clapyResets} ${classes.root}`}>
			{/* Top navigation bar */}
			<ul className={classes.topNav}>
				{/* Left side of top nav bar */}
				<ul className={classes.leftNav}>
					<div className={classes.chichenItza} />
					<div className={classes.heritage}>
						Heritage
						<div className={classes.xboxR} />
					</div>
					<div className={classes.learn}>
						Learn
						<div className={classes.expandArrow} />
					</div>
					<div className={classes.about} onMouseOver={toggleInfoBox} onMouseOut={toggleInfoBox}>
						About
						<div className={classes.expandArrow2} onMouseOver={toggleInfoBox} onMouseOut={toggleInfoBox} />
						{isInfoBoxVisible && (
							<div className={classes.infoBox}>
								{/* Content of the information box */}
								<p>About content goes here.</p>
							</div>
						)}
					</div>
				</ul>
				{/* Right side of top nav bar */}
				<ul className={classes.rightNav}>
					<div className={classes.navItem}>
						<div className={classes.search} />
					</div>
					<div className={classes.navItem}>
						<div className={classes.signIn}>Sign In</div>
					</div>
					<div className={classes.navItem}>
						<div className={classes.help}>Help</div>
					</div>
				</ul>
			</ul>
			{/* Secondary nav bar */}
			<ul className={classes.subNav}>
				<div className={classes.navItem}>
					<div className={classes.communityForm}>Community Form</div>
				</div>
				<div className={classes.navItem}>
					<div className={classes.cultures}>Cultures</div>
				</div>
				<div className={classes.navItem}>
					<div className={classes.stories}>Stories </div>
				</div>
				<div className={classes.navItem}>
					<div className={classes.FAQ}>FAQ</div>
				</div>
			</ul>
			{/* Footer nav bar */}
			<ul className={classes.bottomNav}>
				<div className={classes.instagramCircle}/>
				<div className={classes.linkedIn}/>
				<div className={classes.feedback}>Feedback</div>
			</ul>
			<div className={classes.group1}>
				<Group1Icon className={classes.icon} />
			</div>
			<div className={classes.chat}></div>
			<div className={classes.bigChichenItza}></div>
			<div className={classes.historyRemix}>HistoryRemix</div>
		</div>
	);
});

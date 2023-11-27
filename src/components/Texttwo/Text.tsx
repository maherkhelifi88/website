import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Text.module.css';
import image1 from '/assets/image4.png';
import image2 from '/assets/image5.png';
interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
//2nd dont believe us 
export const Texttwo: FC<Props> = memo(function Text(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.title}>
        <div className={classes.donTBelieveUsPeopleTalkAboutIt}>Don’t believe us? People talk about it</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
          We have considered our solutions to support every stage of your growth. We are the fastest and easiest way to
          launch SaaS showcase for our customers.
        </div>
      </div>
      <Button_StateNormalTypePrimary
        hide={{
          iconOutlineCheckCircle: true,
          iconOutlineArrowRight: true,
        }}
        text={{
          getStartedNow: <div className={classes.getStartedNow}>Get Started For Free</div>,
        }}
      />

      {/* Video 1 */}
      <img
        className={classes.video}
        src={image1} // Replace with the path to your first video
      ></img>

      {/* Video 2 */}
      <img
        className={classes.video}
       
        src={image2} // Replace with the path to your second video
      ></img>
    </div>
  );
});

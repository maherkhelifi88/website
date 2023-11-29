import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Text.module.css';
import image1 from '/assets/mez.jpg';
import image2 from '/assets/mezcal.jpg';
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
      <div className={classes.bg}></div>
      <div className={classes.title}>
        <div className={classes.donTBelieveUsPeopleTalkAboutIt}>Find out what our social media team can do for you:</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
        "Discover the unparalleled potential of our social media team, dedicated to transforming your online presence effortlessly. Our experts specialize in delivering top-notch content, including high-quality videos that require minimal effort from you. With a commitment to simplicity and speed, we highlight the essence of your brand swiftly, ensuring not just ease but exceptional results. Elevate your online game with us – where quality meets convenience."
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

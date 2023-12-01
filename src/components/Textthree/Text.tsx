import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Text.module.css';

// Import your video assets
import Video1 from '/assets/Flintcreek.mp4';
import Video2 from '/assets/Noi.mp4';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
//3rd dont believe us 
export const Textthree: FC<Props> = memo(function Text(props = {}) {
  const handleButtonClick = () => {
    window.location.href = 'https://calendly.com/chaima-zine';
  };
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.title}>
        <div className={classes.donTBelieveUsPeopleTalkAboutIt}>Why are we your best solution ?</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
        "Why choose us? It's simple – create an account, upload easy phone-made videos, and watch your business grow with enticing social media content. 
        Highlighting your food and drink pairings, we attract customers effortlessly. Join us for an easy, effective boost!"
        </div>
      </div>
      <Button_StateNormalTypePrimary
        onClick={handleButtonClick}
        hide={{
          iconOutlineCheckCircle: true,
          iconOutlineArrowRight: true,
        }}
        text={{
          getStartedNow: <div className={classes.getStartedNow}>Get Started For Free</div>,
        }}
      />

      {/* Video 1 */}
      <video
        className={classes.video}
        autoPlay
        loop
        muted
        src={Video1}
      ></video>

      {/* Video 2 */}
      <video
        className={classes.video}
        autoPlay
        loop
        muted
        src={Video2}
      ></video>
    </div>
  );
});

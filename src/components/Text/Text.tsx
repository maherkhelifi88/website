import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Text.module.css';

// Import your video assets
import Video1 from '/assets/Canlis.mp4';
import Video2 from '/assets/Tavolata.mp4';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
//1st dont believe us 
export const Text: FC<Props> = memo(function Text(props = {}) {
  const handleButtonClick = () => {
    window.location.href = 'https://calendly.com/chaima-zine';
  };
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      
      <div className={classes.title}>
        <div className={classes.donTBelieveUsPeopleTalkAboutIt}>Who are we?</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
       " We are a team of passionate professionals and food enthousiasts, expert Social Media managers ready to elevate your business. Our mission is to help you grow a faithful and unmatched community, taking your brand to the next level."
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
        src={Video1} // Replace with the path to your first video
      ></video>

      {/* Video 2 */}
      <video
        className={classes.video}
        autoPlay
        loop
        muted
        src={Video2} // Replace with the path to your second video
      ></video>
    </div>
  );
});

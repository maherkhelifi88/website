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

export const Textthree: FC<Props> = memo(function Text(props = {}) {
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

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Text.module.css';
import image1 from '/assets/mez.jpg';
import image2 from '/assets/MEZCAL.jpeg';
interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
//2nd dont believe us 
export const Texttwo: FC<Props> = memo(function Text(props = {}) {
  const handleButtonClick = () => {
    window.location.href = 'https://calendly.com/chaima-zine';
  };
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.title}>
        <div className={classes.donTBelieveUsPeopleTalkAboutIt}>Chat with our marketing  experts</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
        Our team will request information about your business or venue. This description should encompass key elements such as the type of business, its location, unique features, services provided, and any other aspects that distinguish your venue. Providing this information assists in devising a customized promotional strategy that accentuates the most attractive features of your business.
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
  <div className={classes.image}></div>
      
      {/* Video 2
      <img
        className={classes.video}
       
        src={image2} // Replace with the path to your second video
      ></img> */}
    </div>
  );
});

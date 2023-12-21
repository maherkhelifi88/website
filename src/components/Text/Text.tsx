import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Text.module.css';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/addRestaurant');
  };
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      
      <div className={classes.title}>
        <div className={classes.donTBelieveUsPeopleTalkAboutIt}>Upload your videos</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
        This step involves selecting and uploading visual content (videos and photos) of your venue. These visuals should ideally showcase the ambiance, products, services, customer interactions, or any special features. Quality visuals are crucial as they play a significant role in engaging potential customers on social media platforms.
        </div>
      </div>
      <Button_StateNormalTypePrimary
          onClick={handleOpen}
        hide={{
          iconOutlineCheckCircle: true,
          iconOutlineArrowRight: true,
        }}
        text={{
          getStartedNow: <div className={classes.getStartedNow}>Get Started For Free</div>,
        }}
      />



           <div className={classes.image}></div>
      {/* Video 1 
      <video
        className={classes.video}
        autoPlay
        loop
        muted
        src={Video1} // Replace with the path to your first video
      ></video>

      {/* Video 2 
      <video
        className={classes.video}
        autoPlay
        loop
        muted
        src={Video2} // Replace with the path to your second video
      ></video>*/}
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Text.module.css';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/persona/65819b2408c8409fdcf4d629');
  };
  const handleButtonClick = () => {
    window.location.href = 'http://localhost:5173/persona/65819b2408c8409fdcf4d629';
  };
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.title}>
        <div className={classes.donTBelieveUsPeopleTalkAboutIt}>Download your content</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
        Download the videos crafted for you through our AI technology, overseen by our expert team. We value your feedback and would appreciate any suggestions for improvements for future creations.
        </div>
      </div>
      <Button_StateNormalTypePrimary
        onClick={handleOpen}
        hide={{
          iconOutlineCheckCircle: true,
          iconOutlineArrowRight: true,
        }}
        text={{
          getStartedNow: <div className={classes.getStartedNow}>Get Your Videos</div>,
        }}
      />
  <div className={classes.image}></div>
      {/* Video 1
      <video
        className={classes.video}
        autoPlay
        loop
        muted
        src={Video1}
      ></video>

      {/* Video 2 
      <video
        className={classes.video}
        autoPlay
        loop
        muted
        src={Video2}
      ></video>*/}
    </div>
  );
});

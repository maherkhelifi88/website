import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import resets from '../_resets.module.css';
import { Button_StateNormalTypeSecondar } from './Button_StateNormalTypeSecondar/Button_StateNormalTypeSecondar';
import classes from './CTA.module.css';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
/* Schedule a free consultation */
export const CTA: FC<Props> = memo(function CTA(props = {}) {
 
  const handleButtonClick = () => {
    window.open('https://calendly.com/benromdhaneeya', '_blank');
  };
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.title}>
        <div className={classes.scheduleAFreeConsultation}>Book a free consultation with our experts NOW!</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
          Always here for you, we care about your business growth. Simplicity-high quality results-Uncomplicated solutions for your success. 
        </div>
      </div>
      <Button_StateNormalTypeSecondar
      onClick={handleButtonClick}
        hide={{
          iconOutlineCheckCircle: true,
          iconOutlineArrowRight: true,
        }}
        text={{
          getStartedNow: <div className={classes.getStartedNow}>Book a session</div>,
        }}
      />
    </div>
  );
});

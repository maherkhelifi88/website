import { memo } from 'react';
import type { FC } from 'react';

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
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.title}>
        <div className={classes.scheduleAFreeConsultation}>Schedule a free consultation</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
          We have considered our solutions to support every stage of your growth. We are the fastest and easiest way to
          launch.
        </div>
      </div>
      <Button_StateNormalTypeSecondar
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

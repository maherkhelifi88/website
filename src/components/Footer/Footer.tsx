import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Footer.module.css';
import { OriginalLogo_TypeDark } from './OriginalLogo_TypeDark/OriginalLogo_TypeDark';
import { useNavigate } from 'react-router-dom';
interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
/* @figmaId 70:1551 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  const navigate = useNavigate();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/influencer');
  };
  return (
    <>
     <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.bg}></div>
      <div className={classes.copyright2023FinestDevsAllRigh}>Copyright © 2023 The Leap. All Rights Reserved</div>
      <div className={classes.line4}></div>
      <div className={classes.cTA}>
        <div className={classes.title}>
          <div className={classes.getStartedWithNexo}>Get Started With Kanteen</div>
          <div className={classes.weHaveConsideredOurSolutionsTo}>
            We have considered our solutions to support every stage of your growth. We are the fastest and easiest way
            to launch SaaS showcase for our customers.
          </div>
        </div>
        <Button_StateNormalTypePrimary
        onClick={handleOpen}
          hide={{
            iconOutlineCheckCircle: true,
            iconOutlineArrowRight: true,
          }}
          text={{
            getStartedNow: <div className={classes.getStartedNow}>influencers collaboration</div>,
          }}
        />
      </div>
      </div>
    </>
  );
});

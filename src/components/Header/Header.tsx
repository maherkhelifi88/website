import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypeSmall } from './Button_StateNormalTypeSmall/Button_StateNormalTypeSmall';
import classes from './Header.module.css';
import { OriginalLogo_TypeMain } from './OriginalLogo_TypeMain/OriginalLogo_TypeMain';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
/* @figmaId 7715:2441 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <OriginalLogo_TypeMain />
      <div className={classes.menu}>
        <div className={classes.home}>Home</div>
        <div className={classes.about}>About</div>
        <div className={classes.product}>Product</div>
        <div className={classes.pages}>Pages</div>
        <div className={classes.contact}>Contact</div>
      </div>
      <div className={classes.button2}>
        <Button_StateNormalTypeSmall
          className={classes.button}
          hide={{
            iconOutlineCheckCircle: true,
            iconOutlineArrowRight: true,
          }}
        />
        <div className={classes.logIn}>Log In</div>
      </div>
    </div>
  );
});

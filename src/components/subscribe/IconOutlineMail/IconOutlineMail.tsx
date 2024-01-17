import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconOutlineMail.module.css';
import { IconOutlineMailIcon } from './IconOutlineMailIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 102:6 */
export const IconOutlineMail: FC<Props> = memo(function IconOutlineMail(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconOutlineMailIcon className={classes.icon2} />}</div>
    </div>
  );
});

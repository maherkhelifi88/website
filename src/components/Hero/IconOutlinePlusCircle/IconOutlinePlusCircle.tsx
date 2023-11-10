import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconOutlinePlusCircle.module.css';
import { IconOutlinePlusCircleIcon } from './IconOutlinePlusCircleIcon.js';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 102:90 */
export const IconOutlinePlusCircle: FC<Props> = memo(function IconOutlinePlusCircle(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <IconOutlinePlusCircleIcon className={classes.icon2} />}
      </div>
    </div>
  );
});

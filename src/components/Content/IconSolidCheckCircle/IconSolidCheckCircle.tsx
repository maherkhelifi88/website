import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconSolidCheckCircle.module.css';
import { IconSolidCheckCircleIcon } from './IconSolidCheckCircleIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 70:3933 */
export const IconSolidCheckCircle: FC<Props> = memo(function IconSolidCheckCircle(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconSolidCheckCircleIcon className={classes.icon2} />}</div>
    </div>
  );
});

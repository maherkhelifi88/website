import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconOutlineCheveronRight.module.css';
import { IconOutlineCheveronRightIcon } from './IconOutlineCheveronRightIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 70:3 */
export const IconOutlineCheveronRight: FC<Props> = memo(function IconOutlineCheveronRight(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        {props.swap?.icon || <IconOutlineCheveronRightIcon className={classes.icon2} />}
      </div>
    </div>
  );
});

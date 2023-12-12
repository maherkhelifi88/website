import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_refresh_Dowload_delete.module.css';
import { Ellipse970Icon } from './Ellipse970Icon.js';
import { Group427318968Icon } from './Group427318968Icon.js';
import { Rectangle34624115Icon } from './Rectangle34624115Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 281:1440 */
export const Button_refresh_Dowload_delete: FC<Props> = memo(function Button_refresh_Dowload_delete(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle34624115}>
        <Rectangle34624115Icon className={classes.icon} />
      </div>
      <div className={classes.line305}></div>
      <div className={classes.line306}></div>
      <div className={classes.group427318968}>
        <Group427318968Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse970}>
        <Ellipse970Icon className={classes.icon3} />
      </div>
      <div className={classes.line308}></div>
      <div className={classes.line309}></div>
      <div className={classes.line3082}></div>
      <div className={classes.line3092}></div>
      <div className={classes.line312}></div>
      <div className={classes.line313}></div>
    </div>
  );
});

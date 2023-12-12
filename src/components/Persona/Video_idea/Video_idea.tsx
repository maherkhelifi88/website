import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Video_idea.module.css';

interface Props {
  className?: string;
}
/* @figmaId 281:1441 */
export const Video_idea: FC<Props> = memo(function Video_idea(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.f0eb01a7774b433188739dba0afa23}></div>
      <div className={classes.rectangle34624112}></div>
      <div className={classes.naturalWineLovers}>
        <div className={classes.textBlock}>Natural Wine</div>
        <div className={classes.textBlock2}> Lovers</div>
      </div>
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Header } from './components/Header2/Header';
import { Footer } from './components/Footer2/Footer';
import { Group427318977 } from './components/Persona/Group427318977';
interface Props {
  className?: string;
}
export const Persona: FC<Props> = memo(function Persona(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
     
      <Group427318977/>
    
    </div>
  );
});

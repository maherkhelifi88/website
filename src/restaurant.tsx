import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';

import { Header } from './components/Header2/Header';
import { Restaurants } from './components/Restaurant/Restaurant';
import { Footer } from './components/Footer/Footer';
interface Props {
  className?: string;
}
export const Restaurant: FC<Props> = memo(function Restaurant(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      
      <Header />
      <Restaurants/>
      <Footer />
    </div>
  );
});

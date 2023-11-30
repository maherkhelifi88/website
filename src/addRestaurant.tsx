import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';

import { Header } from './components/Header2/Header';
import { Form } from './components/AddRestaurant/Form';
import { Footer } from './components/Footer/Footer';
interface Props {
  className?: string;
}
export const AddRestaurant: FC<Props> = memo(function AddRestaurant(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Header />
      <Form/>
      <Footer />
    </div>
  );
});

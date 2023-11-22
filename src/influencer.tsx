import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Header } from './components/Header2/Header';
import { Footer } from './components/Footer2/Footer';
import { Form } from './components/Form/Form';
import { List } from './components/List/List';
import { FAQ } from './components/FAQ/FAQ';
import { HowItWorkss } from './components/Influencer/HowItWorks';
interface Props {
  className?: string;
}
export const Influencer: FC<Props> = memo(function Influencer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Header />
      <HowItWorkss />
      <Form />
      <List/>
      <FAQ/>
      <Footer />
    </div>
  );
});

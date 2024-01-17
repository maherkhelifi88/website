import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Header/Header';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { Text } from './components/Text/Text';
import { Texttwo } from './components/Texttwo/Text';
import { Textthree } from './components/Textthree/Text';
import { CTA } from './components/CTA/CTA';
import { CTA1 } from './components/subscribe/CTA';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
interface Props {
  className?: string;
}
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Text />
      <Texttwo />
      <Textthree />
      <Header />
      <CTA />
      <CTA1 />
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  );
});

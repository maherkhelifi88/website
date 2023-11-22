import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse962Icon2 } from './Ellipse962Icon2.js';
import { Ellipse962Icon3 } from './Ellipse962Icon3.js';
import { Ellipse962Icon } from './Ellipse962Icon.js';
import classes from './HowItWorks.module.css';

interface Props {
  className?: string;
}
/* @figmaId 159:2703 */
export const HowItWorkss: FC<Props> = memo(function HowItWorkss(props = {}) {
  return (
    <>
      <div className={classes.bg}></div>
      <div className={classes.image}></div>
      <div className={classes.text}>
        <div className={classes.title}>
          <div className={classes.heyJenLetSCreateMagic}>Hey Jen, let’s create magic</div>
          <div className={classes.weHaveConsideredOurSolutionsTo}>
            We have considered our solutions to support every stage of your growth. We are the fastest and easiest way
            to launch SaaS.
          </div>
        </div>
        <div className={classes.steps}>
          <div className={classes._1}>
            <div className={classes.no}>
              <div className={classes.ellipse962}>
                <Ellipse962Icon className={classes.icon} />
              </div>
              <div className={classes._12}>01</div>
            </div>
            <div className={classes.text2}>
              <div className={classes.submitBusinessVideos}>Submit Business Videos</div>
              <div className={classes.uploadTheVideosYouHaveTakenOnY}>
                Upload the videos you have taken on your phone that showcase the business.
              </div>
            </div>
          </div>
          <div className={classes._2}>
            <div className={classes.no2}>
              <div className={classes.ellipse9622}>
                <Ellipse962Icon2 className={classes.icon2} />
              </div>
              <div className={classes._22}>02</div>
            </div>
            <div className={classes.text3}>
              <div className={classes.fillUpBusinessDetails}>Fill up Business Details</div>
              <div className={classes.provideUsWithInformationAboutT}>
                Provide us with information about the business you want to promote.
              </div>
            </div>
          </div>
          <div className={classes._3}>
            <div className={classes.no3}>
              <div className={classes.ellipse9623}>
                <Ellipse962Icon3 className={classes.icon3} />
              </div>
              <div className={classes._32}>03</div>
            </div>
            <div className={classes.text4}>
              <div className={classes.reviewYourKanteenContent}>Review your Kanteen Content</div>
              <div className={classes.takeALookAtTheContentWeHaveCre}>
                Take a look at the content we have created for you to post on social media and provide your feedback.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

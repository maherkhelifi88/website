import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import { Button_StateNormalTypeSecondar } from './Button_StateNormalTypeSecondar/Button_StateNormalTypeSecondar';
import classes from './Content.module.css';
import { IconOutlineArrowRight } from './IconOutlineArrowRight/IconOutlineArrowRight';
import { IconOutlineCheckCircle } from './IconOutlineCheckCircle/IconOutlineCheckCircle';
import { IconSolidCheckCircle } from './IconSolidCheckCircle/IconSolidCheckCircle';
import { IconSolidCheckCircleIcon2 } from './IconSolidCheckCircleIcon2.js';
import { IconSolidCheckCircleIcon3 } from './IconSolidCheckCircleIcon3.js';
import { IconSolidCheckCircleIcon4 } from './IconSolidCheckCircleIcon4.js';
import { IconSolidCheckCircleIcon5 } from './IconSolidCheckCircleIcon5.js';
import { IconSolidCheckCircleIcon6 } from './IconSolidCheckCircleIcon6.js';
import { IconSolidCheckCircleIcon7 } from './IconSolidCheckCircleIcon7.js';
import { IconSolidCheckCircleIcon8 } from './IconSolidCheckCircleIcon8.js';
import { IconSolidCheckCircleIcon } from './IconSolidCheckCircleIcon.js';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
    iconOutlineCheckCircle2?: boolean;
    iconOutlineArrowRight2?: boolean;
  };
}
/* budget */
export const Content: FC<Props> = memo(function Content(props = {}) {
  return (
    <>
      <div className={classes.card}>
        <div className={classes._1}>
          <div className={classes.bg}></div>
          <div className={classes.content}>
            <div className={classes.price}>
              <div className={classes.basic}>Basic</div>
              <div className={classes.PerMonth}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label}>$0 </span>
                  <span className={classes.label2}>Per month</span>
                </p>
              </div>
              <div className={classes.theIdealPlanForGivingNexoATryA}>
                The ideal plan for giving Nexo a try and share it with your team.
              </div>
            </div>
            <div className={classes.line304}></div>
            <div className={classes.list}>
              <div className={classes._12}>
                <div className={classes.allAnalyticsFeatures}>All Analytics Features</div>
                <IconSolidCheckCircle
                  className={classes.iconSolidCheckCircle}
                  swap={{
                    icon: <IconSolidCheckCircleIcon className={classes.icon} />,
                  }}
                />
              </div>
              <div className={classes._2}>
                <div className={classes.upTo2500TrackedVisits}>Up to 250,00 Tracked Visits</div>
                <IconSolidCheckCircle
                  className={classes.iconSolidCheckCircle2}
                  swap={{
                    icon: <IconSolidCheckCircleIcon2 className={classes.icon2} />,
                  }}
                />
              </div>
              <div className={classes._3}>
                <div className={classes.normalSupport}>Normal Support</div>
                <IconSolidCheckCircle
                  className={classes.iconSolidCheckCircle3}
                  swap={{
                    icon: <IconSolidCheckCircleIcon3 className={classes.icon3} />,
                  }}
                />
              </div>
              <div className={classes._4}>
                <div className={classes.freeHosting}>Free Hosting</div>
                <IconSolidCheckCircle
                  className={classes.iconSolidCheckCircle4}
                  swap={{
                    icon: <IconSolidCheckCircleIcon4 className={classes.icon4} />,
                  }}
                />
              </div>
            </div>
            <Button_StateNormalTypePrimary
              hide={{
                iconOutlineCheckCircle: true,
                iconOutlineArrowRight: true,
              }}
              text={{
                getStartedNow: <div className={classes.getStartedNow}>Start with Basic</div>,
              }}
            />
          </div>
        </div>
        <div className={classes._22}>
          <div className={classes.bg2}></div>
          <div className={classes.content2}>
            <div className={classes.price2}>
              <div className={classes.premium}>Premium</div>
              <div className={classes._49PerMonth}>
                <p className={classes.labelWrapper2}>
                  <span className={classes.label3}>$49 </span>
                  <span className={classes.label4}>Per month</span>
                </p>
              </div>
              <div className={classes.theIdealPlanForGivingNexoATryA2}>
                The ideal plan for giving Nexo a try and share it with your team.
              </div>
            </div>
            <div className={classes.line3042}></div>
            <div className={classes.list2}>
              <div className={classes._13}>
                <div className={classes.everythingOnStandardPlan}>Everything on Standard Plan</div>
                <IconSolidCheckCircle
                  className={classes.iconSolidCheckCircle5}
                  swap={{
                    icon: <IconSolidCheckCircleIcon5 className={classes.icon5} />,
                  }}
                />
              </div>
              <div className={classes._23}>
                <div className={classes.upTo1000TrackedVisits}>Up to 100,00 Tracked Visits</div>
                <IconSolidCheckCircle
                  className={classes.iconSolidCheckCircle6}
                  swap={{
                    icon: <IconSolidCheckCircleIcon6 className={classes.icon6} />,
                  }}
                />
              </div>
              <div className={classes._32}>
                <div className={classes.premiumSupport}>Premium Support</div>
                <IconSolidCheckCircle
                  className={classes.iconSolidCheckCircle7}
                  swap={{
                    icon: <IconSolidCheckCircleIcon7 className={classes.icon7} />,
                  }}
                />
              </div>
              <div className={classes._42}>
                <div className={classes.upTo10TeamMembers}>Up to 10 Team Members</div>
                <IconSolidCheckCircle
                  className={classes.iconSolidCheckCircle8}
                  swap={{
                    icon: <IconSolidCheckCircleIcon8 className={classes.icon8} />,
                  }}
                />
              </div>
            </div>
            <Button_StateNormalTypeSecondar
              hide={{
                iconOutlineCheckCircle: true,
                iconOutlineArrowRight: true,
              }}
              text={{
                getStartedNow: <div className={classes.getStartedNow2}>Start with Premium</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.title}>
        <div className={classes.title2}>
          <div className={classes.tag}>
            <div className={classes.bUILDINGBETTERSAASWEBSITE}>PLANS THAT FIT YOUR NEED</div>
          </div>
          <div className={classes.chooseOnYourBudget}>Select your budget </div>
        </div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
         Customize you cost: Pocket friendly social media videos for every budget. Quality promotion without compromise!
        </div>
      </div>
    </>
  );
});

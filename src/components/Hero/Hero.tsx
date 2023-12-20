import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import { Ellipse19Icon } from './Ellipse19Icon.js';
import classes from './Hero.module.css';
import { IconOutlinePlusCircle } from './IconOutlinePlusCircle/IconOutlinePlusCircle';
import { IconOutlinePlusCircleIcon } from './IconOutlinePlusCircleIcon.js';
import { ImageIcon2 } from './ImageIcon2.js';
import { ImageIcon3 } from './ImageIcon3.js';
import { ImageIcon } from './ImageIcon.js';
import { VectorIcon } from './VectorIcon.js';
import maher from '/assets/maher.jpg';
import chaima from '/assets/chaima.jpg';
import amal from '/assets/amal.jpg';
interface Props {
  className?: string;
  hide?: {
    iconOutlineArrowRight?: boolean;
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight2?: boolean;
  };
}
/* @figmaId 7715:2402 */
export const Hero: FC<Props> = memo(function Hero(props = {}) {
  const handleButtonClick = () => {
    window.location.href = 'https://calendly.com/chaima-zine';
  };
  return (
    <>
      <div className="main-container">
        <div className={classes.bg}></div>

        {/** 

        <video autoPlay muted loop className={classes.video}>
          <source src="/assets/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>



        <div className={classes.bg2}></div>
        <div className={classes.text}>
          <div className={classes.vector}>
            <VectorIcon className={classes.icon3} />
          </div>
          <div className={classes.YouMadeItSoSimp}>
            Our team will create captivating videos that tell your story and elevate your brand.
          </div>
        </div>
        <div className={classes.bg3}></div>
        <div className={classes.list}>
          <div className={classes._1}>
            <div className={classes.profile}>
              <div className={classes.image}>
                <img src={maher} className={classes.icon4} />
              </div>
              <div className={classes.freddy}>Maher</div>
            </div>
            <button className={classes.button2}>
              <div className={classes.marketing}>Project Manager</div>
            </button>
          </div>
          <div className={classes.line205}></div>
          <div className={classes._2}>
            <div className={classes.profile2}>
              <div className={classes.image2}>
                <img src={amal} className={classes.icon5} />
              </div>
              <div className={classes.fiona}>Amal</div>
            </div>
            <button className={classes.button3}>
              <div className={classes.design}>Business Partnership</div>
            </button>
          </div>
          <div className={classes.line206}></div>
          <div className={classes._3}>
            <div className={classes.profile3}>
              <div className={classes.ellipse19}>
                <img src={chaima} className={classes.icon6} />
              </div>
              <div className={classes.juliana}>Chaima</div>
            </div>
            <button className={classes.button4}>
              <div className={classes.finance}>Social Media Manager</div>
            </button>
          </div>
        </div>
        <div className={classes.ourExpertTeam}>Our Expert Team</div>
        <div className={classes.bg4}></div>
        <div className={classes.profile4}>
          <div className={classes.image3}>
            <img src={maher} className={classes.icon7} />
          </div>
          <div className={classes.text2}>
            <div className={classes.codyFisher}>Maher Khelifi</div>
            <div className={classes.weProvideYouEverythingYouNeedF}>"Crafting Excellence: Your Vision, Our Expertise – Elevating Video Production with Precision"</div>
          </div>

        </div>*/}

        <div className={classes.image}></div>
        <div className={classes.image21}></div>
        <div className={classes.dALLE2023128103642CreateAPromo}></div>



        <div className={classes.text3}>
          <div className={classes.mainTitle}>
            <div className={classes.tag}>
              <div className={classes.contentCreation}>Content Creation</div>
            </div>
            <div className={classes.title}>
              <div className={classes.connectWithCustomersSmartly}>Create personalized videos for your restaurant.</div>
              <div className={classes.nexoProvidesYouEverythingYouNe}>
                Discover our social media team. We specialize in creating videos for you, bringing your culinary creations to life. Let us exhibit the essence of your dishes and showcase the unique experience your restaurant offers.
              </div>
            </div>
          </div>
          <Button_StateNormalTypePrimary
            onClick={handleButtonClick}
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
            text={{
              getStartedNow: <div className={classes.getStartedNow2}>Get Started For Free</div>,
            }}
          />
        </div>
      </div>
    </>
  );
});

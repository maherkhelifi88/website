import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Restaurant.module.css';
import { TextField ,Button} from '@mui/material';
import {List} from './List/List'
import { Button_StateNormalTypeSecondar } from './Button_StateNormalTypeSecondar/Button_StateNormalTypeSecondar';

interface Props {
  className?: string;
}
/* @figmaId 251:1250 */
export const Restaurants: FC<Props> = memo(function Restaurants(props = {}) {
  return (
    <>
      <div className={classes.container}>

        <div className={classes.title}>
          <div className={classes.hiRestaurantName}>Hi, [Restaurant name]</div>
          <div className={classes.april212023}>April 21, 2023</div>
        </div>
        <div className={classes.image}></div>

        <br></br>
        <div className={classes.container2} >
          <div className={classes.about}>About </div>
          <br></br>
          <div className={classes.ifYouAreRunningAdsToYourShopif}>
            If you are running ads to your Shopify store, between 40-60% of purchases will no longer display in Facebook ads
            manager. This means for every 10 sales you generate, roughly only 5 of them will track back to the ad they came
            from. The other 5 sales are not reported at all inside your ads manager.
          </div>
          <div className={classes.loremIpsumDolorSitAmetConsecte}>
            <ul className={classes.list}>
              <li>
                <div className={classes.textBlock}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
              </li>
              <li>
                <div className={classes.textBlock2}>Sed blandit gravida arcu risus congue malesuada proin et lectus. </div>
              </li>
              <li>
                <div className={classes.textBlock3}>Egestas massa massa euismod dolor curabitur.</div>
              </li>
            </ul>
          </div>
          <div className={classes.quamInterdumEgetAmetTellusAdip}>
            Quam interdum eget amet tellus adipiscing nullam a. Eget fermentum viverra viverra mattis nisi viverra
            elementum.
          </div>
          <div className={classes.about}>What customers love </div>

          <div className={classes.ifYouAreRunningAdsToYourShopif}>
            If you are running ads to your Shopify store, between 40-60% of purchases will no longer display in Facebook ads
            manager. This means for every 10 sales you generate, roughly only 5 of them will track back to the ad they came
            from. The other 5 sales are not reported at all inside your ads manager.
          </div>
          <div className={classes.quamInterdumEgetAmetTellusAdip}>
            Quam interdum eget amet tellus adipiscing nullam a. Eget fermentum viverra viverra mattis nisi viverra
            elementum.
          </div>
          <div className={classes.about}>Opportunities for imporvement</div>

          <div className={classes.ifYouAreRunningAdsToYourShopif}>
            If you are running ads to your Shopify store, between 40-60% of purchases will no longer display in Facebook ads
            manager. This means for every 10 sales you generate, roughly only 5 of them will track back to the ad they came
            from. The other 5 sales are not reported at all inside your ads manager.
          </div>
          <div className={classes.quamInterdumEgetAmetTellusAdip}>
            Quam interdum eget amet tellus adipiscing nullam a. Eget fermentum viverra viverra mattis nisi viverra
            elementum.
          </div>

          <div className={classes.about}>Video strategy</div>

          <div className={classes.ifYouAreRunningAdsToYourShopif}>
            If you are running ads to your Shopify store, between 40-60% of purchases will no longer display in Facebook ads
            manager. This means for every 10 sales you generate, roughly only 5 of them will track back to the ad they came
            from. The other 5 sales are not reported at all inside your ads manager.
          </div>
          <div className={classes.quamInterdumEgetAmetTellusAdip}>
            Quam interdum eget amet tellus adipiscing nullam a. Eget fermentum viverra viverra mattis nisi viverra
            elementum.
          </div>


          <div className={classes.videos} >
            <div className={classes.screenshot2023118At10391}></div>
            <div className={classes.screenshot2023118At10401}></div>
            <div className={classes.screenshot2023118At10392}></div>
          </div>


              <br></br>
          <div className={classes._3}>

            <TextField
              id="outlined-multiline-static"
              multiline
              rows={5}
              defaultValue="Type your message"
              className={classes.rectangle4635}
            />
            <div className={classes.aboutTheRestaurant}>Feedback</div>
          </div>
          <div className={classes._5}>
            <TextField fullWidth label="Search for videos / Add iCloud Shared link" id="fullWidth" className={classes.rectangle463} />
            <div className={classes.uploadVideos}>Upload videos</div>
          </div>
           <br></br>
           
            <Button variant="contained"  className={classes.button}>
            Submit 
          </Button>
              
              <List></List>



            
        </div>
        <div className={`${resets.storybrainResets} ${classes.CTA}`}>
      <div className={classes.title}>
        <div className={classes.scheduleAFreeConsultation}>Book a reservation</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
          Always here for you, we care about your business growth. Simplicity-high quality results-Uncomplicated solutions for your success. 
        </div>
      </div>
      <Button_StateNormalTypeSecondar
        hide={{
          iconOutlineCheckCircle: true,
          iconOutlineArrowRight: true,
        }}
        text={{
          getStartedNow: <div className={classes.getStartedNow}>Book a reservation</div>,
        }}
      />
    </div>
      </div>
  

    </>
  );
});

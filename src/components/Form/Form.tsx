import { memo } from 'react';
import type { FC } from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Form.module.css';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
/* @figmaId 159:2474 */
export const Form: FC<Props> = memo(function Form(props = {}) {
  return (
    <>
      <div className={classes.box}>
        <div className={classes._1}>
          <div className={classes.yourName}>Your Name</div>
          <TextField fullWidth label="e.g. Mark Jones" id="fullWidth" className={classes.rectangle463} />
        </div>
        <div className={classes._4}>
          <div className={classes.rectangle4632}></div>
          <TextField fullWidth label="e.g. Mark Jones" id="fullWidth" className={classes.rectangle463} />
          <div className={classes.yourInstagramTikTok}>Your Instagram/TikTok</div>
        </div>
        <div className={classes._6}>

          <TextField fullWidth label="e.g. Mark Jones" id="fullWidth" className={classes.rectangle463} />
          <div className={classes.whatsApp}>WhatsApp </div>
        </div>
        <div className={classes._2}>

          <TextField fullWidth label="e.g. user@gmail.com" id="fullWidth" className={classes.rectangle463} />
          <div className={classes.email}>Email</div>
        </div>
        <div className={classes._3}>

          <TextField
              id="outlined-multiline-static"
              multiline
              rows={5}
              defaultValue="Type your message"
            className={classes.rectangle4635}
          />
          <div className={classes.aboutTheRestaurant}>About the restaurant</div>
        </div>
        <div className={classes._5}>
        <TextField fullWidth label="Search for videos / Add iCloud Shared link" id="fullWidth" className={classes.rectangle463} />
          <div className={classes.uploadVideos}>Upload videos</div>
        </div>
        <Button_StateNormalTypePrimary
          className={classes.button}
          hide={{
            iconOutlineCheckCircle: true,
            iconOutlineArrowRight: true,
          }}
          text={{
            getStartedNow: <div className={classes.getStartedNow}>Submit</div>,
          }}
        />
      </div>
      <div className={classes.newRestaurantCoverageRequest}>New Restaurant coverage </div>
      <div className={classes.newRestaurantCoverageRequestt}>request </div>
    </>
  );
});

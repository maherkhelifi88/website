import { memo } from 'react';
import type { FC } from 'react';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './CTA.module.css';
import { IconOutlineMail } from './IconOutlineMail/IconOutlineMail';
import { IconOutlineMailIcon } from './IconOutlineMailIcon.js';

interface Props {
  className?: string;
  hide?: {
    iconOutlineArrowRight?: boolean;
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight2?: boolean;
  };
}
/* @figmaId 7838:3341 */
export const CTA1: FC<Props> = memo(function CTA(props = {}) {
  const [email, setEmail] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleRestaurantNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantName(event.target.value);
  };

  const handleSubmit = async () => {
    const data = { email, restaurantName };
    try {
      const response = await fetch('https://leapback-d796b66e0016.herokuapp.com/api/persona/wait', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Dismiss alert after 3 seconds
      }

      // Additional response handling
    } catch (error) {
      // Error handling
    }
  };
  return (
    <>
      <div className={classes.bg}></div>
      <div className={classes.text}>
        <div className={classes.title}>
          <div className={classes.letUsManageYourForYouSoThatYou1}>Add your Restaurant to the Waitlist</div>
          <div className={classes.letUsManageYourForYouSoThatYou}>
            Let us manage your restaurant for you so that you can get back to doing what you do best and we look in the future with
            certainty for life.
          </div>
        </div>
       
        <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', p: 1, width: '100%' }}>
       
        <Paper elevation={3} sx={{ margin: 'auto', padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '4px', maxWidth: '500px' , width: '100%',}}>
            <TextField
              fullWidth
              id="input-with-icon-textfield"
              label="Enter the Restaurant Name"
              variant="outlined"
              value={restaurantName}
              onChange={handleRestaurantNameChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RestaurantIcon /> 
                  </InputAdornment>
                ),
              }}
              sx={{ marginRight:0, backgroundColor: '#fff',
              '& .MuiInputBase-input': { // This targets the input element itself
                overflow: 'hidden',
              },
            }}
            />
             <TextField
              fullWidth
              id="input-with-icon-textfield"
              label="Enter your email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon /> 
                  </InputAdornment>
                ),
              }}
              sx={{ marginTop:2 ,marginRight: 0, marginBottom:2 , backgroundColor: '#fff',
              '& .MuiInputBase-input': {
                overflow: 'hidden',
              },
            }}
            />
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              sx={{
                backgroundColor: '#c9f269',
                color: '#000',
                paddingX: 3,
                '&:hover': {
                  backgroundColor: '#388E3C',
                },
              }}
            >
              Submit
            </Button>
            <br></br>
            {showAlert && (
        <Alert severity="success" sx={{ marginBottom: 2 }}>
          Information successfully sent!
        </Alert>
      )}
          </Paper>
         
        </Box>
      </div>
    </>
  );
});

import React, { ChangeEvent, useState, FC, memo } from 'react';
import { TextField , Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Form.module.css';
import axios from 'axios';
import MuiAlert from '@mui/material/Alert';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}

export const Form: FC<Props> = memo(function Form(props = {}) {

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [customerLove, setCustomerLove] = useState('');
  const [opportunities, setOpportunities] = useState('');
  const [videoParagraph, setVideoParagraph] = useState('');
  const [videos, setVideos] = useState<string[]>([]);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [image, setimage] = useState('');

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageString = reader.result;
        if (typeof imageString === 'string') {
          setimage(imageString);
        } else {
          // Handle the case where imageString is not a string
          console.error("Failed to load the image as a base64 string");
        }
      };
    }
  };
  const handleChangeVideos = (e: ChangeEvent<HTMLInputElement>) => {
    setVideos([e.target.value]);
  };
  const handleSubmit = async () => {
 
    const data ={
      name,
      about,
      customerLove,
      opportunities,
      videoParagraph,
      videos,
      image,
    }

  console.log(data)
  try {
    const response = await fetch('https://leapback-d796b66e0016.herokuapp.com/api/restaurant/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    setIsSubmittedSuccessfully(true);
    setOpenSnackbar(true);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Here you can log more detailed information about the error
      console.error('Error response:', error.response);
    } else {
      console.error('An unexpected error occurred:', error);
    }
    setIsSubmittedSuccessfully(false);
  }
};
  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event, 
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <>
      <div className={classes.box}>
        <div className={classes.newRestaurantCoverageRequest}>Add new Restaurant </div>
        <div className={classes._1}>
          <div className={classes.yourName}>Restaurant Name</div>
          <TextField
            fullWidth
            label="e.g. Tavolata"
            id="fullWidth"
            name="name"
            onChange={(event) => setName(event.target.value)}
            className={classes.rectangle463} />
        </div>
        <div className={classes._4}>

          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            defaultValue="About"
            name="about"
            onChange={(event) => setAbout(event.target.value)}
            className={classes.rectangle4635}
          />
          <div className={classes.about}>About</div>
        </div>
        <div className={classes._6}>

          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            name="customerLove"
            onChange={(event) => setCustomerLove(event.target.value)}
            defaultValue="What Customers Love"
            className={classes.rectangle4635}
          />
          <div className={classes.whatsApp}>What Customers Love</div>
        </div>
        <div className={classes._2}>

          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            name="opportunities"
            onChange={(event) => setOpportunities(event.target.value)}
            defaultValue="Opportunities for imporvement"
            className={classes.rectangle4635}
          />
          <div className={classes.email}>Opportunities for imporvement</div>
        </div>
        <br></br>
        <div className={classes._3}>

          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            name="videoParagraph"
            onChange={(event) => setVideoParagraph(event.target.value)}
            defaultValue="Video strategy"
            className={classes.rectangle4635}
          />
          <div className={classes.aboutTheRestaurant}>Video strategy</div>
        </div>
        <div className={classes._5}>
          <TextField
            fullWidth
            label="Search for videos / Add iCloud Shared link"
            id="fullWidth"
            name="videos"
            onChange={handleChangeVideos}
            className={classes.rectangle4633} />
          <div className={classes.uploadVideos}>Upload videos</div>

        </div>

        <div className={classes._7}>
          <input
            className={classes.rectangle46311}
            type="file"
            id="image"
            accept="image/*"
            onChange={onChangeImage}
          />
          <div className={classes.uploadVideos}>Upload an image</div>

        </div>
        <Button_StateNormalTypePrimary
          onClick={handleSubmit}
          className={classes.button}
          hide={{
            iconOutlineCheckCircle: true,
            iconOutlineArrowRight: true,
          }}
          text={{
            getStartedNow: <div className={classes.getStartedNow}>Submit</div>,
          }}
        />
<br></br>
<br></br>
{isSubmittedSuccessfully && (
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              Form submitted successfully!
            </MuiAlert>
          </Snackbar>
        )}
      </div>
<br></br>
<br></br>
<br></br>
<br></br>
    </>
  );
});

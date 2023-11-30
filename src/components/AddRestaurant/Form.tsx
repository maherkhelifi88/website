import React, { ChangeEvent, useState, FC, memo } from 'react';
import { TextField , Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Form.module.css';
import axios from 'axios';
import MuiAlert from '@mui/material/Alert';
interface IState {
  name: string;
  about: string;
  customerLove: string;
  opportunities: string;
  videoParagraph: string;
  videos: string[];
  image: File | null;
}
interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
/* @figmaId 159:2474 */
export const Form: FC<Props> = memo(function Form(props = {}) {
  const [formData, setFormData] = useState<IState>({
    name: '',
    about: '',
    customerLove: '',
    opportunities: '',
    videoParagraph: '',
    videos: [],
    image: null
  });
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [image, setimage] = useState<File | null>(null);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setimage(e.target.files[0]);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.name, e.target.value); // this line for debugging
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async () => {
    const data = new FormData();
  // Append text fields to FormData
  Object.keys(formData).forEach(key => {
    const formKey = key as keyof IState; // Type assertion
    if (formKey !== 'videos' && formKey !== 'image') {
      data.append(formKey, formData[formKey]);
    }
  });
  // Special handling for 'videos'
  // Assuming it's an array of strings, convert to JSON string
  if (formData.videos.length) {
    data.append('videos', JSON.stringify(formData.videos));
  }

  // Append selected image if it exists
  if (formData.image) {
    data.append('image', formData.image);
  }

  console.log(data)
  try {
    const response = await axios.post('http://localhost:3001/api/restaurant', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response.data);
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
            onChange={handleChange}
            className={classes.rectangle463} />
        </div>
        <div className={classes._4}>

          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            defaultValue="About"
            name="about"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            defaultValue="Opportunities for imporvement"
            className={classes.rectangle4635}
          />
          <div className={classes.email}>Opportunities for imporvement</div>
        </div>
        <div className={classes._3}>

          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            name="videoParagraph"
            onChange={handleChange}
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
            onChange={handleChange}
            className={classes.rectangle463} />
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

{isSubmittedSuccessfully && (
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              Form submitted successfully!
            </MuiAlert>
          </Snackbar>
        )}
      </div>

    </>
  );
});

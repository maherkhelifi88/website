import React, { FC, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import resets from '../_resets.module.css';
import classes from './Group427318977.module.css';
import { Rectangle4255Icon } from './Rectangle4255Icon.js';
import { Rectangle34624121Icon } from './Rectangle34624121Icon.js';
import Rating from '@mui/material/Rating';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


const WhiteTextField = styled(TextField)({
  backgroundColor: 'white',
  color: 'white',
  '& .MuiInputBase-input': {
    color: 'white', // Text color
    fontSize: '1.5rem', // Adjust the font size as needed
    fontFamily: [
      'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue',
      'Arial', 'Noto Sans', 'Liberation Sans', 'sans-serif'
    ].join(','),
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white', // Underline color when textfield is not focused
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white', // Underline color when textfield is focused
  }
});
interface Props {
  className?: string;
}
interface Feedback {
  customerName: string;
  feedback: string;
  date: Date;
}
interface Video {
  url: string;
  rating: number;
}
interface Image {
  url: string;
  rating: number;
}
interface Persona {
  _id: string;
  name: string;
  image: Image[];
  status: string;
  about: string;
  videoParagraph: string;
  videosWalid: Video[];
  videosAmal: Video[];
  rate: number;
  feedbacks: Feedback[];
}


export const Group427318977: FC<Props> = memo(function Group427318977(props = {}) {
  const [persona, setPersona] = useState<Persona | null>(null);
  const { id } = useParams<{ id: string }>();
  const [audience, setAudience] = useState('');
  const [focusOn, setFocusOn] = useState('');
  const [and, setAnd] = useState('');
  const [show, setShow] = useState('');
  const [rate, setRate] = useState(4);
  const [openAlert, setOpenAlert] = useState(false);
  const [rate1, setRate1] = useState(4);
  const [rate2, setRate2] = useState(4);
  const [rate3, setRate3] = useState(4);
  const [rate4, setRate4] = useState(4);
  const [rate5, setRate5] = useState(4);
  const [rate6, setRate6] = useState(4);
  const [rate7, setRate7] = useState(4);
  const [rate8, setRate8] = useState(4);
  const [rate9, setRate9] = useState(4);
  const [rate10, setRate10] = useState(4);

  useEffect(() => {
    if (id) {
      fetch(`https://leapback-d796b66e0016.herokuapp.com/api/persona/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setPersona(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [id]);


  const handleSubmit = async () => {
    if (!persona) {
      console.error('Persona is null, cannot submit');
      return;
    }
    const briefData = {
      restaurant_id: persona._id,
      name: persona.name,
      rate1,
      rate2,
      rate3,
      rate4,
      rate5,
      rate6,
      rate7,
      rate8,
      rate9,
      rate10,

    };

    try {
      const response = await fetch('https://leapback-d796b66e0016.herokuapp.com/api/persona/rate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(briefData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Reviw Submitted:', data);
      setOpenAlert(true);
    } catch (error) {
      console.error('Error while saving brief:', error);
    }
  };
  return (
    <>
      {persona ? (
        <div >
          <div className={classes.bg}></div>
          <div className={classes.theBottleHouse}>{persona.name}</div>
          <div className={classes.aboutSection}>About Section</div>
          <div className={classes.seattleBasedWineServingSpotItS}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>{persona.about}</span>
            </p>
          </div>

          <div className={classes.rectangle34624117}></div>
          <div className={classes.rectangle34624118}></div>
          <div className={classes.wineBar}>wine bar</div>
          <div className={classes.smallPlates}>small plates</div>
          <div className={classes.rectangle34624122}></div>
          <div className={classes.happyHour}>Happy hour</div>
          <div className={classes.rectangle34624123}></div>
          <div className={classes.orangeWine}>Orange wine</div>
          <div className={classes.videoIdeas}>
            <div className={classes.textBlock}>Video Ideas</div>
          </div>

          <a href={persona.videosWalid[0].url} target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop className={classes.dALLE202312810358CreateAPromot}>
              <source src={persona.videosWalid[0].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
          <video autoPlay muted loop className={classes.dALLE2023128103642CreateAPromo}>
            <source src={persona.videosWalid[1].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video autoPlay muted loop className={classes.image}>
            <source src={persona.videosWalid[2].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay muted loop className={classes.image2}>
            <source src={persona.videosWalid[3].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={classes.themesPartiesHappyHours2}>Themes, parties, happy hours</div>
          <div className={classes.educationalVideosLearnAndTry}>Educational videos. learn and try! </div>
          <div className={classes.educationalVideosLearnAndTry1}>Educational videos. learn and try! </div>
          <div className={classes.christmasThemedVideosWithXmasT}>Christmas themed videos with Xmas themed drinks</div>
          <div className={classes.themesPartiesHappyHours}>Themes, parties, happy hours</div>
          <div className={classes.themesNote}>Note: Click on the video to download!</div>
          <div className={classes.wineClubWorkYourWinePaletteWit}>
            Wine club. work your wine palette with natural wine.{' '}
          </div>
          <Rating name="size-large"
            defaultValue={rate1}
            className={classes.themesStar1}
            onChange={(event, newValue) => {
              setRate1(newValue ?? 5); // Replace 0 with your default value
            }}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'gold', // or any other color
              },
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: 'transparent',
                stroke: 'white', // Border color
                strokeWidth: 0.7,
              }
            }}
          />
          <Rating name="size-large"
            defaultValue={rate2}
            className={classes.themesStar2}
            onChange={(event, newValue) => {
              setRate2(newValue ?? 5); // Replace 0 with your default value
            }}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'gold', // or any other color
              },
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: 'transparent',
                stroke: 'white', // Border color
                strokeWidth: 0.7,
              }
            }}
          />
          <Rating name="size-large"
            defaultValue={rate3}
            className={classes.themesStar3}
            onChange={(event, newValue) => {
              setRate3(newValue ?? 5); // Replace 0 with your default value
            }}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'gold', // or any other color
              },
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: 'transparent',
                stroke: 'white', // Border color
                strokeWidth: 0.7,
              }
            }}
          />

          <Rating name="size-large"
            defaultValue={rate4}
            className={classes.themesStar4}
            onChange={(event, newValue) => {
              setRate4(newValue ?? 5); // Replace 0 with your default value
            }}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'gold', // or any other color
              },
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: 'transparent',
                stroke: 'white', // Border color
                strokeWidth: 0.7,
              }
            }}
          />

          <Rating name="size-large"
            defaultValue={rate5}
            className={classes.themesStar5}
            onChange={(event, newValue) => {
              setRate5(newValue ?? 5); // Replace 0 with your default value
            }}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'gold', // or any other color
              },
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: 'transparent',
                stroke: 'white', // Border color
                strokeWidth: 0.7,
              }
            }}
          />

          <Rating name="size-large"
            defaultValue={rate6}
            className={classes.themesStar6}
            onChange={(event, newValue) => {
              setRate6(newValue ?? 5); // Replace 0 with your default value
            }}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'gold', // or any other color
              },
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: 'transparent',
                stroke: 'white', // Border color
                strokeWidth: 0.7,
              }
            }}
          />

          <Rating name="size-large"
            defaultValue={rate7}
            className={classes.themesStar7}
            onChange={(event, newValue) => {
              setRate7(newValue ?? 5); // Replace 0 with your default value
            }}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'gold', // or any other color
              },
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: 'transparent',
                stroke: 'white', // Border color
                strokeWidth: 0.7,
              }
            }}
          />

          <Rating name="size-large"
            defaultValue={rate8}
            className={classes.themesStar8}
            onChange={(event, newValue) => {
              setRate8(newValue ?? 5); // Replace 0 with your default value
            }}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'gold', // or any other color
              },
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: 'transparent',
                stroke: 'white', // Border color
                strokeWidth: 0.7,
              }
            }}
          />

          <Rating name="size-large"
            defaultValue={rate9}
            className={classes.themesStar9}
            onChange={(event, newValue) => {
              setRate9(newValue ?? 5); // Replace 0 with your default value
            }}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'gold', // or any other color
              },
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: 'transparent',
                stroke: 'white', // Border color
                strokeWidth: 0.7,
              }
            }}
          />

          <Rating name="size-large"
            defaultValue={rate10}
            className={classes.themesStar10}
            onChange={(event, newValue) => {
              setRate10(newValue ?? 5);
            }}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'gold', // or any other color
              },
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: 'transparent',
                stroke: 'white', // Border color
                strokeWidth: 0.7,
              }
            }}
          />
<div className={classes.video_idea}>
<div
  style={{
    backgroundImage: persona.image && persona.image.length > 0
      ? `url('${persona.image[0].url}')`
      : "none"
  }}
  className={classes.f0eb01a7774b433188739dba0afa23}
>
</div>
<div className={classes.rectangle34624112}></div>
<div className={classes.dateNight}>
  <div className={classes.textBlock3}>Date </div>
  <div className={classes.textBlock4}>Night</div>
</div>

</div>

<div className={`${resets.storybrainResets} ${classes.root}`}>
<div
  style={{
    backgroundImage: persona.image && persona.image.length > 0
      ? `url('${persona.image[1].url}')`
      : "none"
  }}
  className={classes.f0eb01a7774b433188739dba0afa23}
></div>
<div className={classes.rectangle34624112}></div>
<div className={classes.naturalWineLovers}>
  <div className={classes.textBlock19}>Natural Wine</div>
  <div className={classes.textBlock20}> Lovers</div>
</div>
</div>




<div className={classes.personaIdeas}>
<div className={classes.textBlock5}>Persona Ideas</div>
</div>
<div className={classes.videoLibrary}>
<div className={classes.textBlock10}>Video Library</div>
</div>
<div className={classes.rectangle4255}>
<Rectangle4255Icon className={classes.icon} />
</div>

<div className="container">

<button onClick={handleSubmit} className={classes.submit}>Submit review</button>

<Snackbar open={openAlert} autoHideDuration={6000} onClose={() => setOpenAlert(false)}>
<Alert onClose={() => setOpenAlert(false)} severity="success" sx={{ width: '100%' }}>
    Review submitted
</Alert>
</Snackbar>
</div>

<a href={persona.videosAmal[0].url} target="_blank" rel="noopener noreferrer">
<video autoPlay muted loop className={classes.screenshot2023118At10391}>
  <source src={persona.videosAmal[0].url} type="video/mp4" />
  Your browser does not support the video tag.
</video>
</a>
<a href={persona.videosAmal[1].url} target="_blank" rel="noopener noreferrer">
<video autoPlay muted loop className={classes.screenshot2023118At10401}>
  <source src={persona.videosAmal[1].url} type="video/mp4" />
  Your browser does not support the video tag.
</video>
</a>
<a href={persona.videosAmal[2].url} target="_blank" rel="noopener noreferrer">
<video autoPlay muted loop className={classes.screenshot2023118At10392}>
  <source src={persona.videosAmal[2].url} type="video/mp4" />
  Your browser does not support the video tag.
</video>
</a>
<a href={persona.videosAmal[3].url} target="_blank" rel="noopener noreferrer">
<video autoPlay muted loop className={classes.screenshot2023118At10402}>
  <source src={persona.videosAmal[3].url} type="video/mp4" />
  Your browser does not support the video tag.
</video>
</a>


        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>

  );
});

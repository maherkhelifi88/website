import React, { FC, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import resets from '../_resets.module.css';
import classes from './Group427318977.module.css';
import { Rectangle4255Icon } from './Rectangle4255Icon.js';
import { Rectangle34624121Icon } from './Rectangle34624121Icon.js';
import Rating from '@mui/material/Rating';


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

interface Persona {
  _id: string;
  name: string;
  image: string[];
  status: string;
  about: string;
  videoParagraph: string;
  videos: string[];
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
      audience,
      focusOn,
      and,
      show,
      restaurant_id: persona._id,
      name: persona.name,
      rate,
    };

    try {
      const response = await fetch('https://leapback-d796b66e0016.herokuapp.com/api/brief/', {
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
      console.log('Brief saved:', data);
    } catch (error) {
      console.error('Error while saving brief:', error);
    }
  };
  return (
    <>
      {persona ? (
        <div >


          <div className={classes.bg}></div>

          <Rating name="size-large"
            defaultValue={rate}
            className={classes.themesStar}
            onChange={(event, newValue) => {
              setRate(newValue ?? 5); // Replace 0 with your default value
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
            defaultValue={rate}
            className={classes.themesStar1}
            onChange={(event, newValue) => {
              setRate(newValue ?? 5); // Replace 0 with your default value
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
            defaultValue={rate}
            className={classes.themesStar2}
            onChange={(event, newValue) => {
              setRate(newValue ?? 5); // Replace 0 with your default value
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
            defaultValue={rate}
            className={classes.themesStar3}
            onChange={(event, newValue) => {
              setRate(newValue ?? 5); // Replace 0 with your default value
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
            defaultValue={rate}
            className={classes.themesStar4}
            onChange={(event, newValue) => {
              setRate(newValue ?? 5); // Replace 0 with your default value
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
            defaultValue={rate}
            className={classes.themesStar5}
            onChange={(event, newValue) => {
              setRate(newValue ?? 5); // Replace 0 with your default value
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
            defaultValue={rate}
            className={classes.themesStar6}
            onChange={(event, newValue) => {
              setRate(newValue ?? 5); // Replace 0 with your default value
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
            defaultValue={rate}
            className={classes.themesStar7}
            onChange={(event, newValue) => {
              setRate(newValue ?? 5); // Replace 0 with your default value
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
            defaultValue={rate}
            className={classes.themesStar8}
            onChange={(event, newValue) => {
              setRate(newValue ?? 5); // Replace 0 with your default value
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
            defaultValue={rate}
            className={classes.themesStar9}
            onChange={(event, newValue) => {
              setRate(newValue ?? 5); // Replace 0 with your default value
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

          <video autoPlay muted loop className={classes.dALLE202312810358CreateAPromot}>
            <source src={persona.videos[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay muted loop className={classes.dALLE2023128103642CreateAPromo}>
            <source src={persona.videos[1]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>



          <div className={classes.theBottleHouse}>{persona.name}</div>
          <div className={classes.videoIdeas}>
            <div className={classes.textBlock}>Video</div>
            <div className={classes.textBlock2}>Ideas</div>
          </div>


          <video autoPlay muted loop className={classes.image}>
            <source src={persona.videos[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay muted loop className={classes.image2}>
            <source src={persona.videos[1]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video autoPlay muted loop className={classes.image20}>
            <source src={persona.videos[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay muted loop className={classes.image19}>
            <source src={persona.videos[1]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={classes.video_idea}>
            <div
              style={{
                backgroundImage: persona.image && persona.image.length > 0
                  ? `url('${persona.image[0]}')`
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

          <div className={classes.christmasThemedVideosWithXmasT}>Christmas themed videos with Xmas themed drinks</div>
          <div className={classes.themesPartiesHappyHours}>Themes, parties, happy hours</div>
          <div className={classes.themesNote}>Note: Click on the video to download!</div>


          <div className={classes.personaIdeas}>
            <div className={classes.textBlock5}>Persona</div>
            <div className={classes.textBlock6}>Ideas</div>
          </div>
          <div className={classes.newDesignBrief}>
            <div className={classes.textBlock7}>New </div>
            <div className={classes.textBlock8}>Design </div>
            <div className={classes.textBlock9}>Brief</div>
          </div>

          <div className={classes.rateEx}>
            <div className={classes.textBlockrate}>Rate your Experience with us : </div>

          </div>
          <div className={classes.videoLibrary}>
            <div className={classes.textBlock10}>Video </div>
            <div className={classes.textBlock11}>Library</div>
          </div>
          <div className={classes.themesPartiesHappyHours2}>Themes, parties, happy hours</div>
          <div className={classes.educationalVideosLearnAndTry}>Educational videos. learn and try! </div>
          <div className={classes.rectangle4255}>
            <Rectangle4255Icon className={classes.icon} />
          </div>

          <div className={classes.rectangle34624121}>
            <Rectangle34624121Icon className={classes.icon2} />
          </div>
          <button className={classes.addMore}>add more</button>
          <div className={classes.myAudienceIs}>My audience is</div>
          <div className={classes.iWantAVideoThatFocusesOn}>I want a video that focuses on </div>

          <div className="container">
            <WhiteTextField
              onChange={(e) => setAudience(e.target.value)}
              className={classes.line314}
              variant="standard"
              multiline
              name='audience'
              focused
              maxRows={4}
            />
            <WhiteTextField
              onChange={(e) => setFocusOn(e.target.value)}
              className={classes.line315}
              variant="standard"
              multiline
              name='focusOn'
              focused
              maxRows={4}
            />
            <div className={classes.and}>and </div>
            <WhiteTextField
              onChange={(e) => setAnd(e.target.value)}
              className={classes.line316}
              variant="standard"
              multiline
              name='and'
              focused
              maxRows={4}
            />
            <div className={classes.iWantToShow}>I want to show</div>

            <WhiteTextField
              onChange={(e) => setShow(e.target.value)}
              className={classes.line317}
              variant="standard"
              multiline
              name='show'
              focused
              maxRows={3}
            />
            <button onClick={handleSubmit} className={classes.submit}>Submit</button>
          </div>

          <a href={persona.videos[0]} target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop className={classes.screenshot2023118At10391}>
              <source src={persona.videos[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
          <a href={persona.videos[1]} target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop className={classes.screenshot2023118At10401}>
              <source src={persona.videos[1]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
          <a href={persona.videos[0]} target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop className={classes.screenshot2023118At10392}>
              <source src={persona.videos[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
          <div className={classes.screenshot2023118At10402}></div>

          <a href={persona.videos[1]} target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop className={classes.screenshot2023118At10402}>
              <source src={persona.videos[1]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>

          <div className={classes.wineClubWorkYourWinePaletteWit}>
            Wine club. work your wine palette with natural wine.{' '}
          </div>
          <div className={classes.aboutSection}>About Section</div>
          <div className={classes.rectangle34624117}></div>
          <div className={classes.rectangle34624118}></div>
          <div className={classes.wineBar}>wine bar</div>
          <div className={classes.smallPlates}>small plates</div>
          <div className={classes.rectangle34624122}></div>
          <div className={classes.happyHour}>Happy hour</div>
          <div className={classes.rectangle34624123}></div>
          <div className={classes.orangeWine}>Orange wine</div>
          <div className={classes.editedDec7th2023}>Edited Dec, 7th, 2023</div>
          <div className={classes.seattleBasedWineServingSpotItS}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>{persona.about}</span>


            </p>


          </div>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>

  );
});

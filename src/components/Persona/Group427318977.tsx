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
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: '20px',
          borderColor: '#2aebec',
          color: '#2aebec',
          '&:hover': {
            borderColor: 'white',
          },
        },
      },
    },
  },
});


export const Group427318977: FC<Props> = memo(function Group427318977(props = {}) {
  const [persona, setPersona] = useState<Persona | null>(null);
  const { id } = useParams<{ id: string }>();
  const [audience, setAudience] = useState('');
  const [focusOn, setFocusOn] = useState('');
  const [and, setAnd] = useState('');
  const [show, setShow] = useState('');
  const [rate, setRate] = useState(4);
  const [feedbacks, setfeedbacks] = useState('');
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
      feedbacks,
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
      console.error('Error while saving data:', error);
    }
  };


  const handleClick = () => {
    if (persona && persona.videosWalid && persona.videosWalid.length > 0) {
      const url = persona.videosWalid[0].url;
      window.location.href = url; // Redirects to the URL if persona is not null
    } else {
      // Handle the case where persona is null or doesn't have videos
      console.error('Persona is null or videos are unavailable');
    }
  };

  const handleClick1 = () => {
    if (persona && persona.videosWalid && persona.videosWalid.length > 1) {
      const url = persona.videosWalid[1].url;
      window.location.href = url; // Redirects to the URL if persona is not null
    } else {
      // Handle the case where persona is null or doesn't have videos
      console.error('Persona is null or videos are unavailable');
    }
  };

  const handleClick2 = () => {
    if (persona && persona.videosWalid && persona.videosWalid.length > 2) {
      const url = persona.videosWalid[2].url;
      window.location.href = url; // Redirects to the URL if persona is not null
    } else {
      // Handle the case where persona is null or doesn't have videos
      console.error('Persona is null or videos are unavailable');
    }
  };

  const handleClick3 = () => {
    if (persona && persona.videosWalid && persona.videosWalid.length > 3) {
      const url = persona.videosWalid[3].url;
      window.location.href = url; // Redirects to the URL if persona is not null
    } else {
      // Handle the case where persona is null or doesn't have videos
      console.error('Persona is null or videos are unavailable');
    }
  };
  const handleClick4 = () => {
    if (persona && persona.image && persona.image.length > 0 ) {
      const url = persona.image[0].url;
      window.location.href = url; // Redirects to the URL if persona is not null
    } else {
      // Handle the case where persona is null or doesn't have videos
      console.error('Persona is null or images are unavailable');
    }
  };
  const handleClick5 = () => {
    if (persona && persona.image && persona.image.length > 1 ) {
      const url = persona.image[1].url;
      window.location.href = url; // Redirects to the URL if persona is not null
    } else {
      // Handle the case where persona is null or doesn't have videos
      console.error('Persona is null or images are unavailable');
    }
  };

  const handleClick7 = () => {
    if (persona && persona.videosAmal && persona.videosAmal.length > 0) {
      const url = persona.videosAmal[0].url;
      window.location.href = url; // Redirects to the URL if persona is not null
    } else {
      // Handle the case where persona is null or doesn't have videos
      console.error('Persona is null or videos are unavailable');
    }
  };
  const handleClick8 = () => {
    if (persona && persona.videosAmal && persona.videosAmal.length > 1) {
      const url = persona.videosAmal[1].url;
      window.location.href = url; // Redirects to the URL if persona is not null
    } else {
      // Handle the case where persona is null or doesn't have videos
      console.error('Persona is null or videos are unavailable');
    }
  };

  const handleClick9 = () => {
    if (persona && persona.videosAmal && persona.videosAmal.length > 2) {
      const url = persona.videosAmal[2].url;
      window.location.href = url; // Redirects to the URL if persona is not null
    } else {
      // Handle the case where persona is null or doesn't have videos
      console.error('Persona is null or videos are unavailable');
    }
  };

  const handleClick10 = () => {
    if (persona && persona.videosAmal && persona.videosAmal.length > 3) {
      const url = persona.videosAmal[3].url;
      window.location.href = url; // Redirects to the URL if persona is not null
    } else {
      // Handle the case where persona is null or doesn't have videos
      console.error('Persona is null or videos are unavailable');
    }
  };
 
  
  return (
    <>
      {persona ? (
        <div className={classes.container}>

          <div className={classes.theBottleHouse}>{persona.name}</div>

          <div className={classes._1}>

            <div className={classes.aboutSection}>About Section</div>


            <div className={classes.seattleBasedWineServingSpotItS}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>{persona.about}</span>
              </p>
            </div>
          </div>


          <div className={classes._2}>

            <div className={classes._8}>
              <div className={classes._9}>
                <ThemeProvider theme={theme}>
                  <Button variant="outlined" size="medium">
                    Marroco
                  </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <Button variant="outlined" size="medium">
                    Mediterranean
                  </Button>
                </ThemeProvider></div>

              <div className={classes._9}>
                <ThemeProvider theme={theme}>
                  <Button variant="outlined" size="medium">
                    Happy hour
                  </Button>
                </ThemeProvider>

                <ThemeProvider theme={theme}>
                  <Button variant="outlined" size="medium">
                    Wine bar
                  </Button>
                </ThemeProvider>
              </div>
            </div>
          </div>


          {
            persona.videosWalid && persona.videosWalid.length > 0 && (
              <div className={classes._1}>

                <div className={classes._3}>

                  <div className={classes.videoIdeas}>
                    <div className={classes.textBlock}>Video Ideas</div>
                  </div>

                  <div className={classes.themesPartiesHappyHours}>Themes, parties, happy hours</div>

                </div>

                <div className={classes._8}>
                  <div className={classes._9}>

                    {
                      persona.videosWalid && persona.videosWalid.length > 0 && (
                        <div className={classes._4}>
                          <a href={persona.videosWalid[0].url} target="_blank" rel="noopener noreferrer">
                            <video autoPlay muted loop className={classes.dALLE202312810358CreateAPromot}>
                              <source src={persona.videosWalid[0].url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </a>
                          <div className={classes.christmasThemedVideosWithXmasT}>Christmas themed videos with Xmas themed drinks</div>

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
                          <ThemeProvider theme={theme}>
                            <Button     onClick={handleClick} variant="outlined" size="medium">
                              Download
                            </Button>
                          </ThemeProvider>


                        </div>
                      )
                    }



                    {
                      persona.videosWalid && persona.videosWalid.length > 1 && (
                        <div className={classes._4}>
                          <a href={persona.videosWalid[1].url} target="_blank" rel="noopener noreferrer">
                            <video autoPlay muted loop className={classes.dALLE202312810358CreateAPromot}>
                              <source src={persona.videosWalid[1].url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </a>
                          <div className={classes.christmasThemedVideosWithXmasT}> Wine club. work your wine palette with natural wine.</div>

                          <Rating name="size-large"
                            defaultValue={rate2}
                            className={classes.themesStar1}
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
                          <ThemeProvider theme={theme}>
                            <Button onClick={handleClick1} variant="outlined" size="medium">
                              Download
                            </Button>
                          </ThemeProvider>


                        </div>
                      )
                    }


                  </div>
                </div>
                <div className={classes._8}>
                  <div className={classes._9}>

                    {
                      persona.videosWalid && persona.videosWalid.length > 2 && (
                        <div className={classes._4}>
                          <a href={persona.videosWalid[2].url} target="_blank" rel="noopener noreferrer">
                            <video autoPlay muted loop className={classes.dALLE202312810358CreateAPromot}>
                              <source src={persona.videosWalid[2].url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </a>
                          <div className={classes.christmasThemedVideosWithXmasT}>Educational videos. learn and try!</div>

                          <Rating name="size-large"
                            defaultValue={rate3}
                            className={classes.themesStar1}
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
                          <ThemeProvider theme={theme}>
                            <Button onClick={handleClick2} variant="outlined" size="medium">
                              Download
                            </Button>
                          </ThemeProvider>


                        </div>
                      )
                    }
                    {
                      persona.videosWalid && persona.videosWalid.length > 3 && (
                        <div className={classes._4}>
                          <a href={persona.videosWalid[3].url} target="_blank" rel="noopener noreferrer">
                            <video autoPlay muted loop className={classes.dALLE202312810358CreateAPromot}>
                              <source src={persona.videosWalid[3].url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </a>
                          <div className={classes.christmasThemedVideosWithXmasT}>Christmas themed videos with Xmas themed drinks</div>

                          <Rating name="size-large"
                            defaultValue={rate4}
                            className={classes.themesStar1}
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
                          <ThemeProvider theme={theme}>
                            <Button onClick={handleClick3} variant="outlined" size="medium">
                              Download
                            </Button>
                          </ThemeProvider>


                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            )
          }



          {
            persona.image && persona.image.length > 0 && (
              <div className={classes._1}>

                <div className={classes._3}>

                  <div className={classes.videoIdeas}>
                    <div className={classes.textBlock}>Persona Ideas</div>
                  </div>

                  <div className={classes.themesPartiesHappyHours}>Themes, parties, happy hours</div>

                </div>

                <div className={classes._8}>
                  <div className={classes._9}>

                    {
                      persona.image && persona.image.length > 0 && (
                        <div className={classes._4}>
                          <div
                            style={{
                              backgroundImage: persona.image && persona.image.length > 1
                                ? `url('${persona.image[0].url}')`
                                : "none"
                            }}
                            className={classes.dALLE202312810358CreateAPromot}
                          >
                          </div>
                          <Rating name="size-large"
                            defaultValue={rate5}
                            className={classes.themesStar1}
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
                          <ThemeProvider theme={theme}>
                            <Button onClick={handleClick4} variant="outlined" size="medium">
                              Download
                            </Button>
                          </ThemeProvider>


                        </div>
                      )
                    }

                    {
                      persona.image && persona.image.length > 1 && (
                        <div className={classes._4}>
                          <div
                            style={{
                              backgroundImage: persona.image && persona.image.length > 1
                                ? `url('${persona.image[1].url}')`
                                : "none"
                            }}
                            className={classes.dALLE202312810358CreateAPromot}
                          >
                          </div>
                          <Rating name="size-large"
                            defaultValue={rate6}
                            className={classes.themesStar1}
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
                          <ThemeProvider theme={theme}>
                            <Button onClick={handleClick5} variant="outlined" size="medium">
                              Download
                            </Button>
                          </ThemeProvider>


                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            )}

          {
            persona.videosAmal && persona.videosAmal.length > 0 && (
              <div className={classes._1}>

                <div className={classes._3}>

                  <div className={classes.videoIdeas}>
                    <div className={classes.textBlock}>Video Library</div>
                  </div>

                  <div className={classes.themesPartiesHappyHours}>Themes, parties, happy hours</div>

                </div>

                <div className={classes._8}>
                  <div className={classes._9}>
                    {
                      persona.videosAmal && persona.videosAmal.length > 0 && (
                        <div className={classes._4}>
                          <a href={persona.videosAmal[0].url} target="_blank" rel="noopener noreferrer">
                            <video autoPlay muted loop className={classes.dALLE202312810358CreateAPromot}>
                              <source src={persona.videosAmal[0].url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </a>
                          <div className={classes.christmasThemedVideosWithXmasT}>Christmas themed videos with Xmas themed drinks</div>

                          <Rating name="size-large"
                            defaultValue={rate7}
                            className={classes.themesStar1}
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
                          <ThemeProvider theme={theme}>
                            <Button onClick={handleClick7}variant="outlined" size="medium">
                              Download
                            </Button>
                          </ThemeProvider>


                        </div>
                      )
                    }



                    {
                      persona.videosAmal && persona.videosAmal.length > 1 && (
                        <div className={classes._4}>
                          <a href={persona.videosAmal[1].url} target="_blank" rel="noopener noreferrer">
                            <video autoPlay muted loop className={classes.dALLE202312810358CreateAPromot}>
                              <source src={persona.videosAmal[1].url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </a>
                          <div className={classes.christmasThemedVideosWithXmasT}>Christmas themed videos with Xmas themed drinks</div>

                          <Rating name="size-large"
                            defaultValue={rate8}
                            className={classes.themesStar1}
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
                          <ThemeProvider theme={theme}>
                            <Button onClick={handleClick8} variant="outlined" size="medium">
                              Download
                            </Button>
                          </ThemeProvider>


                        </div>
                      )
                    }

                  </div>
                </div>
                <div className={classes._8}>
                  <div className={classes._9}>

                    {
                      persona.videosAmal && persona.videosAmal.length > 2 && (
                        <div className={classes._4}>
                          <a href={persona.videosAmal[2].url} target="_blank" rel="noopener noreferrer">
                            <video autoPlay muted loop className={classes.dALLE202312810358CreateAPromot}>
                              <source src={persona.videosAmal[2].url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </a>
                          <div className={classes.christmasThemedVideosWithXmasT}>Christmas themed videos with Xmas themed drinks</div>

                          <Rating name="size-large"
                            defaultValue={rate9}
                            className={classes.themesStar1}
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
                          <ThemeProvider theme={theme}>
                            <Button onClick={handleClick9}variant="outlined" size="medium">
                              Download
                            </Button>
                          </ThemeProvider>


                        </div>
                      )
                    }


                    {
                      persona.videosAmal && persona.videosAmal.length > 3 && (
                        <div className={classes._4}>
                          <a href={persona.videosAmal[3].url} target="_blank" rel="noopener noreferrer">
                            <video autoPlay muted loop className={classes.dALLE202312810358CreateAPromot}>
                              <source src={persona.videosAmal[3].url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </a>
                          <div className={classes.christmasThemedVideosWithXmasT}>Christmas themed videos with Xmas themed drinks</div>

                          <Rating name="size-large"
                            defaultValue={rate10}
                            className={classes.themesStar1}
                            onChange={(event, newValue) => {
                              setRate10(newValue ?? 5); // Replace 0 with your default value
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
                          <ThemeProvider theme={theme}>
                            <Button onClick={handleClick10} variant="outlined" size="medium">
                              Download
                            </Button>
                          </ThemeProvider>


                        </div>
                      )
                    }

                  </div>
                </div>

              </div>)}


          <div className={classes._1}>

            <div className={classes._3}>

              <div className={classes.videoIdeas}>
                <div className={classes.textBlock}>Feedback</div>
              </div>

              <div className={classes.themesPartiesHappyHours}>Your feedback will be genuinely appreciated.</div>

            

            </div>
            <WhiteTextField
              onChange={(e) => setfeedbacks(e.target.value)}
              className={classes.line314}
              variant="standard"
              multiline
              name='audience'
              focused
              maxRows={4}
            />
          </div>



          <Button className={classes.btn} onClick={handleSubmit} variant="contained" size="large" style={{ color: 'black', backgroundColor: '#ffd700', borderRadius: '20px'}}>
            Submit Review
          </Button>
          <Snackbar open={openAlert} autoHideDuration={6000} onClose={() => setOpenAlert(false)}>
            <Alert onClose={() => setOpenAlert(false)} severity="success" sx={{ width: '90%' }}>
              Review submitted
            </Alert>
          </Snackbar>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </div>

      ) : (
        <p>Loading...</p>
      )}
    </>

  );
});

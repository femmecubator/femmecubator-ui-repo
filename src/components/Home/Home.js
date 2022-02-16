import React from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import secondImage from './assets/secondimage.jpg';
import { ReactComponent as WorkathonSVG } from './assets/Listings.svg';
import { ReactComponent as MeetOnSlack } from './assets/MeetOnSlack.svg';
import { ReactComponent as FirstImage } from './assets/firstImage.svg';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PanToolIcon from '@material-ui/icons/PanTool';
import SchoolIcon from '@material-ui/icons/School';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import Carousel from 'react-material-ui-carousel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from 'components/Footer/Footer';
import { Link } from 'react-router-dom';

const isProgress = process.env['REACT_APP_WIP'] === 'true';

const BlueFilledButton = withStyles({
  root: {
    background: '#026FE4',
    borderRadius: '4px',
    height: '45px',
    padding: '10px 21px',
    color: 'white',
    margin: '0px',
    '&:hover': {
      background: '#550CCC',
      border: 'none',
    },
  },

  label: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 600,
    size: '18px',
  },
})(Button);

const WhiteOutlineButton = withStyles({
  root: {
    background: 'transparent',
    borderRadius: '4px',
    border: '1px solid #FFFFFF',
    height: '45px',
    padding: '10px 21px',
    color: 'white',
    margin: '0px',
    boxShadow: 'none',
    '&:hover': {
      background: '#550CCC',
      border: 'none',
    },
  },
  label: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 600,
    size: '18px',
  },
})(Button);

const BlueOutlineButton = withStyles({
  root: {
    background: 'transparent',
    borderRadius: '4px',
    border: '1px solid #016EE3',
    height: '45px',
    padding: '10px 21px',
    marginTop: 'auto',
    color: '#0263ca',
    boxShadow: 'none',
    '&:hover': {
      background: '#550CCC',
      border: 'none',
      color: 'white',
    },
    '@media (max-width: 799px)': {
      alignSelf: 'center',
      marginTop: 'auto',
      marginBottom: '20px',
    },
  },
  label: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 600,
    size: '18px',
  },
})(Button);

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  introContainer: {
    backgroundColor: 'white',
    height: '476px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    display: 'flex',
    '@media (max-width: 799px)': {
      height: '332px',
    },
  },
  topImageContainer: {
    backgroundColor: '#white',
    height: '476px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    '@media (max-width: 799px)': {
      height: '238px',
      order: '-1',
    },
  },
  bookAndContributeContainer: {
    height: '330px',
    backgroundColor: '#F2F7FF',
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: '45px',
    '@media (max-width: 799px)': {
      paddingTop: '0px',
      alignItems: 'center',
      height: '700px',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  workathonContainer: {
    height: '180px',
    backgroundColor: '#A454C2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 799px)': {
      height: '218px',
      flexDirection: 'column',
      padding: '10px 10px',
    },
  },
  ourMissionContainer: {
    height: '400px',
    backgroundImage: `url(${secondImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0% 30%',
    boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.5)',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 799px)': {
      height: 'auto',
      minHeight: '400px',
      padding: '20px 10px',
      justifyContent: 'center',
    },
  },
  carouselContainer: {
    height: 'auto',
    minHeight: '549px',
    backgroundColor: '#F2F7FF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    '@media (max-width: 799px)': {
      justifyContent: 'space-evenly',
      minHeight: '466px',
      padding: '30px 10px',
    },
  },
  carouselContainerDiv: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    padding: '0px 20px',
    marginTop: '40px',
    marginBottom: '40px',
    justifyContent: 'space-around',
    '@media (max-width: 799px)': {
      height: '466px',
      padding: '0px 10px',
      marginTop: '25px',
      marginBottom: '0px',
    },
  },
  joinSlackContainer: {
    height: '250px',
    backgroundColor: '#ABF5D1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 799px)': {
      height: '400px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  getConnectedHeader: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '28px',
    color: '#400CCC',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 799px)': {
      marginBottom: '15px',
      textAlign: 'center',
    },
  },
  title: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '21px',
    color: '#400CCC',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 799px)': {
      marginBottom: '15px',
    },
  },
  bookAndContributeComponentTitle: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '28px',
    color: '#400CCC',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 799px)': {
      marginBottom: '15px',
      textAlign: 'center',
    },
  },
  paragraph: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '21px',
    color: '#000000',
    marginBottom: '40px',
    '@media (max-width: 799px)': {
      fontSize: '16px',
      textAlign: 'center',
    },
  },
  firstContainerDiv: {
    padding: '20px',
    flexBasis: '430px',
    flexShrink: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '@media (max-width: 799px)': {
      width: '90%',
      alignItems: 'center',
    },
  },
  workathonSVG: {
    height: '100%',
    marginRight: '20px',
    '@media (max-height: 799px)': {
      textAlign: 'center',
      marginRight: '0px',
    },
  },
  meetOnSlackSVG: {
    height: '150px',
    '@media (max-height: 799px)': {
      textAlign: 'center',
      height: '150px',
    },
  },
  registerWebmaking: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '28px',
    color: '#FFFFFF',
    '@media (max-width: 799px)': {
      textAlign: 'center',
      fontSize: '21px',
    },
  },
  letGrow: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#FFFFFF',
    '@media (max-width: 799px)': {
      textAlign: 'center',
    },
  },
  workathonContainerDiv: {
    textAlign: 'left',
    '@media (max-width: 799px)': {
      textAlign: 'center',
      height: '100%',
    },
  },
  bookAndContributeComponents: {
    maxWidth: '360px',
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '@media (max-width: 799px)': {
      alignItems: 'center',
      width: '100%',
    },
  },
  bookAndContributeContainerParagraph: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    marginBottom: '40px',
    '@media (max-width: 799px)': {
      textAlign: 'center',
      marginBottom: '0px',
    },
  },
  ourMissionComponent: {
    flexBasis: '432px',
    flexShrink: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '177px',
    '@media (max-width: 799px)': {
      flexBasis: '80%',
      marginLeft: '0px',
      alignItems: 'center',
    },
  },
  ourMissionComponentParagraph: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '14px',
    color: 'white',
    marginBottom: '40px',
    '@media (max-width: 799px)': {
      textAlign: 'center',
    },
  },
  titleWhite: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '28px',
    color: 'white',
    marginBottom: '30px',
    '@media (max-width: 799px)': {
      textAlign: 'center',
    },
  },
  partnerSVG: {
    color: '#EB5757',
    marginRight: '15px',
  },
  mentorSVG: {
    color: '#F2994A',
    marginRight: '15px',
  },
  volunteerSVG: {
    color: '#719AF5',
    marginRight: '15px',
  },
  greenCircle: {
    width: '60px',
    height: '60px',
    minWidth: '60px',
    borderRadius: '50%',
    backgroundColor: '#ABF5D1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '8%',
    '@media (max-width: 799px)': {
      marginBottom: '27px',
    },
  },
  bookMentorsContainer: {
    display: 'flex',
    padding: '20px',
    '@media (max-width: 799px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  bookAndContributeContainerSVG: {
    color: '#400CCC',
  },

  myCarousel: {
    width: '100%',
    lineBreak: 'auto',
    textAlign: 'center',
  },

  carouselContainerComponents: {
    width: '320px',
    display: 'flex',
    flexShrink: 1,
    minHeight: '300px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px 20px',
    '@media (max-width: 799px)': {
      margin: 'auto',
      width: '90%',
      minHeight: '300px',
      padding: '0 10px',
    },
  },

  carouselComponentParagraph: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    '@media (max-width: 799px)': {
      marginBottom: '20px',
    },
  },
  inputForm: {
    height: '45px',
    border: 'none',
    width: '435px',
    borderRadius: '4px',
    padding: '0px 15px',
    marginBottom: '10px',
    marginRight: '10px',
    '@media (max-width: 799px)': {
      marginBottom: '10px',
      width: '90%',
      marginRight: '0px',
    },
    '&::placeholder': {
      fontFamily: ' Open Sans',
      fontSize: '16px',
    },
  },
  slackFormContainer: {
    display: 'flex',
    gap: 20,
    justifyContent: 'flex-start',
    '& h2': {
      maxWidth: 450,
    },
    '& button': {
      minWidth: 150,
      margin: 20,
    },
    '@media (max-width: 799px)': {
      flexDirection: 'column',
      gap: 0,
      width: '80%',
      alignItems: 'center',
    },
  },
  slackForm: {
    width: '100%',
    marginTop: '10px',
    '@media (max-width: 799px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  inProgress: {
    height: 'auto',
    background: '#4F4F4F',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '30px 138px',
    '@media (max-width: 1200px)': {
      height: 'auto',
      padding: '30px 50px',
    },
    '@media (max-width: 799px)': {
      height: 'auto',
      padding: '30px',
    },
  },
  inProgressHeader: {
    color: '#F2F2F2',
    fontSize: '21px',
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    marginBottom: '20px',
  },
  inProgressParagraph: {
    fontSize: '14px',
    color: '#F2F2F2',
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
  },
  joinSlackButton: {
    alignSelf: 'center',
  },
  linkStyle: {
    textDecoration: 'none',
  },
}));

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function Home() {
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    root,
    introContainer,
    topImageContainer,
    bookAndContributeContainer,
    workathonContainer,
    ourMissionContainer,
    carouselContainer,
    joinSlackContainer,
    title,
    getConnectedHeader,
    bookAndContributeComponentTitle,
    paragraph,
    firstContainerDiv,
    workathonSVG,
    meetOnSlackSVG,
    registerWebmaking,
    letGrow,
    workathonContainerDiv,
    bookAndContributeComponents,
    bookAndContributeContainerParagraph,
    ourMissionComponent,
    ourMissionComponentParagraph,
    titleWhite,
    mentorSVG,
    volunteerSVG,
    partnerSVG,
    greenCircle,
    bookMentorsContainer,
    bookAndContributeContainerSVG,
    carouselContainerComponents,
    carouselComponentParagraph,
    inputForm,
    slackFormContainer,
    slackForm,
    joinSlackButton,
    myCarousel,
    carouselContainerDiv,
    inProgress,
    inProgressHeader,
    inProgressParagraph,
    linkStyle,
  } = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <main className={root}>
        <Grid container>
          {/* {isProgress ? (
            <Grid className={inProgress} item xs={12}>
              <Typography variant="h2" className={inProgressHeader}>
                Thanks so much for stopping by!
              </Typography>
              <Typography
                {...{
                  variant: 'body1',
                  className: inProgressParagraph,
                  paragraph: true,
                }}
              >
                This is just a sneak peek of what we’re up to, but in Spring
                2021 we’ll be ready to raise the curtain on a full slate of new
                programming, resources and ways to get involved with our amazing
                community. (We promise it’ll be worth the wait!) In the
                meantime, subscribe for updates on femmecubator.org or reach out
                to us on Instagram @femmecubator.
              </Typography>
            </Grid>
          ) : null} */}
          <Grid className={introContainer} item xs={12} sm={6}>
            <div className={firstContainerDiv}>
              <Typography variant="h2" className={getConnectedHeader}>
                Hey girl, get connected!
              </Typography>
              <Typography
                {...{ variant: 'body1', className: paragraph, paragraph: true }}
              >
                From offering easy access to mentorship to helping you gain new
                skills, the Femmecubator community can jumpstart your career in
                tech.
              </Typography>
              <Link to="/register" className={linkStyle}>
                <BlueFilledButton
                  data-testid="styled-button"
                  variant="contained"
                >
                  JOIN TODAY
                </BlueFilledButton>
              </Link>
            </div>
          </Grid>
          <Grid className={topImageContainer} item xs={12} sm={6}>
            <FirstImage
              rel="preload"
              aria-label="Three women of color with laptops working together in an open office."
            />
          </Grid>
          <Grid className={bookAndContributeContainer} item xs={12}>
            <div className={bookMentorsContainer}>
              <div className={greenCircle}>
                <SchoolIcon
                  fontSize="large"
                  className={bookAndContributeContainerSVG}
                />
              </div>
              <div className={bookAndContributeComponents}>
                <Typography
                  variant="h2"
                  className={bookAndContributeComponentTitle}
                >
                  Connect with a mentor
                </Typography>
                <Typography
                  {...{
                    variant: 'body1',
                    className: bookAndContributeContainerParagraph,
                    paragraph: true,
                  }}
                >
                  Career-switching to UX Design or Web Development? Connect with
                  mentors who can help with portfolio reviews, practice
                  interviews or code challenge preps.
                </Typography>
              </div>
            </div>
            <div className={bookMentorsContainer}>
              <div className={greenCircle}>
                <KeyboardIcon
                  className={bookAndContributeContainerSVG}
                  fontSize="large"
                />
              </div>
              <div className={bookAndContributeComponents}>
                <Typography
                  variant="h2"
                  className={bookAndContributeComponentTitle}
                >
                  Host a workshop
                </Typography>
                <Typography
                  {...{
                    variant: 'body1',
                    className: bookAndContributeContainerParagraph,
                    paragraph: true,
                  }}
                >
                  Speak on topics you’re passionate about. We’re looking for
                  Designers or Developers from all levels to host talks or
                  tech-related workshops through our monthly LiT Talks event.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            {...{
              className: ourMissionContainer,
              'data-testid': 'background',
              item: true,
              xs: 12,
            }}
          >
            <div className={ourMissionComponent}>
              <Typography variant="h2" className={titleWhite}>
                Our mission
              </Typography>
              <Typography
                {...{
                  variant: 'body1',
                  className: ourMissionComponentParagraph,
                  paragraph: true,
                }}
              >
                Technology needs more women of color at the table. Femmecubator
                is an online community for women of color (WOC), including
                self-identified and non-binary individuals, who want to
                transform their careers - and the world - through tech. With
                access to resources and a supportive network of leaders, we’ll
                help you find your next step in tech.
              </Typography>
              <Link to="/register?type=mentor" className={linkStyle}>
                <WhiteOutlineButton variant="contained" color="primary">
                  JOIN TODAY
                </WhiteOutlineButton>
              </Link>
            </div>
          </Grid>
          <Grid
            {...{
              className: carouselContainer,
              'data-testid': 'home-carousel',
              item: true,
              xs: 12,
            }}
          >
            <Typography variant="h2" className={getConnectedHeader}>
              Get involved
            </Typography>
            {matches ? (
              <Carousel navButtonsAlwaysInvisible={true} className={myCarousel}>
                <div className={carouselContainerComponents}>
                  <Typography variant="h3" className={title}>
                    <FavoriteBorderOutlinedIcon
                      className={partnerSVG}
                      fontSize="large"
                    />
                    Support
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: carouselComponentParagraph,
                      paragraph: true,
                    }}
                  >
                    From launching this online space to building a growing
                    community for self-taught and career-switchers, we continue
                    our efforts to improve and provide a supportive experience.
                    <br />
                    <br />
                    Donors and partners work with us in many ways through
                    individual donations, pro-bono tech, or corporate
                    sponsorships.
                    <br />
                  </Typography>
                  <BlueOutlineButton variant="contained">
                    DONATE
                  </BlueOutlineButton>
                </div>
                <div className={carouselContainerComponents}>
                  <Typography variant="h3" className={title}>
                    <PanToolIcon className={volunteerSVG} fontSize="large" />
                    Volunteer
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: carouselComponentParagraph,
                      paragraph: true,
                    }}
                  >
                    Are you a UX or Web Dev bootcamp grad looking to expand your
                    skills? Have at least 5-7 hours a week to devote for
                    learning what it’s like to be in a team? Be part of our
                    agile team and dive into a 3-month AppDev Program.
                  </Typography>
                  <BlueOutlineButton variant="contained" color="primary">
                    APPLY TO VOLUNTEER
                  </BlueOutlineButton>
                </div>
                <div className={carouselContainerComponents}>
                  <Typography variant="h3" className={title}>
                    <SupervisorAccountIcon
                      className={mentorSVG}
                      fontSize="large"
                    />
                    Mentor
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: carouselComponentParagraph,
                      paragraph: true,
                    }}
                  >
                    Our members need you! If you are an industry expert in
                    Design or Development and can allot an hour a week for
                    career support ranging from tech interviews and
                    whiteboarding sessions to informational interviews.
                  </Typography>
                  <Link to="/register?type=mentor" className={linkStyle}>
                    <BlueOutlineButton variant="contained" color="primary">
                      SIGN UP TO BE A MENTOR
                    </BlueOutlineButton>
                  </Link>
                </div>
              </Carousel>
            ) : (
              <div className={carouselContainerDiv}>
                <div className={carouselContainerComponents}>
                  <Typography variant="h3" className={title}>
                    <FavoriteBorderOutlinedIcon
                      className={partnerSVG}
                      fontSize="large"
                    />
                    Support
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: carouselComponentParagraph,
                      paragraph: true,
                    }}
                  >
                    From launching this online space to building a growing
                    community for self-taught and career-switchers, we continue
                    our efforts to improve and provide a supportive experience.
                    <br />
                    <br />
                    Donors and partners work with us in many ways through
                    individual donations, pro-bono tech, or corporate
                    sponsorships.
                    <br />
                  </Typography>
                  <Link to="/about?page=support" className={linkStyle}>
                    <BlueOutlineButton variant="contained">
                      DONATE
                    </BlueOutlineButton>
                  </Link>
                </div>
                <div className={carouselContainerComponents}>
                  <Typography variant="h3" className={title}>
                    <PanToolIcon className={volunteerSVG} fontSize="large" />
                    Volunteer
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: carouselComponentParagraph,
                      paragraph: true,
                    }}
                  >
                    Are you a UX or Web Dev bootcamp grad looking to expand your
                    skills? Have at least 5-7 hours a week to devote for
                    learning what it’s like to be in a team? Be part of our
                    agile team and dive into a 3-month AppDev Program.
                  </Typography>
                  <Link to="/about?page=volunteer" className={linkStyle}>
                    <BlueOutlineButton variant="contained" color="primary">
                      APPLY TO VOLUNTEER
                    </BlueOutlineButton>
                  </Link>
                </div>
                <div className={carouselContainerComponents}>
                  <Typography variant="h3" className={title}>
                    <SupervisorAccountIcon
                      className={mentorSVG}
                      fontSize="large"
                    />
                    Mentor
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: carouselComponentParagraph,
                      paragraph: true,
                    }}
                  >
                    Our members need you! If you are an industry expert in
                    Design or Development and can allot an hour a week for
                    career support ranging from tech interviews and
                    whiteboarding sessions to informational interviews.
                  </Typography>
                  <Link to="/register?type=mentor" className={linkStyle}>
                    <BlueOutlineButton variant="contained" color="primary">
                      SIGN UP TO BE A MENTOR
                    </BlueOutlineButton>
                  </Link>
                </div>
              </div>
            )}
          </Grid>
          <Grid className={joinSlackContainer} item xs={12}>
            <MeetOnSlack aria-label="Whatever" className={meetOnSlackSVG} />
            <div className={slackFormContainer}>
              <Typography
                variant="h2"
                className={bookAndContributeComponentTitle}
              >
                Join our community of Designers and Developers on Slack.
              </Typography>
              <Link
                {...{
                  target: '_blank',
                  to: {
                    pathname:
                      'https://join.slack.com/t/femmecubator/shared_invite/zt-nc0vbhl1-5j383UNk3wZTHFkn7_IW~A',
                  },
                  className: linkStyle,
                }}
              >
                <BlueFilledButton className={joinSlackButton}>
                  Join us on Slack
                </BlueFilledButton>
              </Link>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

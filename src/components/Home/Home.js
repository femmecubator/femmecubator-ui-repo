import React, { useEffect, useState } from 'react';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { Typography, Button, List } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import mainImage from './assets/firstImage.jpg';
import secondImage from './assets/secondimage.jpg';
import { ReactComponent as WorkathonSVG } from './assets/Listings.svg';
import { ReactComponent as MeetOnSlack } from './assets/MeetOnSlack.svg';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PanToolIcon from '@material-ui/icons/PanTool';
import SchoolIcon from '@material-ui/icons/School';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import Carousel from 'react-material-ui-carousel';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const BlueFilledButton = withStyles({
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

export const WhiteOutlineButton = withStyles({
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

export const BlueOutlineButton = withStyles({
  root: {
    background: 'transparent',
    borderRadius: '4px',
    border: '1px solid #026FE4',
    height: '45px',
    padding: '10px 21px',
    marginTop: 'auto',
    color: '#026FE4',
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
    backgroundColor: '#white',
    height: '476px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    display: 'flex',
    '@media (max-width: 799px)': {
      height: '332px',
      padding: '0px',
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
  topImage: {
    objectFit: 'cover',
    width: '100%',
    height: '476px',
    '@media (max-width: 799px)': {
      height: '238px',
      objectPosition: '0% 34%',
    },
  },
  bookAndContributeContainer: {
    height: '330px',
    backgroundColor: '#F2F7FF',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '@media (max-width: 799px)': {
      height: '700px',
      flexWrap: 'wrap',
      alignItems: 'space-around',
      flexDirection: 'column',
    },
  },
  workathonContainer: {
    height: '180px',
    backgroundColor: '#BB6BD9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    '@media (max-width: 799px)': {
      height: '218px',
      flexDirection: 'column',
      padding: '10px 0px',
      gap: '0px',
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
      justifyContent: 'center',
    },
  },
  carouselContainer: {
    height: '549px',
    backgroundColor: '#F2F7FF',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 20px',
    gap: '20px',
    justifyContent: 'space-around',
    '@media (max-width: 799px)': {
      height: '466px',
      padding: '0px',
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
    gap: '20px',
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
    gap: '20px',
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
    '@media (max-height: 799px)': {
      textAlign: 'center',
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
      width: '300px',
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
  },
  mentorSVG: {
    color: '#F2994A',
  },
  volunteerSVG: {
    color: '#719AF5',
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
  },
  bookMentorsContainer: {
    display: 'flex',
    padding: '20px',
    gap: '8%',
    '@media (max-width: 799px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '25px',
    },
  },
  bookAndContributeContainerSVG: {
    color: '#400CCC',
  },

  carouselContainerComponents: {
    width: '320px',
    display: 'flex',
    flexShrink: 1,
    height: '300px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px 20px',
    '@media (max-width: 799px)': {
      width: '300px',
      height: '300px',
    },
  },

  carouselComponentParagraph: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    '@media (max-width: 799px)': {
      marginBottom: '0px',
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
    flexDirection: 'column',
    gap: '10px',
    justifyContent: 'flex-start',
    '@media (max-width: 799px)': {
      width: '80%',
      alignItems: 'center',
    },
  },
  slackForm: {
    width: '100%',
    '@media (max-width: 799px)': {
      alignItems: 'center',
    },
  },
}));

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 799,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function FullWidthGrid() {
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    root,
    introContainer,
    topImageContainer,
    topImage,
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
  } = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={root}>
        <Grid container>
          <Grid className={introContainer} item xs={12} sm={6}>
            <div className={firstContainerDiv}>
              <Typography variant="h1" className={getConnectedHeader}>
                Hey Girl, Get Connected!
              </Typography>
              <Typography
                variant="body1"
                className={paragraph}
                paragraph={true}
              >
                From easy access to mentorship to gaining new skills, jumpstart
                your career in tech through the Femmecubator community.
              </Typography>
              <BlueFilledButton
                data-testid="styled-button"
                variant="contained"
                color="primary"
              >
                JOIN TODAY
              </BlueFilledButton>
            </div>
          </Grid>
          <Grid className={topImageContainer} item xs={12} sm={6}>
            <img
              src={mainImage}
              className={topImage}
              alt="Three ladies sitting and working on their laptops"
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
                  variant="h1"
                  className={bookAndContributeComponentTitle}
                >
                  Book Mentors
                </Typography>
                <Typography
                  variant="body1"
                  className={bookAndContributeContainerParagraph}
                  paragraph={true}
                >
                  Are you thinking of going into Design or Development career
                  tracks? Easily book time with mentors who can help with
                  portfolio reviews, practice interview and whiteboarding
                  sessions.
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
                  variant="h1"
                  className={bookAndContributeComponentTitle}
                >
                  Contribute content
                </Typography>
                <Typography
                  variant="body1"
                  className={bookAndContributeContainerParagraph}
                  paragraph={true}
                >
                  Help grow this community with us! We’re looking for org
                  leaders from women empowerment groups or individuals who want
                  to take part in research and creating content.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid className={workathonContainer} item xs={12}>
            <WorkathonSVG className={workathonSVG} />
            <div className={workathonContainerDiv}>
              <Typography variant="h3" className={registerWebmaking}>
                REGISTER FOR WEBMAKING WORKATHON
              </Typography>
              <Typography variant="body1" className={letGrow}>
                Let’s grow this community together.
              </Typography>
            </div>
          </Grid>
          <Grid
            className={ourMissionContainer}
            data-testid="background"
            item
            xs={12}
          >
            <div className={ourMissionComponent}>
              <Typography variant="h1" className={titleWhite}>
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                className={ourMissionComponentParagraph}
                paragraph={true}
              >
                Femmecubator is an online community for Women of Color in tech.
                Our goal is to connect you with resources and access to a
                network of industry-experts to help fast track your career as
                you transition to your new role.
              </Typography>
              <WhiteOutlineButton variant="contained" color="primary">
                JOIN TODAY
              </WhiteOutlineButton>
            </div>
          </Grid>
          <Grid
            className={carouselContainer}
            data-testid="home-carousel"
            item
            xs={12}
          >
            {matches ? (
              <Carousel className="myCarousel">
                <div className={carouselContainerComponents}>
                  <Typography variant="h1" className={title}>
                    <FavoriteBorderOutlinedIcon
                      className={partnerSVG}
                      fontSize="large"
                    />
                    Support
                  </Typography>
                  <Typography
                    variant="body1"
                    className={carouselComponentParagraph}
                    paragraph={true}
                  >
                    We are fundraising for our first mentorship program cohort
                    which will launch by March. Our goal is to mentor 10 Women
                    of Color in tech by 2021. Join us by supporting this program
                    and create a pledge on Patreon.
                  </Typography>
                  <BlueOutlineButton variant="contained">
                    DONATE
                  </BlueOutlineButton>
                </div>
                <div className={carouselContainerComponents}>
                  <Typography variant="h1" className={title}>
                    <PanToolIcon className={volunteerSVG} fontSize="large" />
                    Volunteer
                  </Typography>
                  <Typography
                    variant="body1"
                    className={carouselComponentParagraph}
                    paragraph={true}
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
                  <Typography variant="h1" className={title}>
                    <SupervisorAccountIcon
                      className={mentorSVG}
                      fontSize="large"
                    />
                    Mentor
                  </Typography>
                  <Typography
                    variant="body1"
                    className={carouselComponentParagraph}
                    paragraph={true}
                  >
                    Our members need you! If you are an industry expert in
                    Design or Development and can allot an hour a week for
                    career support ranging from tech interviews and
                    whiteboarding sessions to informational interviews.
                  </Typography>
                  <BlueOutlineButton variant="contained" color="primary">
                    SIGN UP TO BE A MENTOR
                  </BlueOutlineButton>
                </div>
              </Carousel>
            ) : (
              <>
                <div className={carouselContainerComponents}>
                  <Typography variant="h1" className={title}>
                    <FavoriteBorderOutlinedIcon
                      className={partnerSVG}
                      fontSize="large"
                    />
                    Support
                  </Typography>
                  <Typography
                    variant="body1"
                    className={carouselComponentParagraph}
                    paragraph={true}
                  >
                    We are fundraising for our first mentorship program cohort
                    which will launch by March. Our goal is to mentor 10 Women
                    of Color in tech by 2021. Join us by supporting this program
                    and create a pledge on Patreon.
                  </Typography>
                  <BlueOutlineButton variant="contained">
                    DONATE
                  </BlueOutlineButton>
                </div>
                <div className={carouselContainerComponents}>
                  <Typography variant="h1" className={title}>
                    <PanToolIcon className={volunteerSVG} fontSize="large" />
                    Volunteer
                  </Typography>
                  <Typography
                    variant="body1"
                    className={carouselComponentParagraph}
                    paragraph={true}
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
                  <Typography variant="h1" className={title}>
                    <SupervisorAccountIcon
                      className={mentorSVG}
                      fontSize="large"
                    />
                    Mentor
                  </Typography>
                  <Typography
                    variant="body1"
                    className={carouselComponentParagraph}
                    paragraph={true}
                  >
                    Our members need you! If you are an industry expert in
                    Design or Development and can allot an hour a week for
                    career support ranging from tech interviews and
                    whiteboarding sessions to informational interviews.
                  </Typography>
                  <BlueOutlineButton variant="contained" color="primary">
                    SIGN UP TO BE A MENTOR
                  </BlueOutlineButton>
                </div>
              </>
            )}
          </Grid>
          <Grid className={joinSlackContainer} item xs={12}>
            <MeetOnSlack className={meetOnSlackSVG} />
            <div className={slackFormContainer}>
              <Typography
                variant="h2"
                className={bookAndContributeComponentTitle}
              >
                Join the community on Slack.
              </Typography>
              <form className={slackForm}>
                <input
                  type="text"
                  placeholder="Your email address here"
                  className={inputForm}
                />
                <BlueFilledButton>SUBMIT</BlueFilledButton>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

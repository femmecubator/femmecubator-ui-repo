import React from 'react';
import {
  //createMuiTheme,
  makeStyles,
  //ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import mentorHome from './assets/mentorhome.jpg';
import { Typography, Button } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import SchoolIcon from '@material-ui/icons/School';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from 'components/Footer/Footer';

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
  waysMentorContainer: {
    height: '330px',
    backgroundColor: '#FFFFFF',
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
  HeadingContainer: {
    height: '400px',
    backgroundImage: `url(${mentorHome})`,
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 20px',
    '@media (max-width: 799px)': {
      height: '466px',
      padding: '0px',
    },
  },
  carouselContainerDiv: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0px 20px',
    marginTop: '40px',
    justifyContent: 'space-around',
    '@media (max-width: 799px)': {
      height: '466px',
      padding: '0px',
      marginTop: '25px',
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
  titlePurple: {
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
  waysMentorComponentTitle: {
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
  waysMentorComponent: {
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
  waysMentorContainerParagraph: {
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
  HeadingComponent: {
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
  HeadingComponentParagraph: {
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
  cohortMentorContainer: {
    display: 'flex',
    padding: '20px',
    '@media (max-width: 799px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  waysMentorContainerSVG: {
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
    justifyContent: 'flex-start',
    '@media (max-width: 799px)': {
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
}));

const MentorHome = () => {
  <Grid container>
    <Grid
      {...{
        className: HeadingContainer,
        item: true,
        XS: 12,
      }}
    >
      <div className={headingComponent}>
        <Typography variant="h2" className={titleWhite}>
          Become a mentor
        </Typography>
        <Typography
          {...{
            variant: 'body1',
            className: headingComponentParagraph,
            paragraph: true,
          }}
        >
          Want to make a difference in the next generation of designers and
          developers? We’re actively seeking BIPOC women experienced in UX or
          Software Development to mentor other BIPOC women looking to break into
          tech.
        </Typography>
        <BlueFilledButton variant="contained">SIGN UP NOW</BlueFilledButton>
      </div>
    </Grid>

    <Grid
      {...{
        className: WaysMentorContainer,
        item: true,
        xs: 12,
      }}
    >
      <div className={waysMentorComponent}>
        <Typography variant="h2" className={titlePurple}>
          Ways you can mentor
        </Typography>
        <div className={cohortMentorContainer}>
          <div className={greenCircle}>
            <SupervisorAccountIcon
              fontSize="large"
              className={waysMentorContainerSVG}
            />
          </div>
          <Typography variant="h2" className={waysMentorComponentTitle}>
            Cohort Mentoring
          </Typography>
          <Typography
            {...{
              variant: 'body1',
              className: waysMentorContainerParagraph,
              paragraph: true,
            }}
          >
            Volunteer to become a mentor for our 8-week mentorship program
            offered to aspiring UX designers and software developers twice a
            year.
          </Typography>
        </div>
        <br />
        <Divider orientation="vertical" /* flexItem */ />
        <br />
        <div className={flexibleMentorContainer}>
          <div className={greenCircle}>
            <SchoolIcon fontSize="large" className={waysMentorContainerSVG} />
          </div>
          <Typography variant="h2" className={waysMentorComponentTitle}>
            Flexible Mentoring
          </Typography>
          <Typography
            {...{
              variant: 'body1',
              className: waysMentorContainerParagraph,
              paragraph: true,
            }}
          >
            Set your calendar availability so mentees can easily book 1:1 time
            with you through our dedicated platform.
          </Typography>
        </div>
      </div>
    </Grid>
  </Grid>;
  <Footer />;
};

export default MentorHome;

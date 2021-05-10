import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import useStyles from '../AboutContentContainer.styles';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const BlueOutlineButton = withStyles({
  root: {
    background: 'transparent',
    borderRadius: '4px',
    border: '1px solid #016EE3',
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

const GetInvolved = () => {
  const { title } = useStyles();
  return (
    <>
      <Typography variant="h2" className={title}>
        We are proudly volunteer-driven
      </Typography>
      <Divider
        orientation="horizontal"
        variant="fullWidth" /* className={classes.divider} */
      ></Divider>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={7}
      >
        <Grid item xs>
          <h3>Donate</h3>
          <p>
            We are fundraising for our first mentorship program cohort which
            will launch by March. Our goal is to mentor 10 women of color in
            tech by 2021. Join us by supporting this program and create a pledge
            on Patreon.
          </p>
          <BlueOutlineButton variant="outlined">
            MONETARY DONATION
          </BlueOutlineButton>
        </Grid>
        <Grid item xs>
          <h3>Grow with us</h3>
          <p>
            We're sharing updates on our app-building process on Patreon every
            month. Let's grow together. Take a peek at how we are building the
            community platform and support our volunteers with a recurring gift
            while you learn MongoDB, Express, React.js, and Node.js.
          </p>
          <BlueOutlineButton variant="outlined">
            SUPPORT ON PATREON
          </BlueOutlineButton>
        </Grid>
      </Grid>
      <br />
      <Divider
        orientation="horizontal"
        variant="fullWidth" /* className={classes.divider} */
      ></Divider>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={7}>
          <h3>Mentor</h3>
          <p>
            Our members need you! If you are an industry expert in Design or
            Development and can allott an hour a week for career support,
            ranging from tech interviews and whiteboarding sessions to
            informational interviews, consider applying to be a mentor.
          </p>
          <BlueOutlineButton variant="outlined">
            SIGN UP TO BE A MENTOR
          </BlueOutlineButton>
        </Grid>
        <br />
        <Grid item xs={7}>
          <h3>Volunteer</h3>
          <p>
            Are you a UX or Web Dev bootcamp grad looking to expand your skills?
            Have at least 5 to 7 hours a week to devote to learning what it's
            like to be on a team? Be part of our agile team and dive into a
            3-month AppDev Program.
          </p>
          <BlueOutlineButton variant="outlined">
            APPLY TO VOLUNTEER
          </BlueOutlineButton>
        </Grid>
      </Grid>
    </>
  );
};

export default GetInvolved;

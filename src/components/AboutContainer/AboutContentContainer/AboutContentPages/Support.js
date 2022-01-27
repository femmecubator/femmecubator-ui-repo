import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from '../AboutContentContainer.styles';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

const Support = () => {
  const { title, linkStyle } = useStyles();
  return (
    <>
      <Typography variant="h2" className={title}>
        We are pushing the boundaries of Gender Inclusion and Racial Equity in
        tech.
      </Typography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={7}
      >
        <Grid item xs>
          <h3>Grow with us</h3>
          <p>
            Let’s grow this community together! We are in the beginning stages
            of creating an awesome space for our community. As a Patreon
            supporter, you’ll get a sneak peek and learn about our tech stack,
            our product roadmap, and how we work with our volunteers.
          </p>
          <Link
            {...{
              target: '_blank',
              to: { pathname: 'https://www.patreon.com/femmecubator' },
              className: linkStyle,
            }}
          >
            <BlueOutlineButton variant="outlined">
              SUPPORT ON PATREON
            </BlueOutlineButton>
          </Link>
        </Grid>
        <Grid item xs>
          <h3>Donate</h3>
          <p>
            Femmecubator envisions to revolutionize access to tech education for
            BIPOC women through community and collaboration.
            <br />
            <br />
            Your support goes a long way in fullfilling our mission!
          </p>
          <Link
            {...{
              target: '_blank',
              to: { pathname: 'https://givebutter.com/welabs' },
              className: linkStyle,
            }}
          >
            <BlueOutlineButton variant="outlined">
              MAKE A DONATION
            </BlueOutlineButton>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Support;

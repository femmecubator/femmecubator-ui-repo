import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from '../AboutContentContainer.styles';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
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

const Volunteer = ({ selected, setSelected }) => {
  const { title, linkStyle } = useStyles();

  return (
    <>
      <Typography variant="h2" className={title}>
        We are pushing the boundaries of Gender Inclusion and Racial Equity in
        tech.
      </Typography>
      <Grid container justify="flex-start" alignItems="flex-start" spacing={7}>
        <Grid item xs={12} sm={6}>
          <h3>Career / Technical Mentor (1:1)</h3>
          <p>
            Our members need you! If you are an industry expert in Design or
            Development and can allot an hour a week for career support calls or
            technical career coaching such as portfolio, project or code
            reviews, and interview practice.
          </p>
          <Link to="/register" className={linkStyle}>
            <BlueOutlineButton variant="outlined">Join Today</BlueOutlineButton>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>Tech4Good Volunteer</h3>
          <p>
            Are you a UX or Web Dev bootcamp grad looking to expand your skills?
            Have at least 5-7 hours a week to devote for learning what it’s like
            to be in a team? Be part of our agile team and dive into a 3-month
            AppDev Program.
          </p>
          <BlueOutlineButton
            variant="outlined"
            onClick={() => setSelected('Contact US')}
          >
            Contact Us
          </BlueOutlineButton>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>
            Workshop Facilitator /<br />
            Career Prep Speaker
          </h3>
          <p>
            Femmecubator hosts monthly workshops recommended for BIPOC women in
            tech who’s looking for a platform to share topics they are
            passionate about! Junior-level speakers encouraged!
          </p>
          <BlueOutlineButton
            variant="outlined"
            onClick={() => setSelected('Contact US')}
          >
            CONTACT US
          </BlueOutlineButton>
        </Grid>
      </Grid>
    </>
  );
};

Volunteer.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func,
};

export default Volunteer;

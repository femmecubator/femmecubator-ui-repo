import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from '../AboutContentContainer.styles';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

const ContactUs = () => {
  const {
    title,
    slackFormContainerParent,
    slackFormContainer,
    bookAndContributeComponentTitle,
    linkStyle,
    emailStyle,
    joinSlackButton,
  } = useStyles();
  return (
    <>
      <Typography variant="h2" className={title}>
        Let's chat
      </Typography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={5}
      >
        <Grid item sm={12} md={4}>
          <h3>Erika Jeffers</h3>
          <p>
            Executive Director, Operations <br />
            <Link className={emailStyle} href="mailto:erika@femmecubator.org">
              erika@femmecubator.org
            </Link>
          </p>
          <h3>Krizia Fernando</h3>
          <p>
            Executive Director, Tech and Community <br />
            <Link className={emailStyle} href="mailto:krizia@femmecubator.org">
              krizia@femmecubator.org
            </Link>
          </p>
          <h3>Sam Pablo</h3>
          <p>
            Community Lead <br />
            <Link
              className={emailStyle}
              href="mailto:community@femmecubator.org"
            >
              community@femmecubator.org
            </Link>
          </p>
        </Grid>
        <Grid item sm={12} md={8} className={slackFormContainerParent}>
          <div className={slackFormContainer}>
            <Typography
              variant="h2"
              className={bookAndContributeComponentTitle}
            >
              Join our community of designers and developers on Slack.
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
                Join us
              </BlueFilledButton>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;

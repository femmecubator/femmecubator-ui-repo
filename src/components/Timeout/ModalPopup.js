import React, { useState, useEffect } from 'react';
import useStyles from './ModalPopup.styles';
import FocusTrapOverlay from '../FocusTrapOverlay';
import { Paper, Typography, Button } from '@material-ui/core';

const ModalPopup = props => {
  const { open, countdownTime, setIdle, logoff, timedOut, reset } = props;
  const classes = useStyles();

  const [minutes, setMinutes] = useState(Math.floor(countdownTime / 60000));
  const [seconds, setSeconds] = useState((countdownTime / 1000) % 60);

  useEffect(() => {
    let time = countdownTime;

    const timer =
      countdownTime > 0 &&
      setInterval(() => {
        time -= 1000;
        setMinutes(Math.floor(time / 60000));
        setSeconds((time / 1000) % 60);
        if (time === 0) {
          time = 0;
          clearInterval(timer);
          timedOut();
        }
      }, 1000);

    return () => clearInterval(timer);
  }, [countdownTime, timedOut]);

  const handleContinue = () => {
    setIdle(false);
    reset();
  };

  return (
    <FocusTrapOverlay open={open}>
      <Paper>
        <Typography variant="h4" component="h1" align="center">
          Your online session will expire soon
        </Typography>
        <Typography variant="h5" component="p" align="center">
          {`${minutes} min ${seconds < 10 ? '0' : ''}${seconds} seconds`}
        </Typography>
        <Typography variant="body1" component="p" align="center">
          Choose continue to keep working or log off.
        </Typography>
        <Button
          {...{
            onClick: logoff,
          }}
        >
          Log Off
        </Button>
        <Button
          {...{
            onClick: handleContinue,
          }}
        >
          Continue
        </Button>
      </Paper>
    </FocusTrapOverlay>
  );
};

export default ModalPopup;

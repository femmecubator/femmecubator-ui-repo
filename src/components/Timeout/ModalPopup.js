import React, { useState, useEffect } from 'react';
import useStyles from './ModalPopup.styles';
import FocusTrapOverlay from '../FocusTrapOverlay';
import { Paper, Typography, Button, useMediaQuery } from '@material-ui/core';

const ModalPopup = props => {
  const { open, countdownTime, setIdle, logoff, timedOut, reset } = props;
  const isMobile = useMediaQuery('(max-width:1023px)');
  const {
    modal,
    container,
    text,
    timeoutHeading,
    timeoutCountdown,
    buttonsContainer,
    button,
    continueButton,
    logoffButton,
  } = useStyles(isMobile);

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
      <Paper className={modal}>
        <div className={container}>
          <h1 className={`${timeoutHeading} ${text}`}>
            Your online session will expire soon
          </h1>
          <p className={`${timeoutCountdown} ${text}`}>
            {`${minutes} min ${seconds < 10 ? '0' : ''}${seconds} seconds`}
          </p>
          <p className={`${text}`}>
            Choose continue to keep working or log off.
          </p>
          <div className={buttonsContainer}>
            <Button
              {...{
                className: `${logoffButton} ${button}`,
                onClick: logoff,
              }}
            >
              Log Off
            </Button>
            <Button
              {...{
                className: `${continueButton} ${button}`,
                onClick: handleContinue,
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </Paper>
    </FocusTrapOverlay>
  );
};

export default ModalPopup;

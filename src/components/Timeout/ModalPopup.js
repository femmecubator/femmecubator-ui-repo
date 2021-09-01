import React, { useState, useEffect } from 'react';
import useStyles from './ModalPopup.styles';
import FocusTrapOverlay from '../FocusTrapOverlay';
import { Dialog, Button, useMediaQuery } from '@material-ui/core';

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
  } = useStyles({
    isMobile,
  });

  const [minutes, setMinutes] = useState(Math.floor(countdownTime / 60000));
  const [seconds, setSeconds] = useState((countdownTime / 1000) % 60);

  useEffect(() => {
    let timer;

    if (open) {
      let time = countdownTime;
      timer = setInterval(() => {
        time -= 1000;
        setMinutes(Math.floor(time / 60000));
        setSeconds((time / 1000) % 60);
        if (time === 0) {
          clearInterval(timer);
          timedOut();
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [countdownTime, timedOut, open]);

  const handleContinue = () => {
    setIdle(false);
    reset();
  };

  return (
    <FocusTrapOverlay open={open}>
      {/* Dialog creates an infinite loop/ rerendering with the onboarding modal for mentors shows up, Maybe if theres a way to check when mentor onboarding modal is active?*/}
      <Dialog
        {...{
          open: true,
          disableAutoFocus: true,
          role: 'alertdialog',
          'aria-label': 'Session timeout modal',
          'aria-modal': true,
          className: modal,
        }}
      >
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
                'aria-label': 'Log off',
                className: `${logoffButton} ${button}`,
                onClick: logoff,
              }}
            >
              Log Off
            </Button>
            <Button
              {...{
                'aria-label': 'Continue',
                className: `${continueButton} ${button}`,
                onClick: handleContinue,
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </Dialog>
    </FocusTrapOverlay>
  );
};

export default ModalPopup;

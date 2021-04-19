import { Modal, useMediaQuery } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useStyles from './ModalPopup.styles';
import TrapFocus from '@material-ui/core/Unstable_TrapFocus';
import Auth from '../../utils/auth';

const ModalPopup = ({ countdownTime, setIdle, logoff, timedOut }) => {
  //modal with countdown clock
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:1023px)');

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

  return (
    <div className={classes.modal_background}>
      {
        //eslint-disable-next-line
      }
      <TrapFocus open isEnabled={() => true} getDoc={() => document}>
        {
          //eslint-disable-next-line
        }
        <article className={classes.modal} tabIndex={-1}>
          <div className={classes.modal__center_div}>
            <div className={classes.modal__center_div__content}>
              <p className={classes.modal__center_div__content__p_head}>
                Your online session
              </p>
              <p className={classes.modal__center_div__content__p_head}>
                will expire soon
              </p>
              <p className={classes.modal__center_div__content__p_timer}>
                {`${minutes} min ${seconds < 10 ? '0' : ''}${seconds} secs`}
              </p>
              <p className={classes.modal__center_div__content__p_text}>
                Choose continue to keep working or log off.
              </p>
            </div>
            <div className={classes.modal__center_div__buttons}>
              <span //eslint-disable-line
                className={classes.modal__center_div__buttons__button_logoff}
                onClick={logoff}
              >
                Log Off
              </span>
              <span //eslint-disable-line
                className={classes.modal__center_div__buttons__button_continue}
                onClick={() => setIdle(false)}
              >
                Continue
              </span>
            </div>
          </div>
        </article>
      </TrapFocus>
    </div>
  );
};

export default ModalPopup;

import React, { useState, useEffect, useRef } from 'react';
import Auth from '../../utils/auth';
//import ModalPopup from './ModalPopup';
import useStyles from './ModalPopup.styles';
import TrapFocus from '@material-ui/core/Unstable_TrapFocus';

const Timeout = ({ children }) => {
  //track idle time in background
  const idleTime = parseInt(process.env.REACT_APP_IDLETIME);
  const countdownTime = parseInt(process.env.REACT_APP_COUNTDOWNTIME);

  const { logoff, timedOut } = Auth;
  const isLoggedIn = Auth.isLoggedIn();

  const [idle, setIdle] = useState(false);
  const time = useRef(0);

  function reset() {
    time.current = 0;
  }

  useEffect(() => {
    let interval;
    if (isLoggedIn && !idle) {
      interval = setInterval(() => {
        time.current += 1000;
        if (time.current === idleTime) {
          setIdle(true);
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [idleTime, idle, isLoggedIn]);

  return (
    //eslint-disable-next-line
    <div onMouseOver={() => reset()} onKeyPress={() => reset()}>
      {idle && (
        <ModalPopup
          {...{
            countdownTime: countdownTime,
            setIdle: setIdle,
            logoff: logoff,
            timedOut: timedOut,
          }}
        />
      )}
      {children}
    </div>
  );
};

const ModalPopup = ({ countdownTime, setIdle, logoff, timedOut }) => {
  //modal with countdown clock
  const classes = useStyles();
  //const isMobile = useMediaQuery('(max-width:1023px)');

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

export default Timeout;

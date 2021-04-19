import { Modal } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import TrapFocus from '@material-ui/core/Unstable_TrapFocus';
import Auth from '../../utils/auth';

const useStyle = makeStyles({
  modal_background: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: '1000',
    fontFamily: 'Open Sans, sans-serif',
  },
  modal: {
    position: 'relative',
    background: 'white',
    width: '38rem',
    height: '28rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '28vh auto',
    '@media (max-width: 600px)': {
      width: '92vw',
      height: '45vh',
    },
  },
  modal__center_div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modal__center_div__content: {
    display: 'flex',
    flexDirection: 'column',
  },
  modal__center_div__content__p_head: {
    fontSize: '24px',
    fontWeight: '700',
    margin: '0',
    textAlign: 'center',
    color: 'rgb(80, 80, 80)',
  },
  modal__center_div__content__p_timer: {
    fontSize: '21px',
    fontWeight: '600',
    textAlign: 'center',
    color: 'rgb(0, 98, 255)',
  },
  modal__center_div__content__p_text: {
    textAlign: 'center',
    color: 'rgb(80, 80, 80)',
  },
  modal__center_div__buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  modal__center_div__buttons__button_logoff: {
    padding: '.5rem 1rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'white',
    borderRadius: '3px',
    transition: '200ms ease-in-out',
    cursor: 'pointer',
    background: 'gray',
    marginRight: '1rem',
    '&:hover': {
      filter: 'brightness(1.2)',
      transition: '300ms ease-in-out',
    },
  },
  modal__center_div__buttons__button_continue: {
    padding: '.5rem 1rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'white',
    borderRadius: '3px',
    transition: '200ms ease-in-out',
    cursor: 'pointer',
    background: 'rgb(56, 132, 255)',
    marginLeft: '1rem',
    '&:hover': {
      filter: 'brightness(1.2)',
      transition: '300ms ease-in-out',
    },
  },
});
//track idle time in background
/* const idleTime = parseInt(process.env.REACT_APP_IDLETIME);
const countdownTime = parseInt(process.env.REACT_APP_COUNTDOWNTIME);

const { logoff, timedOut } = Auth;
const isLoggedIn = Auth.isLoggedIn();

const [idle, setIdle] = useState(false);
const time = useRef(0);

function reset() {
  time.current = 0;
} */
const ModalPopup = ({ countdownTime, setIdle, logoff, timedOut }) => {
  //modal with countdown clock
  const classes = useStyle();

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
        <article className={classes.modal} /* tabIndex={1} */>
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

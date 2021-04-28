import React, { useState, useEffect } from 'react';
import useStyles from './ModalPopup.styles';
import Modal from '@material-ui/core/Modal';
//import TrapFocus from '@material-ui/core/Unstable_TrapFocus';

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

  /*   const body = (
    <article className={classes.modal}>
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
          <span
            className={classes.modal__center_div__buttons__button_logoff}
            onClick={logoff}
            onKeyPress={logoff}
            role="button"
            aria-label="log off"
            tabIndex="0"
          >
            Log Off
          </span>
          <span
            className={classes.modal__center_div__buttons__button_continue}
            onClick={() => setIdle(false)}
            onKeyPress={() => setIdle(false)}
            role="button"
            aria-label="continue"
            tabIndex="0"
          >
            Continue
          </span>
        </div>
      </div>
    </article>
  ); */

  return (
    <div className={classes.modal_background}>
      <Modal
        open={open}
        isEnabled={() => true}
        getDoc={() => document}
        disableAutoFocus={false}
        disableBackdropClick={true}
        disableEnforceFocus={false}
        //aria-hidden={false}
      >
        {/*{body}*/}
        <article className={classes.modal}>
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
              <span
                className={classes.modal__center_div__buttons__button_logoff}
                onClick={logoff}
                onKeyPress={logoff}
                role="button"
                aria-label="log off"
                tabIndex="0"
              >
                Log Off
              </span>
              <span
                className={classes.modal__center_div__buttons__button_continue}
                onClick={() => setIdle(false)}
                onKeyPress={() => setIdle(false)}
                role="button"
                aria-label="continue"
                tabIndex="0"
              >
                Continue
              </span>
            </div>
          </div>
        </article>
      </Modal>
    </div>
  );
};

export default ModalPopup;
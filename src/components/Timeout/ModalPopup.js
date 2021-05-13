import React, { useState, useEffect } from 'react';
import useStyles from './ModalPopup.styles';
import FocusTrapOverlay from '../FocusTrapOverlay';
import { Paper, Typography, Button } from '@material-ui/core';

const ModalPopup = ({ open, countdownTime, setIdle, logoff, timedOut }) => {
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
        <Button>Log Off</Button>
        <Button>Continue</Button>
      </Paper>
    </FocusTrapOverlay>
  );

  // return (
  //   <div className={classes.modal_background}>
  //     <FocusTrap open isEnabled={() => true} getDoc={() => document}>
  //       <article className={classes.modal}>
  //         <div className={classes.modal__center_div}>
  //           <div className={classes.modal__center_div__content}>
  //             <h1 className={classes.modal__center_div__content__p_head}>
  //               Your online session
  //             </h1>
  //             <p className={classes.modal__center_div__content__p_head}>
  //               will expire soon
  //             </p>
  //             <p className={classes.modal__center_div__content__p_timer}>
  //               {`${minutes} min ${seconds < 10 ? '0' : ''}${seconds} seconds`}
  //             </p>
  //             <p className={classes.modal__center_div__content__p_text}>
  //               Choose continue to keep working or log off.
  //             </p>
  //           </div>
  //           <div className={classes.modal__center_div__buttons}>
  //             <Button
  //               {...{
  //                 className: classes.modal__center_div__buttons__button_logoff,
  //                 onClick: logoff,
  //                 onKeyPress: logoff,
  //                 'aria-label': 'log off',
  //                 tabIndex: 0,
  //               }}
  //             >
  //               Log Off
  //             </Button>
  //             <Button
  //               {...{
  //                 className:
  //                   classes.modal__center_div__buttons__button_continue,
  //                 onClick: () => setIdle(false),
  //                 onKeyPress: () => setIdle(false),
  //                 'aria-label': 'continue',
  //                 tabIndex: 0,
  //               }}
  //             >
  //               Continue
  //             </Button>
  //           </div>
  //         </div>
  //       </article>
  //     </FocusTrap>
  //   </div>
  // );
};

export default ModalPopup;

import React, { useState, useEffect, useRef } from 'react';
import Auth from '../../utils/auth';
import ModalPopup from './ModalPopup';

const Timeout = ({ children }) => {
  const idleTime = parseInt(process.env.REACT_APP_IDLETIME);
  const countdownTime = parseInt(process.env.REACT_APP_COUNTDOWNTIME);

  const { logoff, timedOut } = Auth;
  const isLoggedIn = Auth.isLoggedIn();
  console.log(idleTime, countdownTime, isLoggedIn, timedOut);
  const [idle, setIdle] = useState(false);
  const time = useRef(0);

  const reset = () => {
    time.current = 0;
  };

  useEffect(() => {
    const events = [
      'load',
      'mousemove',
      'mousedown',
      'click',
      'scroll',
      'keypress',
    ];

    for (const e of events) {
      window.addEventListener(e, reset);
    }
  }, []);

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
    <>
      {children}
      <ModalPopup
        {...{
          open: idle,
          countdownTime: countdownTime,
          setIdle: setIdle,
          logoff: logoff,
          timedOut: timedOut,
          reset: reset,
        }}
      />
    </>
  );
};

export default Timeout;

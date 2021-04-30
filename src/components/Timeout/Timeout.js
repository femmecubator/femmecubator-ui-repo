import React, { useState, useEffect, useRef } from 'react';
import Auth from '../../utils/auth';
import ModalPopup from './ModalPopup';

const Timeout = ({ children }) => {
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
    <div
    //onMouseOver={() => reset()}
    //onFocus={() => reset()}
    //onKeyPress={() => reset()}
    //role="textbox" //alert?
    //tabIndex="0"
    //disableBackdropClick={true}
    //disableEnforceFocus={false}
    //aria-label="your online session will expire soon"
    >
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

export default Timeout;

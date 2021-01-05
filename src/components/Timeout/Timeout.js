import React, { useState, useEffect, useRef } from 'react';
import './timeout.css';

export default function Timeout(props) {
  //track idle time in background
  //set time in minutes for idle time before modal should appear, and countdown time before auto logout
  const idleTime = 1;
  const countdownTime = 5;

  const [idle, setIdle] = useState(false);

  const time = useRef(0);

  function reset() {
    time.current = 0;
  }

  useEffect(() => {
    let interval = setInterval(() => {
      time.current += 1;
      if (time.current === idleTime * 60) {
        setIdle(true);
      }
      console.log('idletime', time.current);
    }, 1000);

    return () => clearInterval(interval);
  }, [idleTime]);

  return (
    <div onMouseOver={() => reset()} onKeyPress={() => reset()}>
      {idle && <Modal countdownTime={countdownTime} setIdle={setIdle} />}
    </div>
  );
}

const Modal = ({ countdownTime, setIdle }) => {
  //modal with countdown clock
  const [minutes, setMinutes] = useState(Math.floor(countdownTime));
  const [seconds, setSeconds] = useState((countdownTime * 60) % 60);

  useEffect(() => {
    let time = countdownTime * 60;

    const timer =
      countdownTime > 0 &&
      setInterval(() => {
        time -= 1;
        setMinutes(Math.floor(time / 60));
        setSeconds(time % 60);
        if (time === 0) {
          time = 0;
          clearInterval(timer);
        }
      }, 1000);

    return () => clearInterval(timer);
  }, [countdownTime]);

  return (
    <div className="modal-background">
      <article className="modal modal-idle">
        <div className="modal__center-div">
          <div className="modal__center-div__content">
            <p className="modal__center-div__content__p-head">
              Your online session
            </p>
            <p className="modal__center-div__content__p-head">
              will expire soon
            </p>
            <p className="modal__center-div__content__p-timer">
              {`${minutes} min ${seconds < 10 ? '0' : ''}${seconds} secs`}
            </p>
            <p className="modal__center-div__content__p-text">
              Choose continue to keep working or log off.
            </p>
          </div>
          <div className="modal__center-div__buttons">
            <span className="modal__center-div__buttons__button button-logoff">
              Log Off
            </span>
            <span
              className="modal__center-div__buttons__button button-continue"
              onClick={() => setIdle(false)}
            >
              Continue
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

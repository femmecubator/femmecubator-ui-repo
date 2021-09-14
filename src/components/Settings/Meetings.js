import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import { Button } from '@material-ui/core';
import NoMeetings from './NoMeetings';

const Meetings = () => {
  const isMobile = useMediaQuery('(max-width:680px)');
  const bookingMediaQuery = useMediaQuery('(max-width:632px)');

  const [meetingData, setMeetingData] = useState(true);
  const classes = useStyles({ isMobile, bookingMediaQuery });
  const { timeslotH2, meetingsDetails, settingsButton, hr, nomeetings } =
    classes;

  return (
    <>
      <h2 className={timeslotH2}>{'Your Meetings'}</h2>

      <hr className={hr} />
      {meetingData ? (
        <div className={meetingsDetails}>
          <div>
            <p>
              <label htmlFor={'meeting'}>You’ll meet with </label>
              <span className="meeting-person-name">
                Krizia Raneses (krish.ux@gmail.com)
              </span>
            </p>
            <p>
              <label htmlFor={'date'}>
                on Jan 25, 2021 at 5:00 PM - 6:00 PM.
              </label>
            </p>
            <p>
              <label htmlFor={'link'}>Here’s the link: </label>
              <span className={'meeting-link'}>
                meet.google.com/oer-yjhx-sia
              </span>
            </p>
          </div>
          <div>
            <Button className={settingsButton}>Meet Now</Button>
          </div>
        </div>
      ) : (
        <NoMeetings />
      )}
    </>
  );
};

export default Meetings;

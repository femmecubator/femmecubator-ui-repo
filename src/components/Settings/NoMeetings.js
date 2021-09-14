import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import Calendar_icon from '../../../src/assets/images/Calendar_icon.svg';

const NoMeetings = () => {
  const isMobile = useMediaQuery('(max-width:680px)');
  const bookingMediaQuery = useMediaQuery('(max-width:632px)');
  const classes = useStyles({ isMobile, bookingMediaQuery });
  const { nomeetings } = classes;

  return (
    <div className={nomeetings}>
      <img src={Calendar_icon} alt="calendar-icon" />
      <p>No meetings yet!</p>
      <p>Stay tuned.</p>
    </div>
  );
};

export default NoMeetings;

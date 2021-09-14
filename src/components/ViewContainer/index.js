import React from 'react';
import { getTokenCookie } from '../../utils/cookies';
import jwt_decode from 'jwt-decode';
import Directory from '../Directory';
import Booking from 'components/Settings/Booking';
import useStyles from './style';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Meetings from 'components/Settings/Meetings';

const ViewContainer = () => {
  const { role_id, hasOnboarded } = jwt_decode(getTokenCookie());

  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const { dashboardWrapper, timeSlotWrapper, meetingWrapper } = classes;

  return (
    <>
      {parseInt(role_id) === 0 ? (
        <>
          <div className={`container ${dashboardWrapper}`}>
            <h1>Dashboard</h1>
            <div className={timeSlotWrapper}>
              <Booking heading={'My Timeslots'} />
            </div>
            <div className={meetingWrapper}>
              <Meetings />
            </div>
          </div>
        </>
      ) : (
        <Directory />
      )}
    </>
  );
};

export default ViewContainer;

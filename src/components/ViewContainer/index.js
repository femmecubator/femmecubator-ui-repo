import React, { useEffect, useState } from 'react';
import { getTokenCookie } from '../../utils/cookies';
import jwt_decode from 'jwt-decode';
import Directory from '../Directory';
import Booking from 'components/Settings/Booking';
import useStyles from './style';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Meetings from 'components/Settings/Meetings';
import MentorOnboardingModal from 'components/MentorOnboarding/MentorOnboardingModal';
import request from 'utils/axiosConfig';
import { API_PATH } from 'utils/constants';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { date } from 'yup/lib/locale';

const ViewContainer = () => {
  const { role_id, hasOnboarded } = jwt_decode(getTokenCookie());

  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const { dashboardWrapper, timeSlotWrapper, meetingWrapper, backdrop } =
    classes;

  const [timeSlots, setTimeSlots] = useState(null);
  const [openBackdrop, setOpenBackdrop] = useState(false);

  useEffect(() => {
    if (hasOnboarded) {
      getTimeSlots();
    }
  }, [hasOnboarded]);

  const getTimeSlots = async () => {
    setOpenBackdrop(true);
    try {
      const res = await request.get(API_PATH.GET_MENTORS_PROFILEDATA);
      if (res.data.data) {
        var data = res.data.data;
        setTimeSlots(data.timeSlot ? data.timeSlot : []);
        setOpenBackdrop(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {parseInt(role_id) === 0 ? (
        <>
          {hasOnboarded ? (
            <div className={`container ${dashboardWrapper}`}>
              <h1>Dashboard</h1>
              <div className={timeSlotWrapper}>
                <Booking
                  heading={'My Timeslots'}
                  timeSlots={timeSlots}
                  setTimeSlots={setTimeSlots}
                />
              </div>
              <div className={meetingWrapper}>
                <Meetings />
              </div>
            </div>
          ) : (
            <MentorOnboardingModal showInModal={true} opened={true} />
          )}
        </>
      ) : (
        <Directory />
      )}
    </>
  );
};

export default ViewContainer;

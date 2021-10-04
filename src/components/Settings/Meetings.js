import React, { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import { Backdrop, Button, CircularProgress } from '@material-ui/core';
import NoMeetings from './NoMeetings';
import request from 'utils/axiosConfig';
import { API_PATH } from 'utils/constants';
import { getTokenCookie } from 'utils/cookies';
import jwtDecode from 'jwt-decode';
import { monthNames } from 'utils/timeConverter';
import { formatAMPM } from 'utils/timeConverter';

const Meetings = () => {
  const isMobile = useMediaQuery('(max-width:680px)');
  const bookingMediaQuery = useMediaQuery('(max-width:632px)');

  const [meetingData, setMeetingData] = useState(null);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);
  const classes = useStyles({ isMobile, bookingMediaQuery });
  const { timeslotH2, meetingsDetails, settingsButton, hr, backdrop } = classes;

  useEffect(() => {
    getMeetings();
  }, []);
  const getMeetings = async () => {
    setOpenBackdrop(true);
    try {
      const res = await request.get(API_PATH.GET_MEETING_DETAILS);
      if (res.data.data) {
        var data = res.data.data;
        if (data.length > 0) {
          setMeetingData(data);
        }
        setOpenBackdrop(false);
      }
    } catch (err) {
      console.log(err);
      setErrorResponse(true);
    }
  };
  const { role_id } = jwtDecode(getTokenCookie());

  return (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <h2 className={timeslotH2}>{'Your Meetings'}</h2>
      <hr className={hr} />
      {meetingData ? (
        meetingData.map((data, index) => {
          var startTime =
            role_id === 1 ? data.attendeeStart : data.organizerStart;
          var endTime = role_id === 1 ? data.attendeeEnd : data.organizerEnd;
          var meetingStartTime = new Date(startTime);
          var meetingEndTime = new Date(endTime);
          return (
            <div className={meetingsDetails} key={index}>
              <div>
                <p>
                  <label htmlFor={'meeting'}>You’ll meet with </label>
                  <span className="meeting-person-name">
                    {role_id === 0 ? data.organizerName : data.attendeeName} (
                    {role_id === 0 ? data.organizer : data.attendee})
                  </span>
                </p>
                <p>
                  <label htmlFor={'date'}>
                    {`on ${
                      monthNames[meetingStartTime.getMonth()]
                    } ${meetingStartTime.getDate()}, ${meetingStartTime.getFullYear()} at ${formatAMPM(
                      meetingStartTime
                    )} - ${formatAMPM(meetingEndTime)}`}
                  </label>
                </p>
                <p>
                  <label htmlFor={'link'}>Here’s the link: </label>
                  <span role={'link'} className={'meeting-link'}>
                    {data.hangoutLink}
                  </span>
                </p>
              </div>
              <div>
                <Button
                  className={settingsButton}
                  onClick={() => (window.location.href = data.hangoutLink)}
                >
                  Meet Now
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <NoMeetings />
      )}
    </>
  );
};

export default Meetings;

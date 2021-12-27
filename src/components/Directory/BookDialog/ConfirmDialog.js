import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from '../Directory.styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { GoogleLogin } from 'react-google-login';
import { monthNames } from 'utils/timeConverter';
import { formatAMPM } from 'utils/timeConverter';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { API_PATH } from 'utils/constants';
import request from 'utils/axiosConfig';

const ConfirmDialog = ({
  openConfirm,
  handleConfirmClose,
  handleAwesomeOpen,
  mentorInfo,
  goals,
  setGoals,
}) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const [openBackdrop, setOpenBackdropt] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);
  const classes = useStyles({ isMobile });
  const {
    rootMeet,
    dialogTitle,
    dialogText,
    highlightText,
    actionButtons,
    actionButton,
    actionButtonOutlined,
    actionButtonContained,
    paddingTopSm,
    paddingTopMd,
    paddingBottomLg,
    restrictedWidth,
    backdrop,
  } = classes;

  const responseGoogle = response => {
    var token = response.tokenObj.access_token;
    addCalendarEvent(token);
  };

  const addCalendarEvent = async token => {
    setOpenBackdropt(true);
    var body = {
      eventStartTime: mentorInfo.eventStartTime,
      eventEndTime: mentorInfo.eventEndTime,
      mentorName: mentorInfo.mentortName,
      mentorEmailId: mentorInfo.mentorEmail,
      timeZone: mentorInfo.timeZone,
      access_token: token,
      summary: goals,
    };
    try {
      const { data } = await request.post(API_PATH.ADD_CALENDAR_EVENT, body);
      if (data.message === 'Success') {
        setOpenBackdropt(false);
        handleConfirmClose();
        handleAwesomeOpen();
        setGoals('');
      }
    } catch (err) {
      setErrorResponse(true);
      setOpenBackdropt(false);
    }
  };

  if (errorResponse) throw Error('BAD API REQUEST');

  return (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={renderProps => (
          <button
            onClick={renderProps.onClick}
            id={'google-auth-btn'}
            style={{ display: 'none' }}
          >
            Click Me
          </button>
        )}
        buttonText="Authorize"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        scope="https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"
      />
      <Dialog
        className={rootMeet}
        open={openConfirm}
        onClose={() => {
          setGoals(''), handleConfirmClose();
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          className={`${dialogTitle} ${paddingTopMd}`}
          id="responsive-dialog-title"
        >{`Is this good?`}</DialogTitle>
        <DialogContent>
          <DialogContentText className={`${dialogText} ${restrictedWidth}`}>
            You're meeting with your {mentorInfo.mentorTitle} Mentor,
            <span className={highlightText}> {mentorInfo.mentortName}</span>
            <br />
            on{' '}
            <span className={highlightText}>
              {new Date(mentorInfo.eventDate).getDate()}{' '}
              {monthNames[new Date(mentorInfo.eventDate).getMonth()]}
            </span>{' '}
            at
            <span className={highlightText}>
              {' '}
              {formatAMPM(new Date(mentorInfo.eventStartTime))}
            </span>
            !
            <br />
            <br />
            This consultation is FREE.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          className={`${actionButtons} ${paddingTopSm} ${paddingBottomLg}`}
        >
          <Button
            className={`${actionButton} ${actionButtonOutlined}`}
            variant="outlined"
            onClick={() => {
              setGoals(''), handleConfirmClose();
            }}
            color="primary"
          >
            CANCEL
          </Button>
          <Button
            className={`${actionButton} ${actionButtonContained}`}
            variant="contained"
            onClick={() => {
              document.getElementById('google-auth-btn').click();
            }}
            color="primary"
          >
            CONFIRM
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

ConfirmDialog.propTypes = {
  openConfirm: PropTypes.bool.isRequired,
  handleConfirmClose: PropTypes.func.isRequired,
  handleAwesomeOpen: PropTypes.func.isRequired,
};

export default ConfirmDialog;

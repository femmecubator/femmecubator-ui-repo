import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '../Directory.styles';
import { Dialog, DialogContent, DialogContentText } from '@material-ui/core/';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SlotTable from './SlotTable';

const MeetTimeDialog = ({
  meetTimeSlots,
  openMeet,
  handleMeetClose,
  handleGoalsOpen,
  timeSlot,
  setDays,
  handleClick,
  days,
  mentor_id,
  setMentorInfo,
  mentorInfo,
}) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const isSmallDevice = useMediaQuery('(max-width:480px)');
  const isMobileDevice = useMediaQuery('(max-width:820px)');
  const classes = useStyles({ isMobile, isSmallDevice });
  const {
    rootMeet,
    highlightText,
    dialogText,
    paddingBottomSm,
    paddingTopSm,
    paddingTopLg,
    paddingBottomLg,
    fontWeightBold,
    slotTableContainer,
  } = classes;

  return (
    <Dialog
      className={rootMeet}
      open={openMeet}
      onClose={handleMeetClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent
        className={`${paddingBottomLg} ${paddingTopLg}`}
        style={
          isSmallDevice ? { paddingLeft: '5px', paddingRight: '5px' } : null
        }
      >
        <DialogContentText
          className={`${dialogText} ${paddingTopSm} ${fontWeightBold}`}
        >
          Book meeting time with{' '}
          <span className={`${highlightText}`}>
            {mentorInfo.mentortName}, {mentorInfo.mentorTitle}
          </span>
        </DialogContentText>
        <div className={`${slotTableContainer} ${paddingTopSm}`}>
          {days > 4 ? (
            <ArrowBackIosIcon
              onClick={() => {
                if (isMobileDevice) {
                  if (days > 2) {
                    handleClick(mentor_id, days - 3);
                    setDays(days - 3);
                  } else {
                    handleClick(mentor_id, 2);
                    setDays(2);
                  }
                } else {
                  if (days > 4) {
                    handleClick(mentor_id, days - 5);
                    setDays(days - 5);
                  } else {
                    handleClick(mentor_id, 4);
                    setDays(4);
                  }
                }
              }}
            />
          ) : null}

          <SlotTable
            meetTimeSlots={meetTimeSlots}
            handleMeetClose={handleMeetClose}
            handleGoalsOpen={handleGoalsOpen}
            timeSlot={timeSlot}
            setMentorInfo={setMentorInfo}
            mentorInfo={mentorInfo}
          />
          <ArrowForwardIosIcon
            onClick={() => {
              if (isMobileDevice) {
                handleClick(mentor_id, days + 3);
                setDays(days + 3);
              } else {
                handleClick(mentor_id, days + 5);
                setDays(days + 5);
              }
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

MeetTimeDialog.propTypes = {
  meetTimeSlots: PropTypes.array.isRequired,
  openMeet: PropTypes.bool.isRequired,
  handleMeetClose: PropTypes.func.isRequired,
  handleGoalsOpen: PropTypes.func.isRequired,
  timeSlot: PropTypes.array.isRequired,
};

export default MeetTimeDialog;

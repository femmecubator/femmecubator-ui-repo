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
  handleConfirmOpen,
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
          className={`${dialogText} ${paddingBottomSm} ${fontWeightBold}`}
        >
          Book meeting time with{' '}
          <span className={`${highlightText}`}>Amanda Powell, UX Mentor</span>
        </DialogContentText>
        <div className={`${slotTableContainer} ${paddingTopSm}`}>
          {days > 4 ? (
            <ArrowBackIosIcon
              onClick={() => {
                if (days > 4) {
                  handleClick(mentor_id, days - 5);
                  setDays(days - 5);
                } else {
                  handleClick(mentor_id, 4);
                  setDays(4);
                }
              }}
            />
          ) : null}

          <SlotTable
            meetTimeSlots={meetTimeSlots}
            handleMeetClose={handleMeetClose}
            handleConfirmOpen={handleConfirmOpen}
            timeSlot={timeSlot}
            setMentorInfo={setMentorInfo}
            mentorInfo={mentorInfo}
          />
          <ArrowForwardIosIcon
            onClick={() => {
              handleClick(mentor_id, days + 5);
              setDays(days + 5);
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
  handleConfirmOpen: PropTypes.func.isRequired,
  timeSlot: PropTypes.array.isRequired,
};

export default MeetTimeDialog;

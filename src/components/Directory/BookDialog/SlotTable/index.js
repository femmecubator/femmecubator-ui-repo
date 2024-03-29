import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './SlotTable.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button } from '@material-ui/core';
import { monthNames } from 'utils/timeConverter';
import { formatAMPM } from 'utils/timeConverter';

const SlotTable = ({
  meetTimeSlots,
  handleMeetClose,
  handleGoalsOpen,
  setMentorInfo,
  mentorInfo,
}) => {
  const isMobile = useMediaQuery('(max-width:820px)');
  const isSmallDevice = useMediaQuery('(max-width:580px)');
  const classes = useStyles({ isMobile, isSmallDevice });
  const { root, day, date, slots, unavailableButton, availableButton } =
    classes;

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  var meetTimeSlotsDataMobile = isMobile
    ? meetTimeSlots.slice(0, 3)
    : meetTimeSlots;

  return (
    <div className={`${root} slotGrid`}>
      {meetTimeSlotsDataMobile.map((slotItem, index) => {
        return (
          <div key={index}>
            <div>
              <p className={day}>{slotItem.weekDay}</p>
              <p className={date}>{`${new Date(slotItem.date).getDate()} ${
                monthNames[new Date(slotItem.date).getMonth()]
              }`}</p>
            </div>
            <div className={slots}>
              {slotItem.time.length === 0 ? (
                <Button className={unavailableButton} disabled>
                  unavailable
                </Button>
              ) : (
                slotItem.time.map((slot, index) => {
                  return (
                    <div key={index} style={{ marginBottom: '20px' }}>
                      <Button
                        variant="contained"
                        className={`${availableButton}`}
                        key={index}
                        onClick={() => {
                          handleMeetClose();
                          handleGoalsOpen();
                          var mentorBookingDetails;
                          mentorBookingDetails = {
                            ...mentorInfo,
                            eventStartTime: slot.startTime,
                            eventEndTime: slot.endTime,
                            eventDate: slotItem.date,
                          };
                          setMentorInfo(mentorBookingDetails);
                        }}
                      >
                        <p>
                          {formatAMPM(new Date(slot.startTime))} -{' '}
                          {formatAMPM(new Date(slot.endTime))}
                        </p>
                      </Button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

SlotTable.propTypes = {
  meetTimeSlots: PropTypes.array.isRequired,
  handleMeetClose: PropTypes.func.isRequired,
  handleGoalsOpen: PropTypes.func.isRequired,
};

export default SlotTable;

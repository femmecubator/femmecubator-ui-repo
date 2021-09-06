import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './SlotTable.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button } from '@material-ui/core';

const SlotTable = ({ meetTimeSlots, handleMeetClose, handleConfirmOpen }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    day,
    date,
    slots,
    unavailableButton,
    availableButton,
    bookedButton,
  } = classes;

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  return (
    <div className={root}>
      {meetTimeSlots.map((slotItem, index) => {
        return (
          <div key={slotItem.id}>
            <div>
              <p className={day}>{days[index]}</p>
              <p className={date}>{slotItem.date}</p>
            </div>
            <div className={slots}>
              {slotItem.slots.length === 0 ? (
                <Button
                  variant="contained"
                  className={unavailableButton}
                  disabled
                >
                  unavailable
                </Button>
              ) : (
                slotItem.slots.map((slot, index) => {
                  return (
                    <Button
                      variant="contained"
                      disabled={slot.status}
                      className={`${
                        slot.status ? bookedButton : availableButton
                      }`}
                      key={index}
                      onClick={
                        slot.status
                          ? null
                          : () => {
                              handleMeetClose();
                              handleConfirmOpen();
                            }
                      }
                    >
                      {slot.time}
                    </Button>
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
  handleConfirmOpen: PropTypes.func.isRequired,
};

export default SlotTable;

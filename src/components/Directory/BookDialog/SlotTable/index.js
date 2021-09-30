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
    handleConfirmOpen,
    setMentorInfo,
    mentorInfo,
}) => {
    const isMobile = useMediaQuery('(max-width:767px)');
    const isSmallDevice = useMediaQuery('(max-width:480px)');
    const classes = useStyles({ isMobile });
    const { root, day, date, slots, unavailableButton, availableButton } = classes;

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var meetTimeSlotsDataMobile = meetTimeSlots;

    return (
        <div className={root}>
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
                                <Button variant="contained" className={unavailableButton} disabled>
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
                                                    handleConfirmOpen();
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
                                                <p>{formatAMPM(new Date(slot.startTime))}</p>
                                                <p>to</p>
                                                <p>{formatAMPM(new Date(slot.endTime))}</p>
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
    handleConfirmOpen: PropTypes.func.isRequired,
};

export default SlotTable;

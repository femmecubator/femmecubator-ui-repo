import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import { Button, Checkbox } from '@material-ui/core';
import errorImage from '../../../src/assets/images/error.svg';
import TimeSlotModal from './TimeSlotModal';
import ThreeDots from '../../../src/assets/images/ThreeDots.svg';
import { formatAMPM } from 'utils/timeConverter';
import { monthNames } from 'utils/timeConverter';

const Booking = ({ heading, timeSlots, setTimeSlots }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const bookingMediaQuery = useMediaQuery('(max-width:632px)');
  const classes = useStyles({ isMobile, bookingMediaQuery });
  const {
    bookingInner,
    settingsButton,
    timSlotHeader,
    timeSlotData,
    dropDown,
    threeDotsWrapper,
    dropDownWrapper,
    timeslotH2,
    threeDotsWrapperInner,
    hr,
    mobileAddTimeSlotBtn,
  } = classes;

  const [openModal, setOpenModal] = React.useState(false);

  const [noTimeSlot, setNotTimeSlot] = React.useState(true);

  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (timeSlots && timeSlots.length > 0) {
      setNotTimeSlot(false);
    }
  }, [timeSlots]);

  return (
    <>
      {!noTimeSlot ? (
        <div className={timSlotHeader}>
          <h2>{heading}</h2>
          <div className={'rightWrapper'}>
            <Button
              className={settingsButton}
              onClick={() => setOpenModal(true)}
            >
              + Add a timeslot
            </Button>
            <div className={threeDotsWrapper}>
              <div className={threeDotsWrapperInner}>
                <img src={ThreeDots} alt={'options'} />
              </div>
              <div className={dropDownWrapper}>
                <div className={dropDown}>
                  <span>Edit</span>
                  <span>Delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className={timeslotH2}>{heading}</h2>
      )}
      <hr className={hr} />

      {!(timeSlots && timeSlots.length > 0) ? (
        <div className={bookingInner}>
          <img src={errorImage} alt="error" />
          <p>You haven’t set up time slots yet. </p>
          <Button className={settingsButton} onClick={() => setOpenModal(true)}>
            + Add a timeslot
          </Button>
        </div>
      ) : (
        <>
          {timeSlots.map((data, index) => {
            var weekDays = data.weekDays;
            var startTime = new Date(data.startTime);
            var endTime = new Date(data.endTime);
            var startMonth = new Date(data.startDate);
            var endMonth = new Date(data.endDate);
            return (
              <div className={timeSlotData} key={index}>
                <Checkbox
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <div>
                  <label htmlFor={'title'}>Weekdays</label>
                </div>
                <p>
                  {weekDays.join().replace(/,[s]*/g, ', ')} |{' '}
                  {`${formatAMPM(startTime)} - ${formatAMPM(endTime)}`} EST |{' '}
                  {`${startMonth.getDate()} ${
                    monthNames[startMonth.getMonth()]
                  } - ${startMonth.getDate()} ${
                    monthNames[endMonth.getMonth()]
                  }`}{' '}
                  {'2021'}
                </p>
              </div>
            );
          })}

          {bookingMediaQuery ? (
            <div className={mobileAddTimeSlotBtn}>
              <Button
                className={settingsButton}
                onClick={() => setOpenModal(true)}
              >
                + Add a timeslot
              </Button>
            </div>
          ) : null}
        </>
      )}
      <TimeSlotModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setNotTimeSlot={setNotTimeSlot}
        timeSlots={timeSlots}
        setTimeSlots={setTimeSlots}
      />
    </>
  );
};

export default Booking;

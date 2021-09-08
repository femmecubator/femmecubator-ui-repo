import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import { Button, Checkbox } from '@material-ui/core';
import errorImage from '../../../src/assets/images/error.svg';
import TimeSlotModal from './TimeSlotModal';
import ThreeDots from '../../../src/assets/images/ThreeDots.svg';

const Booking = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    bookingInner,
    settingsButton,
    timSlotHeader,
    timeSlotData,
    dropDown,
    threeDotsWrapper,
    dropDownWrapper,
  } = classes;

  const [openModal, setOpenModal] = React.useState(false);

  const [noTimeSlot, setNotTimeSlot] = React.useState(true);

  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {!noTimeSlot ? (
        <div className={timSlotHeader}>
          <h2>My Timeslots</h2>
          <div className={'rightWrapper'}>
            <Button
              className={settingsButton}
              onClick={() => setOpenModal(true)}
            >
              + Add a timeslot
            </Button>
            <div className={threeDotsWrapper}>
              <img src={ThreeDots} alt={'options'} />
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
        <h2>My Timeslots</h2>
      )}
      <hr />

      {noTimeSlot ? (
        <div className={bookingInner}>
          <img src={errorImage} alt="error" />
          <p>You haven’t set up time slots yet. </p>
          <Button className={settingsButton} onClick={() => setOpenModal(true)}>
            + Add a timeslot
          </Button>
        </div>
      ) : (
        <>
          <div className={timeSlotData}>
            <Checkbox
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <div>
              <label htmlFor={'title'}>Weekdays</label>
            </div>
            <p>Mon, Wed, Fri | 8-9 pm EST | Aug - Dec 2021</p>
          </div>
        </>
      )}
      <TimeSlotModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setNotTimeSlot={setNotTimeSlot}
      />
    </>
  );
};

export default Booking;

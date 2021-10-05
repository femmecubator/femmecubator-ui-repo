import React, { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
} from '@material-ui/core';
import errorImage from '../../../src/assets/images/error.svg';
import TimeSlotModal from './TimeSlotModal';
import ThreeDots from '../../../src/assets/images/ThreeDots.svg';
import { formatAMPM } from 'utils/timeConverter';
import { monthNames } from 'utils/timeConverter';
import request from 'utils/axiosConfig';
import { API_PATH } from 'utils/constants';
import SnackBar from 'components/SnackBar';

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
    backdrop,
  } = classes;

  const [openModal, setOpenModal] = React.useState(false);

  const [noTimeSlot, setNotTimeSlot] = React.useState(true);

  const [editDeleteArray, setEditDeleteArray] = useState([]);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [responseMessage, setResponseMessage] = useState(
    'Please select any timeslot'
  );
  const [editTimeSlotData, setEditTimeSlotData] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [checkBoxes, setCheckBoxes] = useState([false, false]);

  const handleChange = (title, event, index) => {
    var array = editDeleteArray;
    var check = checkBoxes;
    if (event.target.checked) {
      array.push(title);
      check[index] = true;
    } else {
      let position;
      check[index] = false;
      array.map((data, index) => {
        if (data === title) {
          position = index;
        } else {
          return;
        }
      });
      array.splice(position, 1);
    }
    setCheckBoxes([...check]);
    setEditDeleteArray([...array]);
  };

  useEffect(() => {
    if (!openModal) {
      setCheckBoxes([false, false]);
      setEditDeleteArray([]);
    }
  }, [openModal]);

  useEffect(() => {
    if (timeSlots && timeSlots.length > 0) {
      setNotTimeSlot(false);
    }
  }, [timeSlots]);

  const deleteTimeSLot = () => {
    if (editDeleteArray.length === 0) {
      setOpenSnackBar(true);
    } else {
      var deleteArray = timeSlots;

      deleteArray = deleteArray.filter(function (item) {
        return !editDeleteArray.includes(item.title);
      });

      editDeleteTimeSlot(deleteArray);
    }
  };
  const editTimeSlot = () => {
    if (editDeleteArray.length > 1) {
      setResponseMessage('Only one edit one time allowed');
      setOpenSnackBar(true);
      return;
    }
    if (editDeleteArray.length === 0) {
      setOpenSnackBar(true);
    } else {
      setEditTimeSlotData(true);
      var deleteEditArray = timeSlots;
      var editItem;

      deleteEditArray.map((data, index) => {
        if (editDeleteArray.includes(data.title)) {
          editItem = data;
        }
      });
      setEditItem(editItem);
      setOpenModal(true);
    }
  };

  const editDeleteTimeSlot = async data => {
    setOpenBackdrop(true);
    var body = {
      timeSlot: data,
    };
    try {
      const response = await request.post(API_PATH.UPDATE_MENTOR_PROFILE, body);
      if (response.data.message === 'Success') {
        setTimeSlots(response.data.data.timeSlot);
        setEditDeleteArray([]);
        setOpenBackdrop(false);
        setOpenModal(false);
        setNotTimeSlot(false);
      }
    } catch (err) {
      setErrorResponse(true);
      console.log(err);
    }
  };

  return (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <SnackBar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        responseMessage={responseMessage}
        responseMessageType={'error'}
      />
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
            <div
              className={threeDotsWrapper}
              id={'threeDots'}
              onMouseEnter={() => {
                document.getElementById('dropDownWrapper').style.visibility =
                  'visible';
              }}
              onMouseLeave={() => {
                document.getElementById('dropDownWrapper').style.visibility =
                  'hidden';
              }}
            >
              <div className={threeDotsWrapperInner}>
                <img src={ThreeDots} alt={'options'} />
              </div>
              <div className={dropDownWrapper} id="dropDownWrapper">
                <div className={dropDown}>
                  <button
                    onClick={() => {
                      editTimeSlot();
                      document.getElementById(
                        'dropDownWrapper'
                      ).style.visibility = 'hidden';
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      {
                        deleteTimeSLot();
                        document.getElementById(
                          'dropDownWrapper'
                        ).style.visibility = 'hidden';
                      }
                    }}
                  >
                    Delete
                  </button>
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
                  onChange={event => handleChange(data.title, event, index)}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  checked={checkBoxes[index]}
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
      {openModal ? (
        <TimeSlotModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          setNotTimeSlot={setNotTimeSlot}
          timeSlots={timeSlots}
          setTimeSlots={setTimeSlots}
          editTimeSlotData={editTimeSlotData}
          editItem={editItem}
          setEditTimeSlotData={setEditTimeSlotData}
        />
      ) : null}
    </>
  );
};

export default Booking;

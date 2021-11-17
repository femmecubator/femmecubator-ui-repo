import React, { useEffect, useState } from 'react';
import useStyles from './TimeSlotModal.style';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  TextField,
} from '@material-ui/core/';
import { useMediaQuery, CircularProgress, Backdrop } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarIcon from '../../../../src/assets/images/CalendarIcon.svg';
import DownArrow from '../../../../src/assets/images/DownArrow.svg';
import request from 'utils/axiosConfig';
import { API_PATH } from 'utils/constants';

const TimeSlotModal = ({
  openModal,
  setOpenModal,
  setNotTimeSlot,
  timeSlots,
  setTimeSlots,
  editTimeSlotData,
  setEditTimeSlotData,
  editItem,
}) => {
  const isMobile = useMediaQuery('(max-width:420px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    timeSlotModalWrapper,
    heading,
    modalContent,
    createTitle,
    titleInput,
    calendarDateInput,
    calendarDateWrapper,
    date_input,
    calendarInput,
    weekDaysWrapper,
    slectedWeekDay,
    border_right_none,
    timeSlotsButtons,
   // gooleMeet,
    backdrop,
  } = classes;

  const [weekDays, setWeekDays] = useState(weekDaysData);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
 // const [meetLink, setMeetLink] = useState('');
  const [title, setTitle] = useState('');
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);

  useEffect(() => {
    if (editTimeSlotData) {
      const { endDate, endTime, /* meetLink, */ startDate, startTime, title } =
        editItem;
      var oldWeekDays = editItem.weekDays;
      var updatedWeekDays = weekDaysData;
      updatedWeekDays.map(data => {
        if (oldWeekDays.includes(data.timeSlotLabel)) {
          data.selected = true;
        }
      });
      setTitle(title);
      setWeekDays(updatedWeekDays);
      //setMeetLink(meetLink);
      setStartTime(new Date(startTime));
      setEndTime(new Date(endTime));
      setStartDate(new Date(startDate));
      setEndDate(new Date(endDate));
    } else {
      var endTime = new Date();
      var startTime = new Date();
      endTime.setHours(endTime.getHours() + 1, 0, 0, 0);
      startTime.setHours(startTime.getHours(), 0, 0, 0);
      setEndTime(endTime);
      setStartTime(startTime);
      var date = new Date();
      setEndDate(new Date(date.setMonth(date.getMonth() + 3)));
      setWeekDays(weekDaysData);
    }
  }, [editTimeSlotData, editItem]);

  const StartDateInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className={calendarInput} onClick={onClick}>
      <img src={CalendarIcon} alt="caledar-icon" />
      <p className={date_input} ref={ref}>
        {value}
      </p>
      <img src={DownArrow} alt="down-arrow" />
    </button>
  ));

  const EndDateInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className={calendarInput} onClick={onClick}>
      <img src={CalendarIcon} alt="caledar-icon" />
      <p className={date_input} ref={ref}>
        {value}
      </p>
      <img src={DownArrow} alt="down-arrow" />
    </button>
  ));

  const StartTimeInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className={calendarInput} onClick={onClick}>
      <p className={`${date_input} ${border_right_none}`} ref={ref}>
        {value}
      </p>
      <img src={DownArrow} alt="down-arrow" />
    </button>
  ));
  const EndtTimeInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className={calendarInput} onClick={onClick}>
      <p className={`${date_input} ${border_right_none}`} ref={ref}>
        {value}
      </p>
      <img src={DownArrow} alt="down-arrow" />
    </button>
  ));

  const toggleClass = index => {
    var tempData = weekDays;
    if (tempData[index].selected) {
      tempData[index].selected = false;
    } else {
      tempData[index].selected = true;
    }
    setWeekDays([...tempData]);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const saveTimeSlot = async () => {
    var body;
    setOpenBackdrop(true);
    var selectedWeekDays = [];
    weekDays.map(data => {
      if (data.selected === true) {
        selectedWeekDays.push(data.timeSlotLabel);
      }
    });
    if (editTimeSlotData) {
      var updatedTimeSlot = timeSlots;
      var editTedTimeSlot = {
        title: title,
        //meetLink: meetLink,
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
        weekDays: selectedWeekDays,
      };
      var objIndex = updatedTimeSlot.findIndex(
        obj => obj.title === editItem.title
      );
      updatedTimeSlot[objIndex] = editTedTimeSlot;
      body = {
        timeSlot: [...updatedTimeSlot],
      };
    } else {
      body = {
        timeSlot: [
          ...timeSlots,
          {
            title: title,
            //meetLink: meetLink,
            startDate: startDate,
            endDate: endDate,
            startTime: startTime,
            endTime: endTime,
            weekDays: selectedWeekDays,
          },
        ],
      };
    }
    try {
      const response = await request.post(API_PATH.UPDATE_MENTOR_PROFILE, body);
      if (response.data.message === 'Success') {
        setTimeSlots(response.data.data.timeSlot);
        setOpenBackdrop(false);
        setOpenModal(false);
        setNotTimeSlot(false);
        setWeekDays(weekDaysData);
        setStartDate(new Date());
        setEndDate(new Date());
        setStartTime(new Date());
        setEndTime(new Date());
        //setMeetLink('');
        setTitle('');
        setEditTimeSlotData(false);
      }
    } catch (err) {
      setErrorResponse(true);
      console.log(err);
    }
  };

  if (errorResponse) throw Error('BAD API REQUEST');

  return (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Dialog
        className={`${timeSlotModalWrapper} ${root}`}
        open={openModal}
        aria-labelledby="responsive-dialog-title"
        onClose={handleModalClose}
      >
        <DialogTitle
          className={heading}
          id="responsive-dialog-title"
        >{`Add a timeslot`}</DialogTitle>
        <DialogContent style={{ padding: '0px 24px' }}>
          <DialogContentText>
            <div className={modalContent}>
              <p className={createTitle}>Create Title</p>
              <Input
                inputProps={{ 'aria-label': 'description' }}
                className={titleInput}
                placeholder={'Title'}
                {...{
                  autoFocus: true,
                }}
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <div className={calendarDateWrapper}>
                <div className={calendarDateInput}>
                  <label htmlFor="Start Date">Start Date</label>
                  <DatePicker
                    customInput={<StartDateInput />}
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    minDate={new Date()}
                    startDate={startDate}
                    endDate={endDate}
                    useWeekdaysShort={true}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div className={calendarDateInput}>
                  <label htmlFor="Start Date">End Date</label>
                  <DatePicker
                    customInput={<EndDateInput />}
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    useWeekdaysShort={true}
                    minDate={startDate}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
              </div>
              <p style={{ marginTop: '25px' }}>Choose a day/recurring days</p>
              <div className={weekDaysWrapper}>
                {weekDays.map((data, index) => {
                  return (
                    <button
                      key={index}
                      className={weekDays[index].selected ? slectedWeekDay : ''}
                      onClick={() => toggleClass(index)}
                      onFocus={e =>
                        (e.target.parentElement.style.border =
                          '2px solid #3F51B5')
                      }
                      onBlur={e =>
                        (e.target.parentElement.style.border =
                          '2px solid #bdbdbd')
                      }
                    >
                      {data.calendarLabel}
                    </button>
                  );
                })}
              </div>
              <div className={calendarDateWrapper}>
                <div className={calendarDateInput}>
                  <label htmlFor="Start Date">Start Time</label>
                  <DatePicker
                    selected={startTime}
                    onChange={date => setStartTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    customInput={<StartTimeInput />}
                  />
                </div>
                <div className={calendarDateInput}>
                  <label htmlFor="Start Date">End Time</label>
                  <DatePicker
                    selected={endTime}
                    onChange={date => setEndTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    customInput={<EndtTimeInput />}
                  />
                </div>
      {/*           <p className={createTitle} style={{ marginTop: '25px' }}>
                  Meeting link:
                </p>
                <TextField
                  {...{
                    id: `${'gooleMeet'}`,
                    className: `${gooleMeet}`,
                    variant: 'outlined',
                    inputProps: { 'data-testid': `${gooleMeet}` },
                    name: `${gooleMeet}`,
                    value: meetLink,
                    onChange: event => {
                      setMeetLink(event.target.value);
                    },
                  }}
                /> */}
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={timeSlotsButtons}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpenModal(false)}
          >
            Discard
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => saveTimeSlot()}
            disabled={!(title !== '' /* && meetLink !== '' */ ? true : false)}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TimeSlotModal;

const weekDaysData = [
  {
    calendarLabel: 'Su',
    timeSlotLabel: 'Sun',
    selected: false,
  },
  {
    calendarLabel: 'M',
    timeSlotLabel: 'Mon',
    selected: false,
  },
  {
    calendarLabel: 'T',
    timeSlotLabel: 'Tue',
    selected: false,
  },
  {
    calendarLabel: 'W',
    timeSlotLabel: 'Wed',
    selected: false,
  },
  {
    calendarLabel: 'Th',
    timeSlotLabel: 'Thu',
    selected: false,
  },
  {
    calendarLabel: 'F',
    timeSlotLabel: 'Fri',
    selected: false,
  },
  {
    calendarLabel: 'S',
    timeSlotLabel: 'Sat',
    selected: false,
  },
];

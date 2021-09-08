import React, { useState } from 'react';
import useStyles from './TimeSlotModal.style';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
} from '@material-ui/core/';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarIcon from '../../../../src/assets/images/CalendarIcon.svg';
import DownArrow from '../../../../src/assets/images/DownArrow.svg';

const TimeSlotModal = ({ openModal, setOpenModal, setNotTimeSlot }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
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
  } = classes;

  const [weekDays, setWeekDays] = useState([
    {
      lable: 'Su',
      selected: false,
    },
    {
      lable: 'M',
      selected: false,
    },
    {
      lable: 'T',
      selected: false,
    },
    {
      lable: 'W',
      selected: false,
    },
    {
      lable: 'Th',
      selected: false,
    },
    {
      lable: 'F',
      selected: false,
    },
    {
      lable: 'S',
      selected: false,
    },
  ]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

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

  const TimeInput = React.forwardRef(({ value, onClick }, ref) => (
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
  return (
    <Dialog
      className={root}
      open={openModal}
      aria-labelledby="responsive-dialog-title"
      onClose={handleModalClose}
    >
      <DialogTitle
        className={heading}
        id="responsive-dialog-title"
      >{`Add a timeslot`}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className={modalContent}>
            <p className={createTitle}>Create Title</p>
            <Input
              inputProps={{ 'aria-label': 'description' }}
              className={titleInput}
              placeholder={'Title'}
            />
            <div className={calendarDateWrapper}>
              <div className={calendarDateInput}>
                <label htmlFor="Start Date">Start Date</label>
                <DatePicker
                  customInput={<StartDateInput />}
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
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
                  minDate={startDate}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
            <p className={heading} style={{ marginTop: '25px' }}>
              Repeat every
            </p>
            <div className={weekDaysWrapper}>
              {weekDays.map((data, index) => {
                return (
                  <button
                    key={index}
                    className={weekDays[index].selected ? slectedWeekDay : ''}
                    onClick={() => toggleClass(index)}
                  >
                    {data.lable}
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
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  customInput={<TimeInput />}
                />
              </div>
              <div className={calendarDateInput}>
                <label htmlFor="Start Date">End Time</label>
                <DatePicker
                  selected={endTime}
                  onChange={date => setEndTime(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  customInput={<TimeInput />}
                />
              </div>
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
          onClick={() => {
            setOpenModal(false);
            setNotTimeSlot(false);
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TimeSlotModal;

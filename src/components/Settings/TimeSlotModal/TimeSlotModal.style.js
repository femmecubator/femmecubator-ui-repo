import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiDialog-paper': {
      width: '370px',
      maxWidth: '370px',
      padding: '25px',
      // minWidth: ({ isMobile }) => (isMobile ? '85%' : 'auto'),
    },
  },
  heading: {
    '& h2': {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '38px',
      color: '#026FE4',
    },
  },
  modalContent: {
    '& p': {
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#495057',
    },
  },
  titleInput: {
    fontWeight: 'bold',
    fontSize: '21px',
    lineHeight: '29px',
    color: '#495057',
    width: '100%',
  },
  calendarDateWrapper: {
    marginTop: '20px',
  },
  calendarDateInput: {
    display: 'flex',
    marginBottom: '12px',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .react-datepicker__time-container ': {
      minWidth: '120px',
      '& .react-datepicker__time-box': {
        width: '100%',
      },
    },
    '& .react-datepicker-wrapper': {
      // width: 'fit-content',
    },
    '& label': {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#495057',
      width: '140px',
    },
  },
  calendarInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    cursor: 'pointer',
    background: 'white',
    border: '1px solid #828282',
    borderRadius: '4px',
  },
  date_input: {
    borderRight: '1px solid',
    paddingRight: '10px',
    fontWeight: 'normal !important',
    fontSize: '16px !important',
    lineHeight: '150% !important',
    color: '#495057 !important',
    margin: 0,
  },
  weekDaysWrapper: {
    border: '2px solid #2F80ED',
    borderRadius: '4px',
    width: 'fit-content',
    '& :last-child': {
      borderRight: 'none !important',
    },
    '& button': {
      background: 'white',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      width: '35px',
      borderRight: '1px solid #bdbdbd',
    },
  },
  slectedWeekDay: {
    background: '#E0E0E0 !important',
  },
  border_right_none: {
    borderRight: 'none !important',
    paddingRight: 'none !important',
    minWidth: '80px',
  },
  timeSlotsButtons: {
    justifyContent: 'center',
    paddingTop: '30px',
    '& button:first-child': {
      color: '#026FE4',
      borderColor: '#026FE4',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '25px',
    },
    '& button:nth-child(2)': {
      backgroundColor: '#026FE4',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '25px',
    },
  },
  timeSlotModalWrapper: {
    '& .MuiDialog-scrollPaper': {
      '& .MuiDialog-paper': {
        padding: ({ isMobile }) =>
          isMobile ? '25px 0px 30px 0px' : '25px 25px 30px 25px',
        margin: ({ isMobile }) => (isMobile ? '8px' : '32px'),
      },
    },
  },
}));

export default useStyles;

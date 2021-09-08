import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  settingsWrapper: {
    width: '85%',
    margin: '0px auto',
    paddingTop: '60px',
    paddingBottom: '80px',
  },
  title: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '38px',
    color: '#495057',
  },
  insideWrapper: {
    display: 'grid',
    gridTemplateColumns: '0.25fr 0.75fr',
    gap: '20px',
  },
  accountInfoWrapper: {
    padding: '38px 25px',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  mentorName: {
    height: '54px',
    width: '54px',
    background: '#FFAB00',
    borderRadius: '50%',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '21px',
    lineHeight: '29px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mentorProfession: {
    marginTop: 0,
    marginBottom: 0,
  },
  mentorFullName: {
    marginTop: 0,
    marginBottom: 0,
  },
  batch: {
    background: '#026FE4',
    border: '2px solid #026FE4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    marginTop: '25px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '150%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80px',
  },
  email_password: {
    marginTop: '25px',
    '& p': {
      margin: 0,
    },
    '& h4': {
      margin: 0,
    },
  },
  settingsButton: {
    border: '1px solid #026FE4',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '25px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#026FE4',
    marginTop: '50px',
    textTransform: 'inherit',
  },
  tabs: {
    borderBottom: '1px solid #828282;',
  },
  tabsWrapper: {
    '& .tabButtons': {
      marginRight: '40px',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '21px',
      lineHeight: '29px',
      color: '#828282',
      cursor: 'pointer',
      paddingBottom: '10px',
      background: 'transparent',
      border: 'none',
    },
  },
  activeTab: {
    color: '#6B54CF !important',
    borderBottom: '3px solid #6B54CF !important',
    transition: '',
  },
  tabsContent: {
    border: '1px solid #BDBDBD',
    boxSizing: 'border-box',
    borderRadius: '8px',
    marginTop: '15px',
    padding: '20px',
    paddingBottom: '40px',
  },
  inputGroups: {
    marginBottom: '18px',
    '& h4': {
      margin: 0,
    },
    '& p': {
      background: '#F2F2F2',
      border: '1px solid #828282',
      boxSizing: 'border-box',
      borderRadius: '4px',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '150%',
      color: '#4F4F4F',
      padding: '8px',
      marginTop: '8px',
      width: 'fit-content',
    },
  },
  textArea: {
    background: '#F2F2F2',
    border: '1px solid #828282',
    boxSizing: 'border-box',
    borderRadius: '4px',
    width: '100%',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#4F4F4F',
    padding: '10px',
    marginTop: '10px',
    minHeight: '100px',
    '&:focus': {
      border: '1px solid #3f51b5',
    },
  },
  gooleMeet: {
    display: 'flex',
    gap: '20px',
    '& p': {
      color: '#026FE4',
      fontWeight: '600',
    },
  },
  profileEdit: {
    width: '100%',
    display: 'flex',
    justifyContent: 'right',
  },
  bookingInner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '25px 0px',
    flexDirection: 'column',
    '& button': {
      marginTop: '10px',
      fontSize: '18px',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    '& p': {
      fontWeight: 'normal',
      fontSize: '21px',
      lineHeight: '29px',
      color: '#495057',
    },
  },
  timSlotHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& button': {
      height: 'fit-content',
      marginTop: '0',
      lineHeight: '20px',
      fontSize: '16px',
    },
    '& .rightWrapper': {
      alignItems: 'center',
      display: 'flex',
      gap: '20px',
      position: 'relative',
      '& img': {
        cursor: 'pointer',
      },
    },
  },
  timeSlotData: {
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '15px',
    // borderBottom: '1px solid #BDBDBD',
    '& span': {
      marginRight: '5px',
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#026FE4',
    },
    '& div': {
      fontWeight: 'bold',
      fontSize: '21px',
      lineHeight: '29px',
      color: '#495057',
      marginRight: '35px',
    },
    '& p': {
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '25px',
      color: '#4F4F4F',
    },
  },
  dropDown: {
    flexDirection: 'column',
    background: '#495057',
    padding: '15px 25px',
    alignItems: 'flex-start',
    color: '#ffffff',
    borderRadius: '4px',
    display: 'flex',
    gap: '20px',
  },
  threeDotsWrapper: {
    cursor: 'pointer',
    '&:hover > div': {
      visibility: 'visible',
    },
  },
  dropDownWrapper: {
    visibility: 'hidden',
    position: 'absolute',
    right: '-5px',
    top: '24px',
    paddingTop: '24px',
  },
}));

export default useStyles;

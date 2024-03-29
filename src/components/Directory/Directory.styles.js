import { makeStyles } from '@material-ui/core';

const font = {
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: '700',
};

const fontMeet = {
  fontFamily: 'Open Sans, sans-serif',
};
const highlightColor = '#026FE4';
const useStyles = makeStyles(() => ({
  root: {
    ...font,
    backgroundColor: 'white',
    height: '100vh',
  },
  loadingIcon: {
    position: 'fixed',
    left: '45%',
    top: '50%',
  },
  mentorDirectory: {
    position: 'relative',
    backgroundColor: 'white',
    margin: ({ isMobile }) => (isMobile ? '0' : '0 2rem'),
  },
  directoryTab: {
    ...font,
    color: '#CFCFCF',
    fontSize: '20px',
  },
  directoryHeader: {
    ...font,
    color: '#495057',
    fontSize: '25px',
    margin: '1rem 0 0 5rem',
  },
  mentorListContainer: {
    overflow: 'auto',
    maxHeight: ({ isMobile }) => (isMobile ? '65vh' : '70vh'),
    marginTop: ({ isMobile }) => (isMobile ? '0' : '3rem'),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'white',
    gap: '24px',
    padding: '24px',
    margin: 'auto',
    '@media (max-width: 799px)': {
      padding: '4px',
    },
  },
  tabs: {
    borderBottom: '1px #BDBDBD solid',
    margin: ({ isMobile }) => (isMobile ? '1rem' : '1.2rem 2rem 2rem 2rem'),
  },
  meetingWrapper: {
    maxWidth: '860px',
    border: '1px solid #BDBDBD',
    borderRadius: '8px',
    marginBottom: '90px',
    marginLeft: ({ isSmallDevice }) => (isSmallDevice ? '12px' : '30px'),
    marginRight: ({ isSmallDevice }) => (isSmallDevice ? '12px' : '30px'),
  },
  dialogTitle: {
    ...fontMeet,
    textAlign: 'center',
    '& h2': {
      fontSize: ({ isMobile }) => (isMobile ? '24px' : '28px'),
      fontWeight: '700',
      color: '#495057',
    },
  },
  dialogText: {
    ...fontMeet,
    textAlign: 'center',
    margin: 'auto',
    fontSize: ({ isMobile }) => (isMobile ? '18px' : '21px'),
  },
  highlightText: {
    color: `${highlightColor}`,
    fontWeight: '700',
  },
  countDown: {
    color: `${highlightColor}`,
    fontWeight: `600`,
    fontSize: ({ isMobile }) => (isMobile ? '20px' : '24px'),
  },
  closeIcon: {
    '& > svg': {
      cursor: 'pointer',
      color: '#888888',
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
  actionButtons: {
    justifyContent: 'center !important',
  },
  actionButton: {
    borderRadius: '0',
    margin: '0 10px !important',
    fontSize: ({ isMobile }) => (isMobile ? '16px' : '18px'),
  },
  actionButtonOutlined: {
    border: `1px solid ${highlightColor}`,
    color: `${highlightColor}`,
  },
  actionButtonContained: {
    color: '#fff',
    backgroundColor: `${highlightColor}`,
  },
  actionButtonContainedSecondary: {
    color: '#fff',
    backgroundColor: `#828282`,
    '&:hover': {
      backgroundColor: `#4a4a4a`,
    },
  },
  paddingTopSm: {
    paddingTop: '20px !important',
  },
  paddingBottomSm: {
    paddingBottom: '20px !important',
  },
  paddingBottomNm: {
    paddingBottom: '35px !important',
  },
  paddingTopMd: {
    paddingTop: '40px !important',
  },
  paddingBottomMd: {
    paddingBottom: '40px !important',
  },
  paddingTopLg: {
    paddingTop: '60px !important',
  },
  paddingBottomLg: {
    paddingBottom: '60px !important',
  },
  fontWeightBold: {
    fontWeight: '700',
  },
  restrictedWidth: {
    maxWidth: '350px',
  },
  slotTableContainer: {
    display: 'flex',
    justifyContent: `space-between`,
    alignItems: `center`,
    paddingTop: 0,
    '& .slotGrid': {
      paddingRight: '15px',
      paddingLeft: '15px',
      paddingTop: '10px',
    },
    '& svg': {
      cursor: 'pointer',
      color: '#888888',
      opacity: 0.9,
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
  rootMeet: {
    '& .MuiDialog-paper': {
      width: '880px',
      maxWidth: '800px',
      borderRadius: ({ isMobile }) => (isMobile ? '8px' : '16px'),
      minWidth: ({ isMobile }) => (isMobile ? '85%' : 'auto'),
    },
  },
  backdrop: {
    zIndex: 999999,
    color: '#fff',
  },
  centerContent: {
    textAlign: 'center',
  },
  roundedButton: {
    borderRadius: '5px',
  },
  goalsTextArea: {
    margin: 'auto',
    maxWidth: 580,
    maxHeight: 120,
    width: '90%',
    '& .MuiTextField-root': {
      width: '100%',
      position: 'relative',
    },
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      top: -32,
      left: -5,
      color: 'red',
      fontSize: 16,
    },
  },
  accountInfoWrapper: {
    padding: '20px 20px 10px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'center',
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
    width: '90%',
    '& p': {
      margin: 0,
    },
    '& h4': {
      margin: 0,
      color: '#4F4F4F',
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
    marginTop: ({ isMobile }) => (isMobile ? '20px' : '50px'),
    textTransform: 'inherit',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  securityFields: {
    marginTop: '10px',
    width: '100%',
    '& div': {
      '& input': {
        padding: '11.5px 14px',
      },
    },
  },
  disabledInputsBG: {
    background: '#F2F2F2 !important',
  },
  personalInfoDisabled: {
    '& div': {
      '& input': {
        padding: 0,
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#4F4F4F',
      },
    },
    '& fieldset': {
      border: 'none',
    },
  },
}));

export default useStyles;

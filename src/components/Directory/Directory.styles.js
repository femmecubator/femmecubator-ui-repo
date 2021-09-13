import { makeStyles } from '@material-ui/core';

const font = {
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: '700',
};
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
    overflow: 'scroll',
    maxHeight: ({ isMobile }) => (isMobile ? '65vh' : '70vh'),
    marginTop: ({ isMobile }) => (isMobile ? '0' : '3rem'),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
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
}));

export default useStyles;

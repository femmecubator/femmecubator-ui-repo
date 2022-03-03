/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core';
import { Translate } from '@material-ui/icons';
import { font } from '../Directory/utils';

const highlightColor = '#026FE4';

const useStyles = makeStyles(() => ({
  // root: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   background: '#EEF2F6',
  //   width: '100%',
  //   minHeight: ({ isMobile }) =>
  //     isMobile ? 'calc(100vh - 56px)' : 'calc(100vh - 64px)',
  // },
  // forgotContainer: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   padding: '0 20px',
  //   background: 'white',
  //   textAlign: 'center',
  //   width: ({ isMobile }) => (isMobile ? '100%' : '400px'),
  //   maxWidth: ({ isMobile }) => (isMobile ? '100%' : '400px'),
  //   height: ({ isMobile }) => (isMobile ? '100%' : '650px'),
  //   minHeight: ({ isMobile }) => (isMobile ? 'calc(100vh - 64px)' : '650px'),
  //   minWidth: ({ isMobile }) => (isMobile ? '85%' : 'auto'),
  // },
  root: {
    width: ({ isTablet }) => (isTablet ? '100%' : 'calc(100% - 280px)'),
    height: 'fit-content',
    '& th': {
      fontWeight: 'bold',
      background: '#e5e5e5',
    },
  },
  pageTitle: {
    color: '#495057',
    fontSize: '28px',
    marginTop: 40,
    marginBottom: ({ isMobile }) => (isMobile ? 30 : 40),
  },
  tabContainer: {
    width: 'full',
    borderBottom: '1px solid #CFCFCF',
    marginBottom: 20,
  },
  tabTitle: {
    color: '#6B54CF',
    marginBottom: 0,
    width: 'fit-content',
    borderBottom: '2px solid #6B54CF',
  },
  subtitle: {
    fontSize: ({ isMobile }) => (isMobile ? 24 : 32),
    fontWeight: 'normal',
    color: '#828282',
    margin: ({ isMobile }) => (isMobile ? '30px 0' : '40px 0'),
    '& span': {
      color: '#026FE4',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: ({ isTablet }) => (isTablet ? 'column' : 'row'),
    gap: ({ isMobile }) => (isMobile ? 40 : 80),
  },
  filters: {
    display: 'flex',
    flexDirection: ({ isTablet }) => (isTablet ? 'row' : 'column'),
    '& p': {
      marginRight: ({ isMobile }) => (isMobile ? '10px' : '0px'),
    },
    flexWrap: 'wrap',
    '& .Mui-checked': {
      color: '#026FE4',
      paddingTop: ({ isMobile }) => (isMobile ? '5px' : '9px'),
      paddingBottom: ({ isMobile }) => (isMobile ? '5px' : '9px'),
    },
  },
  filtersContainer: {
    width: ({ isTablet }) => (isTablet ? '100%' : '200px'),
  },
  boldFont: {
    fontWeight: 'bold',
  },
  filterTitleAdjustment: {
    marginLeft: '10px !important',
    marginBottom: ({ isMobile }) => (isMobile ? '10px' : '20px'),
  },
  filterTitle: {
    fontSize: 22,
    color: '#828282',
    marginBottom: ({ isMobile }) => (isMobile ? '10px' : '30px'),
    marginTop: 0,
  },
  filterOptionsContainer: {
    display: 'flex',
    alignItems: 'center',

    margin: 0,
  },
  filterOptions: {
    fontSize: ({ isMobile }) => (isMobile ? 16 : 20),
    color: '#828282',
  },
  filtersButton: {
    marginTop: ({ isMobile }) => (isMobile ? '20px' : '30px'),
    color: '#026FE4',
    fontSize: ({ isMobile }) => (isMobile ? 14 : 16),
    fontWeight: '600',
    marginLeft: 10,
    '& .MuiButton-outlinedPrimary': {
      // color: '#026FE4',
    },
  },
}));

export default useStyles;

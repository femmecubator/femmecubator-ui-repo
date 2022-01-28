/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core';
import { font } from '../utils';

const highlightColor = '#026FE4';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiDialog-paper': {
      width: '650px',
      maxWidth: '650px',
      minWidth: ({ isMobile }) => (isMobile ? '85%' : 'auto'),
    },
  },
  dialogTitle: {
    ...font,
    textAlign: 'center',
    '& h2': {
      fontSize: ({ isMobile }) => (isMobile ? '24px' : '28px'),
      fontWeight: '700',
      color: '#495057',
    },
  },
  dialogText: {
    ...font,
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
    justifyContent: 'center',
  },
  actionButton: {
    borderRadius: '0',
    margin: '0 10px',
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
    paddingTop: '20px',
  },
  paddingBottomSm: {
    paddingBottom: '20px',
  },
  paddingTopMd: {
    paddingTop: '40px',
  },
  paddingBottomMd: {
    paddingBottom: '40px',
  },
  paddingTopLg: {
    paddingTop: '60px !important',
  },
  paddingBottomLg: {
    paddingBottom: '60px',
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
    '& svg': {
      cursor: 'pointer',
      color: '#888888',
      opacity: 0.9,
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
}));

export default useStyles;

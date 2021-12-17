/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core';
import { Translate } from '@material-ui/icons';
import { font } from '../Directory/utils';

const highlightColor = '#026FE4';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#EEF2F6',
    width: '100%',
    minHeight: ({ isMobile }) =>
      isMobile ? 'calc(100vh - 56px)' : 'calc(100vh - 64px)',
  },
  forgotContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 20px',
    background: 'white',
    textAlign: 'center',
    width: ({ isMobile }) => (isMobile ? '100%' : '400px'),
    maxWidth: ({ isMobile }) => (isMobile ? '100%' : '400px'),
    height: ({ isMobile }) => (isMobile ? '100%' : '650px'),
    minHeight: ({ isMobile }) => (isMobile ? 'calc(100vh - 64px)' : '650px'),
    minWidth: ({ isMobile }) => (isMobile ? '85%' : 'auto'),
  },
  successContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    background: 'white',
    textAlign: 'center',
    width: ({ isMobile }) => (isMobile ? '100%' : '400px'),
    maxWidth: ({ isMobile }) => (isMobile ? '100%' : '400px'),
    height: ({ isMobile }) => (isMobile ? '100%' : '650px'),
    minHeight: ({ isMobile }) => (isMobile ? 'calc(100vh - 64px)' : '650px'),
    minWidth: ({ isMobile }) => (isMobile ? '85%' : 'auto'),
  },
  logo: {
    width: 130,
    height: 50,
  },
  successlogo: {
    width: 67,
    height: 67,
  },
  dialogTitle: {
    ...font,
    color: '#495057',
    fontWeight: '700',
    textAlign: 'center',
    maxWidth: '300px',
  },
  dialogText: {
    ...font,
    color: '#4f4f4f',
    maxWidth: '300px',
    textAlign: 'center',
    margin: 'auto',
  },
  field: {
    margin: '30px auto 50px',
    '& input': {
      width: ({ isMobile }) => (isMobile ? '80vw' : '330px'),
    },
    '& .MuiFilledInput-root': {
      // height: ({ isMobile }) => (isMobile ? '50px' : '70px'),

      backgroundColor: '#ffffff',
      border: '1px solid black',
      borderRadius: 5,
    },
    '& .MuiFilledInput-underline:before': {
      border: 'none',
    },
    '& .MuiFilledInput-underline:after': {
      border: 'none',
    },
    '& .MuiInputBase-root': {
      height: ({ isMobile }) => (isMobile ? '50px' : '70px'),
    },
    '& .MuiFormLabel-root': {
      fontWeight: 'bold',
      color: '#4f4f4f',
    },
    '& .MuiInputLabel-filled': {
      transform: ({ isMobile }) =>
        isMobile
          ? `translate(12px, 18px) scale(1)`
          : `translate(12px, 28px) scale(1)`,
    },
    '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
      transform: `translate(12px, 10px) scale(0.75)`,
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#4f4f4f',
    },
  },
  passField: {
    position: 'relative',
    margin: 10,
    '& input': {
      width: ({ isMobile }) => (isMobile ? '80vw' : '330px'),
      maxWidth: '300px',
    },
    '& .MuiFilledInput-root': {
      // height: ({ isMobile }) => (isMobile ? '50px' : '70px'),

      backgroundColor: '#ffffff',
      border: '1px solid #4f4f4f',
      borderRadius: 5,
    },
    '& .MuiFilledInput-underline:before': {
      border: 'none',
    },
    '& .MuiFilledInput-underline:after': {
      border: 'none',
    },
    '& .MuiInputBase-root': {
      height: ({ isMobile }) => (isMobile ? '50px' : '70px'),
    },
    '& .MuiFormLabel-root': {
      fontWeight: 'normal',
      color: '#4f4f4f',
    },
    '& .MuiInputLabel-filled': {
      transform: ({ isMobile }) =>
        isMobile
          ? `translate(12px, 18px) scale(1)`
          : `translate(12px, 28px) scale(1)`,
    },
    '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
      transform: `translate(12px, 10px) scale(0.75)`,
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#2F80ED',
    },
  },
  focusBorder: {
    '& .MuiFilledInput-root': {
      border: '1px solid #2F80ED',
    },
  },
  hidePass: {
    position: 'absolute',
    top: '50%',
    right: 15,
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8',
    },
  },
  showPass: {
    position: 'absolute',
    top: '50%',
    right: 15,
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8',
    },
  },
  actionButtons: {
    justifyContent: 'center',
  },
  actionButton: {
    margin: '0 10px',
    fontSize: ({ isMobile }) => (isMobile ? '16px' : '18px'),
    borderRadius: '5px',
    fontWeight: 700,
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
  narrowWidth: {
    maxWidth: 230,
  },
  normalWidth: {
    maxWidth: 270,
  },
  marginTopSm: {
    marginTop: 20,
  },
  marginBottomSm: {
    marginBottom: 20,
  },
  marginTopNm: {
    marginTop: 30,
  },
  marginBottomNm: {
    marginBottom: 30,
  },
  marginTopMd: {
    marginTop: 40,
  },
  marginBottomMd: {
    marginBottom: 40,
  },
  marginTopLg: {
    marginTop: 50,
  },
  marginBottomLg: {
    marginBottom: 50,
  },
}));

export default useStyles;

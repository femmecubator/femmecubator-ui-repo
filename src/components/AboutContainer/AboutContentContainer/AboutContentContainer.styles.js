import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    padding: '29px 64px 180px 36px',
    borderLeft: '1px solid #828282',
    '@media (max-width: 799px)': {
      paddingTop: 0,
      borderLeft: 0,
    },
  },
  title: {
    color: '#026FE4',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: 28,
    marginBottom: 15,
    '@media (max-width: 490px)': {
      fontSize: 21,
    },
  },
  content: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: '#495057',
    margin: '36px 15% 0 0',
    '@media (max-width: 1055px)': {
      margin: '0 15px -125px 15px',
    },
  },
  blue: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: 18,
    color: '#026FE4',
  },
  photosContainer: {
    margin: '10px 0 40px',
  },
  photoContainer: {
    width: 300,
    height: 300,
    '& img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
  },
}));

export default useStyles;

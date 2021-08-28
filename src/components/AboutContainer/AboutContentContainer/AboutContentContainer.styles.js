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
    marginLeft: 10,
    '@media (max-width: 760px)': {
      fontSize: 19,
      marginLeft: 0,
      paddingTop: 10,
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
    margin: '10px 0 20px -40px',
  },
  photoContainer: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexFlow: 'row wrap',
    '& img': {
      objectFit: 'cover',
      width: 300,
      height: 300,
      borderRadius: 5,
      '@media (max-width: 299px)': {
        width: 150,
        height: 150,
      },
      '@media (min-width: 300px) and (max-width: 399px)': {
        width: 200,
        height: 200,
      },
      '@media (min-width: 400px) and (max-width: 769px)': {
        width: 250,
        height: 250,
      },
    },
    '& p': {
      margin: 0,
    },
    '& p:first-of-type': {
      marginTop: 10,
      fontWeight: 'bold',
    },
    '& p:last-of-type': {
      marginBottom: 20,
    },
  },
  memberCard: {
    margin: 10,
    '@media (max-width: 760px)': {
      margin: 0,
      padding: 5,
    },
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    maxWidth: 1440,
    padding: '29px 64px 180px 36px',
    borderLeft: '1px solid #828282',
    '@media (max-width: 1055px)': {
      padding: '29px 0px 180px 0px',
    },
    '@media (max-width: 760px)': {
      padding: '0px 0px 180px 0px',
      borderLeft: 0,
    },
  },
  title: {
    color: '#026FE4',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: 28,
    marginBottom: 15,
    // marginLeft: 30,
    '@media (max-width: 1055px)': {
      // marginLeft: 30,
    },
    '@media (max-width: 760px)': {
      fontSize: 19,
      // marginLeft: 26,
      marginBottom: 0,
      paddingTop: 20,
    },
  },
  content: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: '#495057',
    margin: '36px 15% 0 0',
    padding: '0 20px',
    '@media (max-width: 1055px)': {
      margin: '0 0px -125px 0px',
    },
    '@media (max-width: 760px)': {
      margin: '0 0px -125px 0px',
    },
  },
  blue: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: 18,
    color: '#026FE4',
  },
  photosContainer: {
    margin: '10px 0 20px 0px',
    '@media (max-width: 1055px)': {
      width: '100% !important',
    },
  },
  photoContainer: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexFlow: 'row wrap',
    marginLeft: '-10px',
    padding: '20px 0 !important',
    '& img': {
      objectFit: 'cover',
      width: 150,
      height: 150,
      borderRadius: 5,
      '@media (max-width: 450px)': {
        width: '100%',
        height: 'auto',
        aspectRatio: 1,
      },
      // '@media (min-width: 300px) and (max-width: 399px)': {
      //   width: 200,
      //   height: 200,
      // },
      // '@media (min-width: 400px) and (max-width: 769px)': {
      //   width: 250,
      //   height: 250,
      // },
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
    '@media (max-width: 760px)': {
      paddingBottom: '0px !important',
      marginLeft: '-5px',
    },
  },
  memberCard: {
    margin: 10,
    width: 150,
    '@media (max-width: 760px)': {
      margin: 0,
      padding: 5,
    },
    '@media (max-width: 450px)': {
      width: '45%',
    },
  },
  listStyle: {
    paddingLeft: 0,
    '& li': {
      listStyle: 'none',
    },
  },
  slackFormContainerParent: {
    '@media (max-width: 760px)': {
      padding: '20px 0px !important',
    },
  },
  slackFormContainer: {
    maxWidth: '90%',
    backgroundColor: '#ABF5D1',
    width: '90%',
    padding: '40px',
    margin: '0 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& h2': {
      margin: 0,
    },
    '& button': {
      minWidth: 150,
      margin: 20,
      padding: '10px 20px',
    },
    '@media (max-width: 1055px)': {
      width: '70%',
      flexDirection: 'column',
      margin: 'auto',
    },
    '@media (max-width: 760px)': {
      padding: 20,
    },
  },
  bookAndContributeComponentTitle: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '28px',
    color: '#400CCC',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 799px)': {
      marginBottom: '15px',
      textAlign: 'center',
    },
  },
  linkStyle: {
    textDecoration: 'none',
  },
  joinSlackButton: {
    alignSelf: 'center',
  },
  emailStyle: {
    textDecoration: 'none',
    color: '#495057',
  },
}));

export default useStyles;

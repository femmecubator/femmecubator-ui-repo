import { makeStyles } from '@material-ui/core';
const subheaderColors = {
  mentors: '#a454c2',
  threads: '#719AF5',
};
const font = {
  fontFamily: 'Open Sans, sans-serif',
  color: 'white',
  margin: '.5rem',
};

const useStyles = makeStyles((theme) => ({
  subheaderContainer: {
    display: 'flex',
    minHeight: '100px',
    minWidth: '100%',
  },
  subheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '90px',
    width: '100%',
    backgroundColor: ({ variant }) => subheaderColors[variant],
    top: '64px',
    borderRadius: '0px',
    padding: '0rem 1.5rem 0rem 10rem',
    overflow: 'hidden',
  },
  subheaderItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subheaderIcon: {
    height: '90%',
    width: '9.5rem',
    margin: '.5rem 0 0 0',
  },
  mainText: {
    ...font,
    fontSize: '28px',
    fontWeight: '700',
    lineHeight: '35px',
  },
  subText: {
    ...font,
    fontSize: '15px',
    lineHeight: '29px',
    padding: '.5rem 0 0 0',
    margin: '0 0 0 1.2rem',
  },
  closeIcon: {
    cursor: 'pointer',
    padding: '0 0 2rem 0',
  },
}));

export default useStyles;

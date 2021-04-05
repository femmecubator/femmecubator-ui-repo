import { makeStyles } from '@material-ui/core';
const subheaderColors = {
  mentors: '#a454c2',
  threads: '#719AF5',
};
const font = {
  fontFamily: 'Open Sans, sans-serif',
  color: 'white',
};

const useStyles = makeStyles(() => ({
  subheaderContainer: {
    display: 'flex',
    minHeight: '100px',
    minWidth: '100%',
  },
  subheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90px',
    width: '100%',
    backgroundColor: ({ variant }) => subheaderColors[variant],
    top: '64px',
    borderRadius: '0px',
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
    width: 'clamp(9rem, 10vw, 9.5rem)',
    margin: '.5rem 0 0 0',
  },
  mainText: {
    ...font,
    fontSize: 'clamp(23.5px, 2.5vw, 28px)',
    fontWeight: '700',
    lineHeight: '35px',
  },
  subText: {
    ...font,
    fontSize: '19px',
    lineHeight: '29px',
    padding: '.5rem 0 0 0',
    margin: '0 7.5rem 0 1.2rem',
  },
  closeIcon: {
    position: 'absolute',
    right: '1%',
    top: ({ isMobile }) => (isMobile ? 'inherit' : '4.5rem'),
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const color = {
  white: '#ffffff',
  primaryAccent: '#026FE4',
  gray: '#4F4F4F',
};

const useStyles = makeStyles(theme => ({
  modal: ({ isMobile }) => ({
    display: 'flex',
    position: 'relative',
    top: isMobile ? '0' : '50%',
    transform: isMobile ? 'none' : 'translateY(-50%)',
    justifyContent: 'center',
    margin: 'auto',
    width: isMobile ? '100%' : '650px',
    height: isMobile ? '100%' : 'fit-content',
    maxWidth: '100vw',
    backgroundColor: color.white,
    fontFamily: 'Open Sans, sans-serif',
  }),
  labelText: {
    color: color.gray,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: '15px',
    padding: '10px 0',
    width: '100%',
  },
  inputField: {
    display: 'flex',
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 2),
  },
  modalSubmit: {
    margin: '25px',
    padding: '10px 21px',
    fontSize: '14px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '600',
    color: color.white,
    backgroundColor: color.primaryAccent,
    '&:hover': {
      backgroundColor: '#025bba',
    },
  },
  subheading: {
    margin: 0,
    color: color.gray,
    fontSize: '16px',
    fontWeight: '400',
  },
  heading: {
    margin: '10px',
    color: color.primaryAccent,
    fontWeight: '800',
    fontSize: '28px',
  },
}));

export default useStyles;

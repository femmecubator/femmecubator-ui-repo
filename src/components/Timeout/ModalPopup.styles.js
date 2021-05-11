import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  modal_background: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: '1000',
    fontFamily: 'Open Sans, sans-serif',
  },
  modal: {
    position: 'relative',
    background: 'white',
    width: '38rem',
    height: '28rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '28vh auto',
    '@media (min-width: 414px, max-width: 1023px)': {
      width: '75vw',
      height: 'auto',
      padding: '1.5rem',
      margin: '20vh auto',
    },
    '@media (max-width: 896px)': {
      width: '65vw',
      height: 'auto',
      padding: '1rem',
      margin: '28vh auto',
    },
  },
  modal__center_div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modal__center_div__content: {
    display: 'flex',
    flexDirection: 'column',
  },
  modal__center_div__content__p_head: {
    fontSize: '24px',
    fontWeight: '700',
    margin: '0',
    textAlign: 'center',
    color: 'rgb(80, 80, 80)',
  },
  modal__center_div__content__p_timer: {
    fontSize: '21px',
    fontWeight: '600',
    textAlign: 'center',
    color: 'rgb(0, 98, 255)',
  },
  modal__center_div__content__p_text: {
    textAlign: 'center',
    color: 'rgb(80, 80, 80)',
  },
  modal__center_div__buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  modal__center_div__buttons__button_logoff: {
    padding: '.5rem 1rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'white',
    borderRadius: '3px',
    transition: '200ms ease-in-out',
    cursor: 'pointer',
    background: 'gray',
    marginRight: '1rem',
    '&:hover': {
      filter: 'brightness(1.2)',
      transition: '300ms ease-in-out',
    },
  },
  modal__center_div__buttons__button_continue: {
    padding: '.5rem 1rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'white',
    borderRadius: '3px',
    transition: '200ms ease-in-out',
    cursor: 'pointer',
    background: 'rgb(56, 132, 255)',
    marginLeft: '1rem',
    '&:hover': {
      filter: 'brightness(1.2)',
      transition: '300ms ease-in-out',
    },
  },
}));

export default useStyles;

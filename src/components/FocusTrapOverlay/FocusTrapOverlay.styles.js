import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'block',
    overflow: 'scroll',
    zIndex: 1300,
  },
});

export default useStyles;

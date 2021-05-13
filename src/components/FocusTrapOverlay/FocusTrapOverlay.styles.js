import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    inset: 0,
    display: 'block',
    overflow: 'scroll',
    zIndex: 1300,
  },
});

export default useStyles;

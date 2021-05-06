import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    inset: 0,
    display: 'block',
    overflow: 'scroll',
  },
});

export default useStyles;

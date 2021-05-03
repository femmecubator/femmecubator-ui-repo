import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // zIndex: 100,
    position: 'fixed',
    // height: 'auto',
    // width: '100%',
    // minHeight: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    inset: 0,
    display: 'block',
    // alignItems: 'center',
    // justifyContent: 'center',
    overflow: 'scroll',
  },
}));

export default useStyles;

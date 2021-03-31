import { makeStyles } from '@material-ui/core/styles';

const color = {
  white: '#ffffff',
  primaryAccent: '#026FE4',
  gray: '#4F4F4F',
  gray6: '#F2F2F2',
  gray3: '#828282',
};

const useStyles = makeStyles((theme) => ({
  root: ({ isMobile }) => ({
    // margin: isMobile ? '0' : '5% 0',
  }),
  modal: {
    position: 'absolute',
    borderRadius: '4px',
    width: '631px',
    height: '774px',
    left: '354px',
    top: '250px',
    backgroundColor: color.white,
    fontFamily: 'Open Sans, sans-serif',
    padding: theme.spacing(2, 4, 3),
    transform: 'translate(-50%, -30%)',
  },
  textField: {
    position: 'absolute',
    left: '5.68%',
    right: '26.68%',
    top: '20.83%',
    bottom: '92.44%',
    // border: '1px solid',
    // borderBlockColor: color.gray3,
    // boxSizing: 'border-box',
    borderRadius: '4px',
  },
  buttonModal: {
    width: 'fit-content',
    height: '32px',
    backgroundColor: color.primaryAccent,
    color: color.white,
    position: 'absolute',
    left: '36%',
    right: '53%',
    top: '92%',
    bottom: '15%',
  },
  container: {
    // position: 'absolute',
    // left: '26.68%',
    // right: '57.84%',
    // top: '24.58%',
    // bottom: '73.25%',
    color: color.gray,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '25px',
    // border: '1px solid #BDBDBD',
    boxSizing: 'border-box',
    borderRadius: '8px',
  },
  h2: {
    color: color.primaryAccent,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '38px',
  },
}));

export default useStyles;

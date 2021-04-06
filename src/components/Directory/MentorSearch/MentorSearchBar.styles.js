import { makeStyles } from '@material-ui/core';
const avatarColors = [
  '#FF7452',
  '#FFAB00',
  '#D4EE9C',
  '#00C7E6',
  '#719AF5',
  '#CABEE9',
];

const useStyles = makeStyles((theme) => ({
  searchBar: {
    border: '#026FE4 2px solid',
    minWidth: '35%',
    position: 'absolute',
    right: '0',
    margin: '1rem',
  },
  searchBtn: {
    backgroundColor: '#026FE4 !important',
    color: 'white',
  },
}));

export default useStyles;

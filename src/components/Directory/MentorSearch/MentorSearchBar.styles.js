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
    minWidth: '45%',
    maxHeight: '20%',
    position: 'absolute',
    right: '0',
    top: '8.5rem',
    margin: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    margin: '4% 0',
    minWidth: '70%',
    height: '45px',
  },
  searchBtn: {
    root: {
      height: '45px',
    },
    marginLeft: '2%',
    backgroundColor: '#026FE4 !important',
    color: 'white',
  },
}));

export default useStyles;

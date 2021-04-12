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
    minWidth: '45vw',
    maxHeight: '20%',
    position: ({ isMobile }) => (isMobile ? 'relative' : 'absolute'),
    right: '0',
    top: ({ isMobile }) => (isMobile ? '0' : '12rem'),
    display: 'flex',
    alignItems: 'center',
    margin: ({ isMobile }) => (isMobile ? '.5rem' : '.7rem'),
  },
  searchInput: {
    minWidth: '73%',
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

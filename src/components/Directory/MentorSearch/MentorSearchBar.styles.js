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
    display: 'flex',
    alignItems: 'center',
    minWidth: '45vw',
    maxHeight: '20%',
    position: ({ isMobile }) => (isMobile ? 'relative' : 'absolute'),
    right: '0',
    top: ({ isMobile }) => (isMobile ? '0' : '12rem'),
    margin: ({ isMobile }) => (isMobile ? '.5rem' : '.7rem'),
  },
  searchInput: {
    minWidth: ({ isMobile }) => (isMobile ? '80%' : '73%'),
  },
  searchBtn: {
    marginLeft: ({ isMobile }) => (isMobile ? '0' : '2%'),
    minWidth: ({ isMobile }) => (isMobile ? '25%' : '17%'),
    backgroundColor: '#026FE4 !important',
    color: 'white',
  },
}));

export default useStyles;

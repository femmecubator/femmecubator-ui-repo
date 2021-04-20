import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '45vw',

    maxHeight: '20%',
    position: ({ isMobile }) => (isMobile ? 'relative' : 'absolute'),
    right: '0',
    top: ({ isMobile }) => (isMobile ? '0' : '12rem'),
    margin: ({ isMobile }) => (isMobile ? '.5rem' : '.7rem'),
    zIndex: 2,
  },
  searchInput: {
    minWidth: ({ isMobile }) => (isMobile ? '99%' : '73%'),
  },
  searchBtn: {
    marginLeft: ({ isMobile }) => (isMobile ? '0' : '2%'),
    minWidth: ({ isMobile }) => (isMobile ? '25%' : '17%'),
    backgroundColor: '#026FE4 !important',
    color: 'white',
    minHeight: '40px',
  },
}));

export default useStyles;

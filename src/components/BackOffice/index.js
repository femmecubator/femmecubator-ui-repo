import { Button, Checkbox, Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import useStyles from './BackOffice.styles';
import { API_PATH } from 'utils/constants';
import request from 'utils/axiosConfig';
import axios from 'axios';

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 80 },
  { id: 'lastName', label: 'Last Name', minWidth: 80 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 150,
  },
  {
    id: 'title',
    label: 'Title',
    minWidth: 80,
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 150,
  },
];

const rows = [
  {
    firstName: 'Leanne',
    lastName: 'Graham',
    email: 'Sincere@april.biz',
    title: 'Mentor',
  },
  {
    firstName: 'Ervin',
    lastName: 'Howell',
    email: 'Shanna@melissa.tv',
    title: 'Mentor',
  },
  {
    firstName: 'Clementine',
    lastName: 'Bauch',
    email: 'Nathan@yesenia.net',
    title: 'Mentor',
  },
  {
    firstName: 'Patricia',
    lastName: 'Lebsack',
    email: 'Julianne.OConner@kory.org',
    title: 'Mentee',
  },
  {
    firstName: 'Chelsey',
    lastName: 'Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    title: 'Mentee',
  },
  {
    firstName: 'Dennis',
    lastName: 'Schulist',
    email: 'Karley_Dach@jasper.info',
    title: 'Mentee',
  },
  {
    firstName: 'Kurtis',
    lastName: 'Weissnat',
    email: 'Telly.Hoeger@billy.biz',
    title: 'Mentee',
  },
];

const BackOfficeComponent = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(max-width:991px)');
  const classes = useStyles({ isMobile, isTablet });
  const {
    root,
    pageTitle,
    tabContainer,
    tabTitle,
    subtitle,
    contentContainer,
    filters,
    filtersContainer,
    boldFont,
    filterTitleAdjustment,
    filterTitle,
    filtersButton,
    filterOptions,
    filterOptionsContainer,
  } = classes;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const fetchAllUsersData = async () => {
    // const usersData = await request.get(API_PATH.ALL_USERS_DATA, {
    //   filterArray: [4, 1, 0],
    // });
    const usersData = axios.get(
      'http://local.femmecubator.com:3001/api/profile/getallusers',
      { filterArray: [4, 1, 0] }
    );
    console.log(usersData);
  };

  useEffect(() => {
    fetchAllUsersData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container fixed>
      <h1 className={pageTitle}>Dashboard</h1>
      <div className={tabContainer}>
        <h3 className={tabTitle}>Account Management</h3>
      </div>
      <h2 className={subtitle}>
        There are <span>100</span> registered members on Femmecubator as of
        (current date).
      </h2>
      <div className={contentContainer}>
        <div className={filtersContainer}>
          <p className={`${filterTitleAdjustment} ${filterTitle}`}>Filters</p>
          <p className={`${boldFont} ${filterTitleAdjustment}`}>Member Type</p>
          <div className={filters}>
            <p className={filterOptionsContainer}>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              <span className={filterOptions}>Mentors (68)</span>
            </p>
            <p className={filterOptionsContainer}>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              <span className={filterOptions}>Mentees (20)</span>
            </p>
            <p className={filterOptionsContainer}>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              <span className={filterOptions}>Admins (2)</span>
            </p>
            <p className={filterOptionsContainer}>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              <span className={filterOptions}>See All</span>
            </p>
          </div>
          <Button className={filtersButton} variant="outlined" color="primary">
            Apply Filters
          </Button>
        </div>
        {/* <div> */}
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map(column => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* </div> */}
      </div>
    </Container>
  );
};

export default BackOfficeComponent;

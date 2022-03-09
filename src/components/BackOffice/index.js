import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  Container,
} from '@material-ui/core';
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
import { userRoles } from 'utils/constants';
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';
import SnackBar from 'components/SnackBar';

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
    backdrop,
  } = classes;

  const [page, setPage] = React.useState(0);
  const [openBackdrop, setOpenBackdropt] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [usersData, setUsersData] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [usersCount, setUsersCount] = React.useState([]);
  const [dataFilters, setDataFilters] = React.useState({
    mentors: true,
    mentees: true,
    admins: true,
  });
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [userInAction, setUserInAction] = React.useState(null);
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState('');
  const [responseMessageType, setResponseMessageType] = React.useState('');

  const fetchAllUsersData = async () => {
    try {
      const filterArray = [];
      if (dataFilters.mentors) filterArray.push(userRoles.mentor);
      if (dataFilters.mentees) filterArray.push(userRoles.mentee);
      if (dataFilters.admins) filterArray.push(userRoles.admin);

      const usersRes = await request.post(API_PATH.ALL_USERS_DATA, {
        filterArray,
      });
      if (usersRes.data.message === 'Success') {
        const usersDataReceived = usersRes.data.data.usersData;
        const usersCount = usersRes.data.data.usersCount;
        setUsersCount([...usersCount]);
        let tempTotalCount = 0;
        usersCount.map(type => {
          tempTotalCount += type.count;
        });
        setTotalCount(tempTotalCount);
        setUsersData([...usersDataReceived]);
        setOpenBackdropt(false);
      }
    } catch (err) {
      setOpenBackdropt(false);
      setOpenSnackBar(true);
      setResponseMessage(err.data.message);
      setResponseMessageType('error');
    }
  };

  useEffect(() => {
    setOpenBackdropt(true);
    fetchAllUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTypeCount = id => {
    if (usersCount.length === 0) return 0;
    return usersCount.filter(userCount => userCount._id === id)[0].count;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteOpen = row => {
    setUserInAction(row);
    setOpenDelete(true);
  };
  const handleDeleteClose = () => {
    setUserInAction(null);
    setOpenDelete(false);
  };

  const handleEditOpen = row => {
    setUserInAction(row);
    setOpenEdit(true);
  };
  const handleEditClose = () => {
    setUserInAction(null);
    setOpenEdit(false);
  };

  return (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <SnackBar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        responseMessage={responseMessage}
        responseMessageType={responseMessageType}
      />
      <Container fixed>
        <h1 className={pageTitle}>Dashboard</h1>
        <div className={tabContainer}>
          <h3 className={tabTitle}>Account Management</h3>
        </div>
        <h2 className={subtitle}>
          There are <span>{totalCount}</span> registered members on Femmecubator
          as of (current date).
        </h2>
        <div className={contentContainer}>
          <div className={filtersContainer}>
            <p className={`${filterTitleAdjustment} ${filterTitle}`}>Filters</p>
            <p className={`${boldFont} ${filterTitleAdjustment}`}>
              Member Type
            </p>
            <div className={filters}>
              <p className={filterOptionsContainer}>
                <Checkbox
                  defaultChecked
                  checked={dataFilters.mentors}
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  onChange={() => {
                    setDataFilters({
                      ...dataFilters,
                      mentors: !dataFilters.mentors,
                    });
                  }}
                />
                <span className={filterOptions}>
                  Mentors ({getTypeCount(userRoles.mentor)})
                </span>
              </p>
              <p className={filterOptionsContainer}>
                <Checkbox
                  defaultChecked
                  checked={dataFilters.mentees}
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  onChange={() => {
                    setDataFilters({
                      ...dataFilters,
                      mentees: !dataFilters.mentees,
                    });
                  }}
                />
                <span className={filterOptions}>
                  Mentees ({getTypeCount(userRoles.mentee)})
                </span>
              </p>
              <p className={filterOptionsContainer}>
                <Checkbox
                  defaultChecked
                  checked={dataFilters.admins}
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  onChange={() => {
                    setDataFilters({
                      ...dataFilters,
                      admins: !dataFilters.admins,
                    });
                  }}
                />
                <span className={filterOptions}>
                  Admins ({getTypeCount(userRoles.admin)})
                </span>
              </p>
              <p className={filterOptionsContainer}>
                <Checkbox
                  defaultChecked
                  checked={
                    dataFilters.mentors &&
                    dataFilters.mentees &&
                    dataFilters.admins
                  }
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  onChange={() => {
                    if (
                      !dataFilters.mentors ||
                      !dataFilters.mentees ||
                      !dataFilters.admins
                    )
                      setDataFilters({
                        mentees: true,
                        mentors: true,
                        admins: true,
                      });
                    else
                      setDataFilters({
                        mentees: false,
                        mentors: false,
                        admins: false,
                      });
                  }}
                />
                <span className={filterOptions}>See All</span>
              </p>
            </div>
            <Button
              className={filtersButton}
              variant="outlined"
              color="primary"
              onClick={() => {
                fetchAllUsersData();
              }}
              disabled={
                !dataFilters.mentors &&
                !dataFilters.mentees &&
                !dataFilters.admins
              }
            >
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
                  {usersData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row._id}
                        >
                          {columns.map(column => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.id === 'action' ? (
                                  <>
                                    <Button
                                      onClick={() => {
                                        handleEditOpen(row);
                                      }}
                                      color="primary"
                                    >
                                      Edit
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        handleDeleteOpen(row);
                                      }}
                                      color="secondary"
                                    >
                                      Delete
                                    </Button>
                                  </>
                                ) : column.format &&
                                  typeof value === 'number' ? (
                                  column.format(value)
                                ) : (
                                  value
                                )}
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
              count={usersData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <DeleteUser
            userInAction={userInAction}
            openDelete={openDelete}
            handleDeleteOpen={handleDeleteOpen}
            handleDeleteClose={handleDeleteClose}
            fetchAllUsersData={fetchAllUsersData}
          />
          <EditUser
            userInAction={userInAction}
            openEdit={openEdit}
            handleEditOpen={handleEditOpen}
            handleEditClose={handleEditClose}
            fetchAllUsersData={fetchAllUsersData}
          />
          {/* </div> */}
        </div>
      </Container>
    </>
  );
};

export default BackOfficeComponent;

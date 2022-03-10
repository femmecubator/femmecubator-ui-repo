import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from '../Directory/Directory.styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { GoogleLogin } from 'react-google-login';
import { monthNames } from 'utils/timeConverter';
import { formatAMPM } from 'utils/timeConverter';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { API_PATH } from 'utils/constants';
import request from 'utils/axiosConfig';
import SnackBar from 'components/SnackBar';

const DeleteUser = ({
  openDelete,
  handleDeleteOpen,
  handleDeleteClose,
  userInAction,
  fetchAllUsersData,
  setPage,
}) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const [openBackdrop, setOpenBackdropt] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseMessageType, setResponseMessageType] = useState('');
  const classes = useStyles({ isMobile });
  const {
    rootMeet,
    dialogTitle,
    dialogText,
    highlightText,
    actionButtons,
    actionButton,
    actionButtonOutlined,
    actionButtonContained,
    paddingTopSm,
    paddingTopMd,
    paddingBottomLg,
    restrictedWidth,
    backdrop,
  } = classes;

  const deleteAccount = async () => {
    try {
      setOpenBackdropt(true);
      const deleteRes = await request.delete(
        API_PATH.DELETE_USER + '/' + userInAction._id
      );
      if (deleteRes.data.message === 'Success') {
        setOpenBackdropt(false);
        setOpenSnackBar(true);
        setResponseMessage('Account deleted successfully');
        setResponseMessageType('success');
        fetchAllUsersData();
        setPage(0);
        handleDeleteClose();
      }
    } catch (err) {
      setOpenBackdropt(false);
      setOpenSnackBar(true);
      setResponseMessage(err.data.message);
      setResponseMessageType('error');
    }
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
      <Dialog
        className={rootMeet}
        open={openDelete}
        onClose={() => {
          handleDeleteClose();
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          className={`${dialogTitle} ${paddingTopMd}`}
          id="responsive-dialog-title"
        >{`Delete Account?`}</DialogTitle>
        <DialogContent>
          <DialogContentText className={`${dialogText} ${restrictedWidth}`}>
            Are you sure you want to delete{' '}
            <span className={`${highlightText}`}>
              {userInAction ? userInAction.firstName : ''}
            </span>
            's account?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          className={`${actionButtons} ${paddingTopSm} ${paddingBottomLg}`}
        >
          <Button
            className={`${actionButton} ${actionButtonOutlined}`}
            variant="outlined"
            onClick={() => {
              handleDeleteClose();
            }}
            color="primary"
          >
            CANCEL
          </Button>
          <Button
            className={`${actionButton} ${actionButtonContained}`}
            variant="contained"
            onClick={() => {
              deleteAccount();
            }}
            color="primary"
          >
            CONFIRM
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteUser;

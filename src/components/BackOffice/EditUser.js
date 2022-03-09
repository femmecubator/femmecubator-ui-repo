import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useStyles from '../Directory/Directory.styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core/';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import jwt_decode from 'jwt-decode';
import { getTokenCookie } from 'utils/cookies';
import isEmpty from 'lodash/isEmpty';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { GoogleLogin } from 'react-google-login';
import { monthNames } from 'utils/timeConverter';
import { formatAMPM } from 'utils/timeConverter';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { API_PATH } from 'utils/constants';
import request from 'utils/axiosConfig';
import AccountInfo from 'components/Settings/AccountInfo';
import SnackBar from 'components/SnackBar';

const EditUser = ({
  openEdit,
  handleEditOpen,
  handleEditClose,
  userInAction,
  fetchAllUsersData,
}) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const [openBackdrop, setOpenBackdropt] = useState(false);
  const [disabledInputs, setDisableInputs] = React.useState(false);
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
    paddingTopLg,
    paddingTopMd,
    paddingBottomNm,
    paddingBottomSm,
    paddingBottomLg,
    restrictedWidth,
    accountInfoWrapper,
    profile,
    mentorName,
    mentorFullName,
    mentorProfession,
    batch,
    email_password,
    settingsButton,
    securityFields,
    personalInfoDisabled,
    backdrop,
  } = classes;

  const ONLY_LETTERS = 'Must only contain letters';
  const MIN_CHARS = 'Must be more than 1 character';
  const ONLY_LETTERS_WS = 'Must only contain letters and spaces';

  const personalInfoSchema = yup.object().shape({
    email: yup
      .string()
      .required('Email is required')
      .min(2, MIN_CHARS)
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid email format'
      ),
    firstName: yup
      .string()
      .required('First name is required')
      .min(2, MIN_CHARS)
      .matches(/^[a-zA-Z]+$/, ONLY_LETTERS),
    lastName: yup
      .string()
      .required('Last name is required')
      .min(2, MIN_CHARS)
      .matches(/^[a-zA-Z]+$/, ONLY_LETTERS),
    title: yup
      .string()
      .required('Job Title is required')
      .min(2, MIN_CHARS)
      .matches(/^[a-zA-Z\s]*$/, ONLY_LETTERS_WS),
  });

  const { register, handleSubmit, errors, setValue } = useForm({
    revalidateMode: 'onChange',
    resolver: yupResolver(personalInfoSchema),
  });

  const onSubmit = async data => {
    setOpenBackdropt(true);
    const { _id } = jwt_decode(getTokenCookie());
    const body = { ...data, _id: userInAction._id };
    try {
      const response = await request.post(API_PATH.UPDATE_PROFILE, body);
      if (response.data.message === 'Success') {
        setOpenBackdropt(false);
        setOpenSnackBar(true);
        setResponseMessage('Account info updated successfully');
        setResponseMessageType('success');
        fetchAllUsersData();
        handleEditClose();
      }
    } catch (err) {
      setOpenBackdropt(false);
      setOpenSnackBar(true);
      setResponseMessage(err.data.message);
      setResponseMessageType('error');
    }
  };

  useEffect(() => {
    if (userInAction) {
      const { email, firstName, lastName, title } = userInAction;
      setValue('email', email);
      setValue('firstName', firstName);
      setValue('lastName', lastName);
      setValue('title', title);
    }
  }, [setValue, userInAction]);

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
        open={openEdit}
        onClose={() => {
          handleEditClose();
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          className={`${dialogTitle} ${paddingTopMd}`}
          id="responsive-dialog-title"
        >
          Edit
          <span className={`${highlightText}`}>
            {' '}
            {userInAction ? userInAction.firstName + "'s" : ''}
          </span>{' '}
          Account?
        </DialogTitle>
        <DialogContent>
          <div className={accountInfoWrapper}>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <div className={email_password}>
                <h4>Email</h4>
                <TextField
                  {...{
                    id: 'email',
                    className: `${
                      disabledInputs
                        ? `${securityFields} ${personalInfoDisabled}`
                        : securityFields
                    }`,
                    variant: 'outlined',
                    inputProps: { 'data-testid': 'email' },
                    name: 'email',
                    autoFocus: true,
                    inputRef: register,
                    disabled: disabledInputs,
                    error: !isEmpty(errors.email),
                    helperText: errors.email && errors.email.message,
                    defaultValue: `${userInAction ? userInAction.email : ''}`,
                  }}
                />
              </div>
              <div className={email_password}>
                <h4>First Name</h4>
                <TextField
                  {...{
                    id: 'firstName',
                    className: `${
                      disabledInputs
                        ? `${securityFields} ${personalInfoDisabled}`
                        : securityFields
                    }`,
                    variant: 'outlined',
                    inputProps: { 'data-testid': 'firstName' },
                    name: 'firstName',
                    autoFocus: true,
                    inputRef: register,
                    disabled: disabledInputs,
                    error: !isEmpty(errors.firstName),
                    helperText: errors.firstName && errors.firstName.message,
                    defaultValue: `${
                      userInAction ? userInAction.firstName : ''
                    }`,
                  }}
                />
              </div>
              <div className={email_password}>
                <h4>Last Name</h4>
                <TextField
                  {...{
                    id: 'lastName',
                    className: `${
                      disabledInputs
                        ? `${securityFields} ${personalInfoDisabled}`
                        : securityFields
                    }`,
                    variant: 'outlined',
                    inputProps: { 'data-testid': 'lastName' },
                    name: 'lastName',
                    autoFocus: true,
                    inputRef: register,
                    disabled: disabledInputs,
                    error: !isEmpty(errors.lastName),
                    helperText: errors.lastName && errors.lastName.message,
                    defaultValue: `${
                      userInAction ? userInAction.lastName : ''
                    }`,
                  }}
                />
              </div>
              <div className={email_password}>
                <h4>Job Title</h4>
                <TextField
                  {...{
                    id: 'title',
                    className: `${
                      disabledInputs
                        ? `${securityFields} ${personalInfoDisabled}`
                        : securityFields
                    }`,
                    variant: 'outlined',
                    inputProps: { 'data-testid': 'title' },
                    name: 'title',
                    autoFocus: true,
                    inputRef: register,
                    disabled: disabledInputs,
                    error: !isEmpty(errors.title),
                    helperText: errors.title && errors.title.message,
                    defaultValue: `${userInAction ? userInAction.title : ''}`,
                  }}
                />
              </div>
              <DialogActions
                className={`${actionButtons} ${paddingTopLg} ${paddingBottomNm}`}
              >
                <Button
                  className={`${actionButton} ${actionButtonOutlined}`}
                  variant="outlined"
                  onClick={() => {
                    handleEditClose();
                  }}
                  color="primary"
                >
                  CANCEL
                </Button>
                <Button
                  {...{
                    'data-testid': 'submit',
                    type: 'submit',
                  }}
                  className={`${actionButton} ${actionButtonContained}`}
                  variant="contained"
                  color="primary"
                >
                  SAVE
                </Button>
              </DialogActions>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditUser;

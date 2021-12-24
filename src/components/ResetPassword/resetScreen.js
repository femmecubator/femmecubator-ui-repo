import React from 'react';
import { useLocation } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { API_PATH } from 'utils/constants';
import request from 'utils/axiosConfig';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from './ResetPassword.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FemmecubatorLogoFull from '../../assets/images/FemmecubatorLogoFull.svg';
import HidePass from '../../assets/images/HidePass.svg';
import ShowPass from '../../assets/images/ShowPass.svg';

const MIN_8CHARS = 'Must be more than 8 characters';
const INVALID_PASSWORD_FORMAT = 'Invalid password format: A-z 0-9 @$!%*?%';

const ResetSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required('Password is required')
    .min(8, MIN_8CHARS)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      INVALID_PASSWORD_FORMAT
    ),
  retypePassword: yup
    .string()
    .required('Password is required')
    .min(8, MIN_8CHARS)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      INVALID_PASSWORD_FORMAT
    )
    .oneOf([yup.ref('newPassword'), null], 'Passwords do not match.'),
});

const ResetScreen = ({ setPassReset, setOpenBackdrop, mockOnSubmit }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    logo,
    passField,
    forgotContainer,
    dialogTitle,
    marginBottomNm,
    actionButton,
    actionButtonContained,
    marginTopSm,
    marginBottomMd,
    normalWidth,
    hidePass,
    focusBorder,
  } = classes;

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();

  const { register, handleSubmit, errors, setError } = useForm({
    revalidateMode: 'onChange',
    resolver: yupResolver(ResetSchema),
  });

  const [token, setToken] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [showPass1, setShowPass1] = React.useState(false);
  const [focusPass1, setFocusPass1] = React.useState(false);
  const [showPass2, setShowPass2] = React.useState(false);
  const [focusPass2, setFocusPass2] = React.useState(false);

  React.useEffect(() => {
    if (query.get('token')) {
      setToken(query.get('token'));
    }
    if (query.get('email')) {
      setEmail(query.get('email'));
    }
  }, [query]);

  const handleShowPass1 = () => {
    setShowPass1(!showPass1);
  };
  const handleKeyDownShowPass1 = e => {
    if (e.keyCode == 13) {
      setShowPass1(!showPass1);
    }
  };
  const handleShowPass2 = () => {
    setShowPass2(!showPass2);
  };
  const handleKeyDownShowPass2 = e => {
    if (e.keyCode == 13) {
      setShowPass1(!showPass2);
    }
  };

  const onSubmit = async data => {
    setOpenBackdrop(true);
    const body = {
      token: token,
      emasil: email,
      newPassword: data.newPassword,
    };
    try {
      const response = await request.post(API_PATH.RESET_PASSWORD, body);
      if (response.data.message === 'Success') {
        setOpenBackdrop(false);
        setPassReset(true);
      } else {
        throw error;
      }
    } catch (err) {
      setOpenBackdrop(false);
      if (err.data)
        setError('retypePassword', {
          type: 'manual',
          message: err.data.message,
        });
      else
        setError('retypePassword', {
          type: 'manual',
          message: 'Something went wrong',
        });
    }
  };

  return (
    <div className={root}>
      <form
        className={forgotContainer}
        noValidate
        onSubmit={handleSubmit(mockOnSubmit || onSubmit)}
      >
        <img
          className={`${logo} ${marginBottomMd} ${marginTopSm}`}
          src={FemmecubatorLogoFull}
          alt="Femmecubator logo"
        />
        <Typography>
          <h2 className={`${dialogTitle} ${normalWidth}`}>Reset Password</h2>
        </Typography>
        <div className={`${passField} ${focusPass1 ? focusBorder : ''}`}>
          <TextField
            {...{
              id: 'newPassword',
              InputProps: {
                inputProps: { 'data-testid': 'newPassword' },
              },
              label: 'New Password',
              variant: 'outlined',
              name: 'newPassword',
              type: showPass1 ? 'text' : 'password',
              inputRef: register,
              error: !isEmpty(errors.newPassword),
              helperText: errors.newPassword && errors.newPassword.message,
            }}
          />
          <img
            aria-hidden="true"
            className={`${hidePass}`}
            src={showPass1 ? ShowPass : HidePass}
            alt="Femmecubator logo"
            onClick={handleShowPass1}
            onKeyDown={handleKeyDownShowPass2}
          />
        </div>
        <div
          className={`${passField} ${marginBottomNm} ${
            focusPass2 ? focusBorder : ''
          }`}
        >
          <TextField
            {...{
              id: 'retypePassword',
              InputProps: {
                inputProps: { 'data-testid': 'retypePassword' },
              },
              label: 'Retype Password',
              variant: 'outlined',
              name: 'retypePassword',
              type: showPass2 ? 'text' : 'password',
              inputRef: register,
              error: !isEmpty(errors.retypePassword),
              helperText:
                errors.retypePassword && errors.retypePassword.message,
            }}
          />
          <img
            aria-hidden="true"
            className={`${hidePass}`}
            src={showPass2 ? ShowPass : HidePass}
            alt="Femmecubator logo"
            onClick={handleShowPass2}
            onKeyDown={handleKeyDownShowPass2}
          />
        </div>
        <Button
          {...{
            'data-testid': 'submit',
            type: 'submit',
            variant: 'contained',
            color: 'primary',
            className: `${actionButton} ${actionButtonContained}`,
          }}
        >
          CONFIRM
        </Button>
      </form>
    </div>
  );
};

export default ResetScreen;

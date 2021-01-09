import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grow,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { ReactComponent as FemmecubatorLogo } from './assets/femmecubator-logo.svg';
import { ReactComponent as CheckCircle } from './assets/check-circle.svg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
  dialogWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2.5rem',
  },
  checkCircle: {
    width: '4rem',
    height: '4rem',
    marginTop: '20px',
  },
}));

export default function RegistrationSuccess(props) {
  const { titleText, bodyText, button, openModal } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openModal}
      maxWidth="xs"
      classes={{
        paper: classes.dialogWrapper,
      }}
      TransitionComponent={Transition}
      disableBackdropClick
      disableEscapeKeyDown
      data-testid="registration-success-modal"
    >
      <FemmecubatorLogo
        alt="Femmecubator logo"
        data-testid="modal-logo-femmecubator"
      />
      <CheckCircle
        fill="#57D9A3"
        className={classes.checkCircle}
        alt="green check mark"
        data-testid="modal-logo-check-circle"
      />
      <DialogTitle disableTypography>
        <Typography variant="h4">{titleText}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText data-testid="modal-body">
          {bodyText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>{button}</DialogActions>
    </Dialog>
  );
}

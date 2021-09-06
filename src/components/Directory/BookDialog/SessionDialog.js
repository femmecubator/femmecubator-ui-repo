import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './BookDialog.styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const SessionDialog = ({ openSession, handleSessionClose }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    dialogTitle,
    dialogText,
    countDown,
    actionButtons,
    actionButton,
    actionButtonContained,
    actionButtonContainedSecondary,
    paddingTopSm,
    paddingBottomMd,
    paddingTopLg,
    paddingBottomLg,
    fonrWeightBold,
  } = classes;

  return (
    <Dialog
      className={root}
      open={openSession}
      onClose={handleSessionClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle
        className={`${dialogTitle} ${paddingTopLg}`}
        id="responsive-dialog-title"
      >
        {`Your online session`}
        <br />
        {`will expire soon`}
      </DialogTitle>
      <DialogContent className={paddingBottomMd}>
        <DialogContentText className={dialogText}>
          <span className={countDown}> 05 min 43 secs</span>
          <br />
          <br />
          Choose continue to keep working or log off.
        </DialogContentText>
      </DialogContent>
      <DialogActions
        className={`${actionButtons} ${paddingTopSm} ${paddingBottomLg}`}
      >
        <Button
          className={`${actionButton} ${actionButtonContainedSecondary} ${fonrWeightBold}`}
          variant="contained"
          onClick={handleSessionClose}
          color="primary"
        >
          LOG OFF
        </Button>
        <Button
          className={`${actionButton} ${actionButtonContained} ${fonrWeightBold}`}
          variant="contained"
          onClick={handleSessionClose}
          color="primary"
        >
          CONTINUE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

SessionDialog.propTypes = {
  openSession: PropTypes.bool.isRequired,
  handleSessionClose: PropTypes.func.isRequired,
};

export default SessionDialog;

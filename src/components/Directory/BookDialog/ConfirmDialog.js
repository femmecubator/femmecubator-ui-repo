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

const ConfirmDialog = ({
  openConfirm,
  handleConfirmClose,
  handleAwesomeOpen,
}) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
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
  } = classes;

  return (
    <Dialog
      className={root}
      open={openConfirm}
      onClose={handleConfirmClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle
        className={`${dialogTitle} ${paddingTopMd}`}
        id="responsive-dialog-title"
      >{`Is this good?`}</DialogTitle>
      <DialogContent>
        <DialogContentText className={`${dialogText} ${restrictedWidth}`}>
          You're meeting with your UX Design Mentor,
          <span className={highlightText}> Amanda Powell!</span>
          <br />
          on <span className={highlightText}>Jan 29</span> at
          <span className={highlightText}> 5:00 pm</span>!
          <br />
          <br />
          This consultation is FREE.
        </DialogContentText>
      </DialogContent>
      <DialogActions
        className={`${actionButtons} ${paddingTopSm} ${paddingBottomLg}`}
      >
        <Button
          className={`${actionButton} ${actionButtonOutlined}`}
          variant="outlined"
          onClick={handleConfirmClose}
          color="primary"
        >
          CANCEL
        </Button>
        <Button
          className={`${actionButton} ${actionButtonContained}`}
          variant="contained"
          onClick={() => {
            handleConfirmClose();
            handleAwesomeOpen();
          }}
          color="primary"
        >
          CONFIRM
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmDialog.propTypes = {
  openConfirm: PropTypes.bool.isRequired,
  handleConfirmClose: PropTypes.func.isRequired,
  handleAwesomeOpen: PropTypes.func.isRequired,
};

export default ConfirmDialog;

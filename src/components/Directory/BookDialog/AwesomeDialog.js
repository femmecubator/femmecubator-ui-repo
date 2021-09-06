import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './BookDialog.styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';

const AwesomeDialog = ({ openAwesome, handleAwesomeClose }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    dialogTitle,
    dialogText,
    closeIcon,
    paddingBottomSm,
    paddingTopMd,
    paddingBottomLg,
  } = classes;

  return (
    <Dialog
      className={root}
      open={openAwesome}
      onClose={handleAwesomeClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogActions className={closeIcon}>
        <CloseIcon onClick={handleAwesomeClose} />
      </DialogActions>
      <DialogTitle
        className={dialogTitle}
        id="responsive-dialog-title"
      >{`🎉 Awesome!`}</DialogTitle>
      <DialogContent className={`${paddingBottomLg} ${paddingTopMd}`}>
        <DialogContentText className={`${dialogText} ${paddingBottomSm}`}>
          You are now booked. <br />
          Stay tuned for a confirmation note <br />
          from your mentor.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

AwesomeDialog.propTypes = {
  openAwesome: PropTypes.bool.isRequired,
  handleAwesomeClose: PropTypes.func.isRequired,
};

export default AwesomeDialog;

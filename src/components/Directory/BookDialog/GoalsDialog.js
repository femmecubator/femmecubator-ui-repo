import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from '../Directory.styles';
import {
  Button,
  Dialog,
  TextareaAutosize,
  TextField,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';

const GoalsDialog = ({
  openGoals,
  handleGoalsClose,
  handleConfirmOpen,
  goals,
  setGoals,
}) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    actionButton,
    actionButtonContained,
    rootMeet,
    dialogTitle,
    dialogText,
    restrictedWidth,
    closeIcon,
    paddingTopSm,
    paddingBottomMd,
    paddingBottomLg,
    paddingTopMd,
    paddingBottomSm,
    paddingBottomNm,
    centerContent,
    roundedButton,
    goalsTextArea,
  } = classes;
  const [error, setError] = useState(false);

  const handleSubmitGoals = () => {
    handleGoalsClose();
    handleConfirmOpen();
  };

  const handleChange = e => {
    const newGoals = e.target.value;
    if (newGoals.length === 0) setError(true);
    else setError(false);
    setGoals(newGoals);
  };

  return (
    <Dialog
      className={rootMeet}
      open={openGoals}
      onClose={() => {
        setGoals(''), handleGoalsClose();
      }}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle
        className={`${dialogTitle} ${paddingTopMd}`}
        id="responsive-dialog-title"
      >
        Describe your goals
      </DialogTitle>
      <DialogContent className={`${paddingBottomMd} ${centerContent}`}>
        <DialogContentText
          className={`${dialogText} ${restrictedWidth} ${
            error ? paddingBottomLg : paddingBottomNm
          }`}
        >
          What do you need help with?
        </DialogContentText>
        <div
          className={`${restrictedWidth} ${goalsTextArea} ${paddingBottomMd}`}
        >
          {/* <TextareaAutosize
            aria-label="minimum height"
            minRows={8}
            maxRows={8}
            style={{ width: '100%' }}
            error={true}
          /> */}
          <TextField
            id="outlined-multiline-flexible"
            variant="outlined"
            multiline
            minRows={5}
            maxRows={5}
            error={error}
            value={goals}
            onChange={handleChange}
            helperText={error ? 'This is a required field' : null}
          />
        </div>
        <Button
          className={`${actionButton} ${actionButtonContained} ${roundedButton}`}
          variant="contained"
          onClick={handleSubmitGoals}
          color="primary"
          disabled={error || goals.length === 0}
        >
          CONFIRM
        </Button>
      </DialogContent>
    </Dialog>
  );
};

GoalsDialog.propTypes = {
  openGoals: PropTypes.bool.isRequired,
  handleGoalsClose: PropTypes.func.isRequired,
  handleConfirmOpen: PropTypes.func.isRequired,
  // goals: PropTypes.string.isRequired,
  // setGoals: PropTypes.func.isRequired,
};

export default GoalsDialog;

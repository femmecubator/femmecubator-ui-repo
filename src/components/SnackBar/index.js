import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBar = ({
  setOpenSnackBar,
  openSnackBar,
  responseMessageType,
  responseMessage,
}) => {
  const [snackBarSettings, setSnackBarSettings] = useState({
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal } = snackBarSettings;
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };
  return (
    <>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={responseMessageType}>
          {responseMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;

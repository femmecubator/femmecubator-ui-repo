import React from 'react';
import useStyles from './FocusTrapOverlay.styles';
import FocusTrap from 'focus-trap-react';

const FocusTrapOverlay = ({ children }) => {
  const { root } = useStyles();
  return (
    <div className={root}>
      <FocusTrap>{children}</FocusTrap>
    </div>
  );
};

export default FocusTrapOverlay;

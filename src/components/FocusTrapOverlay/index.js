import React from 'react';
import useStyles from './FocusTrapOverlay.styles';
import FocusTrap from 'focus-trap-react';

const FocusTrapOverlay = ({ open, children }) => {
  const { root } = useStyles();
  return open ? (
    <div className={root}>
      <FocusTrap
        focusTrapOptions={{
          allowOutsideClick: true,
        }}
      >
        {children}
      </FocusTrap>
    </div>
  ) : null;
};

export default FocusTrapOverlay;

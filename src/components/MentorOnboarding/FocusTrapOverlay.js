import React from 'react';
import useStyles from './FocusTrapOverlay.styles';

const FocusTrapOverlay = ({ children }) => {
  const { root } = useStyles();
  return <div className={root}>{children}</div>;
};

export default FocusTrapOverlay;

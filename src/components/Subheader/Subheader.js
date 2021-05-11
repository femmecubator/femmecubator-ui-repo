import React, { useState } from 'react';
import useStyles from '../Subheader/Subheader.styles.js';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Subheader({
  variant,
  mainLabel,
  subLabel,
  image,
  testClick,
}) {
  const isMobile = useMediaQuery('(max-width:1023px)');
  const classes = useStyles({ variant, isMobile });
  const [showSubheader, setSubheader] = useState(true);
  const {
    subheaderContainer,
    subheader,
    subheaderItems,
    subheaderIcon,
    mainText,
    subText,
    closeIcon,
  } = classes;
  const handleClick = () => setSubheader(!showSubheader);
  return (
    <div className={subheaderContainer}>
      {showSubheader ? (
        <div className={subheader} data-testid="page-title">
          <div className={subheaderItems}>
            <div className={subheaderIcon}>{image}</div>

            <div className={mainText}>{mainLabel}</div>
            {isMobile ? null : <div className={subText}>{subLabel}</div>}
          </div>
          <button
            {...{
              onClick: testClick || handleClick,
              className: closeIcon,
              title: 'closeSubheader',
            }}
          >
            <CloseIcon />
          </button>
        </div>
      ) : null}
    </div>
  );
}

Subheader.propTypes = {
  variant: PropTypes.string.isRequired,
  mainLabel: PropTypes.string.isRequired,
};

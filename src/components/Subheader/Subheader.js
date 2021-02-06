import React, { useState } from 'react';
import useStyles from '../Subheader/Subheader.styles.js';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Subheader(props) {
  const { variant, mainLabel, subLabel, image } = props;
  const classes = useStyles({ variant });
  const isMobile = useMediaQuery('(max-width:1023px)');
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
  const handleClick = () => {
    setSubheader(!showSubheader);
  };
  return (
    <div className={subheaderContainer}>
      {showSubheader ? (
        <div className={subheader}>
          <div className={subheaderItems}>
            <div className={subheaderIcon}>{image}</div>

            <div className={mainText}>{mainLabel}</div>
            {isMobile ? null : <div className={subText}>{subLabel}</div>}
          </div>
          <div className={closeIcon} onClick={handleClick}>
            <CloseIcon />
          </div>
        </div>
      ) : null}
    </div>
  );
}

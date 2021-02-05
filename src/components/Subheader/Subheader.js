import React from 'react';
import useStyles from '../Subheader/Subheader.styles.js';

export default function Subheader(props) {
  const { variant, mainLabel, subLabel, image } = props;
  const classes = useStyles({ variant });
  const {
    subheaderContainer,
    subheader,
    subheaderItems,
    subheaderIcon,
    mainText,
    subText,
  } = classes;
  console.log(classes[variant]);
  return (
    //   subheaderContainer to be used as parent container for subheader
    <div className={subheaderContainer}>
      {/* on click you want the compnent to return false and then not show if it false should be done in the parent component*/}

      <div className={subheader}>
        <div className={subheaderItems}>
          <div className={subheaderIcon}>{image}</div>

          <div className={mainText}>{mainLabel}</div>
          {/* this disapears at mobile view */}
          <div className={subText}>{subLabel}</div>
        </div>
        <div>X</div>
      </div>
    </div>
  );
}

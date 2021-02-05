import React from 'react';
import useStyles from '../Subheader/Subheader.styles.js';

export default function Subheader(props) {
  const { variant, mainLabel, subLabel, image } = props;
  const classes = useStyles({ variant });
  const { subheaderContainer, subheader, subheaderIcon } = classes;
  console.log(classes[variant]);
  return (
    //   subheaderContainer to be used as parent container for subheader
    <div className={subheaderContainer}>
      <div className={subheader}>
        <div className={subheaderIcon}>{image}</div>
        {/* on click you want the compnent to return false and then not show if it false should be done in the parent component*/}
        <div>{mainLabel}</div>
        <div>{subLabel}</div>
      </div>
    </div>
  );
}

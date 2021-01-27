import React, { useState } from 'react';
import useStyles from '../Subheader/Subheader.styles.js';
//import classes from '*.module.css';

export default function Subheader(props) {
  const { variant, children, ...rest } = props;
  const classes = useStyles();

  console.log(classes, 'props', props);
  return (
    //   subheaderContainer to be used as parent container for subheader
    <div className={(`Subheader ${variant}`, classes.subheader)} {...rest}>
      {/* <div className={classes.subheaderIcon}> */}
      {/* <img src="" alt="" /> */}
      {/* on click you want the compnent to return false and then not show if it false should be done in the parent component*/}
      {/* </div> */}
      {/* <div>{children}</div> */}
      {/* <div>finer text</div> */}
      {children}
    </div>
  );
}

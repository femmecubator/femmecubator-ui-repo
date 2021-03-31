import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Directory from '../components/Directory/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const Mentors = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <main>
      {/* <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Mentor Directory Tabs"
      >
        <Tab label="Directory" />
        {/* <Tab label="Calender" {...a11yProps(1)} /> */}
      {/* </Tabs>
      <div value={value} index={0}>
      </div>
      <div value={value} index={1}>
        Item Two */}
      {/* </div>  */}
      <Directory />
      Mentors List Goes here
    </main>
  );
};

export default Mentors;

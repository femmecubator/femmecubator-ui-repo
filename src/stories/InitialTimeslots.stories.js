import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';
import InitialTimeslots from 'components/Timeslots/InitialTimeslots';

export default {
  title: 'Initial Timeslots',
  component: InitialTimeslots,
};

export const Initial_Timeslots = () => {
  return (
    <>
      <Router>
        <GlobalProvider>
          <InitialTimeslots />
        </GlobalProvider>
      </Router>
    </>
  );
};

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';
import TimeSlots from 'components/Timeslots/TimeSlots';

export default {
  title: 'Time Slots',
  component: TimeSlots,
};

export const Time_Slots = () => {
  return (
    <>
      <Router>
        <GlobalProvider>
          <TimeSlots />
        </GlobalProvider>
      </Router>
    </>
  );
};

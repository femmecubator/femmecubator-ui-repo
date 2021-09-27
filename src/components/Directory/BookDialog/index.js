import React from 'react';
import ConfirmDialog from './ConfirmDialog';
import AwesomeDialog from './AwesomeDialog';
import SessionDialog from './SessionDialog';
import MeetTimeDialog from './MeetTimeDialog';

export default function BookDialog({
  openMeet,
  setOpenMeet,
  timeSlot,
  slotsData,
  setDays,
  days,
  handleClick,
  mentor_id,
}) {
  const meetTimeSlots = [
    {
      id: 101,
      date: 'Jan 26',
      slots: [
        { time: '5:00 pm', status: false },
        { time: '6:00 pm', status: false },
      ],
    },
    {
      id: 102,
      date: 'Jan 27',
      slots: [],
    },
    {
      id: 103,
      date: 'Jan 28',
      slots: [
        { time: '5:00 pm', status: false },
        { time: '6:00 pm', status: true },
      ],
    },
    {
      id: 104,
      date: 'Jan 29',
      slots: [],
    },
    {
      id: 105,
      date: 'Jan 30',
      slots: [
        { time: '5:00 pm', status: false },
        { time: '6:00 pm', status: false },
      ],
    },
  ];

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openAwesome, setOpenAwesome] = React.useState(false);
  const [openSession, setOpenSession] = React.useState(false);

  const handleMeetClose = () => {
    setOpenMeet(false);
  };

  const handleAwesomeOpen = () => {
    setOpenAwesome(true);
  };
  const handleAwesomeClose = () => {
    setOpenAwesome(false);
  };

  const handleConfirmOpen = () => {
    setOpenConfirm(true);
  };
  const handleConfirmClose = () => {
    setOpenConfirm(false);
  };

  const handleSessionClose = () => {
    setOpenSession(false);
  };

  return (
    <>
      <MeetTimeDialog
        meetTimeSlots={slotsData ? slotsData : []}
        openMeet={openMeet}
        handleMeetClose={handleMeetClose}
        handleConfirmOpen={handleConfirmOpen}
        timeSlot={timeSlot}
        setDays={setDays}
        days={days}
        handleClick={handleClick}
        mentor_id={mentor_id}
      />

      <ConfirmDialog
        openConfirm={openConfirm}
        handleConfirmClose={handleConfirmClose}
        handleAwesomeOpen={handleAwesomeOpen}
      />
      <AwesomeDialog
        openAwesome={openAwesome}
        handleAwesomeClose={handleAwesomeClose}
      />

      <SessionDialog
        openSession={openSession}
        handleSessionClose={handleSessionClose}
      />
    </>
  );
}

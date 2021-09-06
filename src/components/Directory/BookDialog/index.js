import React from 'react';
import { Button } from '@material-ui/core/';
import ConfirmDialog from './ConfirmDialog';
import AwesomeDialog from './AwesomeDialog';
import SessionDialog from './SessionDialog';
import MeetTimeDialog from './MeetTimeDialog';
import MentorOnboardingModal from '../../MentorOnboarding/MentorOnboardingModal';
export default function BookDialog() {
  // DUMMY TIME SLOTS DATA
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

  const [openMeet, setOpenMeet] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openAwesome, setOpenAwesome] = React.useState(false);
  const [openSession, setOpenSession] = React.useState(false);

  // Meet time dialog handlers
  const handleMeetOpen = () => {
    setOpenMeet(true);
  };
  const handleMeetClose = () => {
    setOpenMeet(false);
  };

  // Awesome dialog handlers
  const handleAwesomeOpen = () => {
    setOpenAwesome(true);
  };
  const handleAwesomeClose = () => {
    setOpenAwesome(false);
  };

  // Confirm Dialog handlers
  const handleConfirmOpen = () => {
    setOpenConfirm(true);
  };
  const handleConfirmClose = () => {
    setOpenConfirm(false);
  };

  // Session Dialog handlers
  const handleSessionOpen = () => {
    setOpenSession(true);
  };
  const handleSessionClose = () => {
    setOpenSession(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleMeetOpen}>
        Book me dialog test
      </Button>
      <Button variant="outlined" color="primary" onClick={handleSessionOpen}>
        Session expiry dialog test
      </Button>
      <div>
        Settings
        <MentorOnboardingModal opened={true} />
      </div>
      <MeetTimeDialog
        meetTimeSlots={meetTimeSlots}
        openMeet={openMeet}
        handleMeetClose={handleMeetClose}
        handleConfirmOpen={handleConfirmOpen}
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
    </div>
  );
}

import React from 'react';
import ConfirmDialog from './ConfirmDialog';
import AwesomeDialog from './AwesomeDialog';
import SessionDialog from './SessionDialog';
import MeetTimeDialog from './MeetTimeDialog';
import GoalsDialog from './GoalsDialog';

export default function BookDialog({
  openMeet,
  setOpenMeet,
  timeSlot,
  slotsData,
  setDays,
  days,
  handleClick,
  mentor_id,
  mentorInfo,
  setMentorInfo,
  goals,
  setGoals,
}) {
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openAwesome, setOpenAwesome] = React.useState(false);
  const [openSession, setOpenSession] = React.useState(false);
  const [openGoals, setOpenGoals] = React.useState(false);

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

  const handleGoalsOpen = () => {
    setOpenGoals(true);
  };
  const handleGoalsClose = () => {
    setOpenGoals(false);
  };

  return (
    <>
      <MeetTimeDialog
        meetTimeSlots={slotsData ? slotsData : []}
        openMeet={openMeet}
        handleMeetClose={handleMeetClose}
        handleGoalsOpen={handleGoalsOpen}
        timeSlot={timeSlot}
        setDays={setDays}
        days={days}
        handleClick={handleClick}
        mentor_id={mentor_id}
        setMentorInfo={setMentorInfo}
        mentorInfo={mentorInfo}
      />

      <ConfirmDialog
        openConfirm={openConfirm}
        handleConfirmClose={handleConfirmClose}
        handleAwesomeOpen={handleAwesomeOpen}
        mentorInfo={mentorInfo}
        goals={goals}
        setGoals={setGoals}
      />
      <AwesomeDialog
        openAwesome={openAwesome}
        handleAwesomeClose={handleAwesomeClose}
      />

      <SessionDialog
        openSession={openSession}
        handleSessionClose={handleSessionClose}
      />

      <GoalsDialog
        openGoals={openGoals}
        handleGoalsClose={handleGoalsClose}
        handleConfirmOpen={handleConfirmOpen}
        goals={goals}
        setGoals={setGoals}
      />
    </>
  );
}

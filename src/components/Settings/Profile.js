import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import { Button } from '@material-ui/core';
import MentorOnboardingModal from 'components/MentorOnboarding/MentorOnboardingModal';

const Profile = () => {
  const isMobile = useMediaQuery('(max-width:580px)');
  const classes = useStyles({ isMobile });
  const { inputGroups, textArea, gooleMeet, settingsButton, profileEdit } =
    classes;

  const [bio, setBio] = useState(
    'Narwhal prism snackwave pop-up, wayfarers kinfolk asymmetrical poke. Flexitarian cliche williamsburg drinking vinegar shabby chic slow-carb pug semiotics pop-up. Cliche williamsburg drinking vinegar shabby.'
  );

  const [skills, setSkills] = useState('React,js, Node.js, Ruby on Rails');
  const [phone, setPhone] = useState('718-777-4545');
  const [timeZone, setTimeZone] = useState('GMT + 5, New York');
  const [googleMeet, setGoogleMeet] = useState('meet.google.com/oer-yjhx-sia');
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={inputGroups}>
        <h4>Bio</h4>
        <textarea
          row={5}
          className={textArea}
          value={bio}
          disabled={true}
        ></textarea>
      </div>
      <div className={inputGroups}>
        <h4>Skills (eg. tech stack, anything you can offer help with.)</h4>
        <p className={'disabledFields'}>{skills}</p>
      </div>
      <div className={inputGroups}>
        <h4>Phone</h4>
        <p className={'disabledFields'}>{phone}</p>
      </div>
      <div className={inputGroups}>
        <h4>Your Time Zone</h4>
        <p className={'disabledFields'}>{timeZone}</p>
      </div>
      <div className={inputGroups}>
        <h4>Personal meeting room</h4>
        <div className={gooleMeet}>
          <p className={'disabledFields'}>{googleMeet}</p>
          <p
            className={'disabledFields'}
            style={{ background: 'white', cursor: 'pointer' }}
          >
            {'Copy Google Meet Link'}
          </p>
        </div>
      </div>
      <div className={profileEdit}>
        <Button className={settingsButton} onClick={() => setOpenModal(true)}>
          Edit
        </Button>
      </div>
      <MentorOnboardingModal
        opened={openModal}
        setOpenModal={setOpenModal}
        withouHeading={true}
      />
    </>
  );
};

export default Profile;

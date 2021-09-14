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

  const fields = [
    {
      heading: 'Bio',
      data: bio,
    },
    {
      heading: 'Skills (eg. tech stack, anything you can offer help with.)',
      data: skills,
    },
    {
      heading: 'Phone',
      data: phone,
    },
    {
      heading: 'Your Time Zone',
      data: timeZone,
    },
    {
      heading: 'Personal meeting room',
      data: googleMeet,
    },
  ];

  return (
    <>
      {fields && fields.length > 0
        ? fields.map((data, index) => {
            return (
              <div className={inputGroups} key={index}>
                <h4>{data.heading}</h4>
                {data.heading === 'Bio' ? (
                  <textarea
                    row={5}
                    className={textArea}
                    value={bio}
                    disabled={true}
                  ></textarea>
                ) : data.heading === 'Personal meeting room' ? (
                  <div className={gooleMeet}>
                    <p className={'disabledFields'}>{googleMeet}</p>
                    <p
                      className={'disabledFields'}
                      style={{ background: 'white', cursor: 'pointer' }}
                    >
                      {'Copy Google Meet Link'}
                    </p>
                  </div>
                ) : (
                  <p className={'disabledFields'}>{data.data}</p>
                )}
              </div>
            );
          })
        : null}
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

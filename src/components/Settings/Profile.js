import React, { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import { Button } from '@material-ui/core';
import MentorOnboardingModal from 'components/MentorOnboarding/MentorOnboardingModal';

const Profile = ({ profileData }) => {
  const isMobile = useMediaQuery('(max-width:580px)');
  const classes = useStyles({ isMobile });
  const { inputGroups, textArea, gooleMeet, settingsButton, profileEdit } =
    classes;

  const [bio, setBio] = useState('Bio');

  const [skills, setSkills] = useState('Analytical Skills');
  const [phone, setPhone] = useState('9646621206');
  const [timeZone, setTimeZone] = useState('GMT-11:00 Pacific/Midway');
  const [googleMeet, setGoogleMeet] = useState(
    'https://meet.google.com/vst-phkb-gvq'
  );
  const [openModal, setOpenModal] = useState(false);
  const [editFields, setEditFields] = useState(false);

  useEffect(() => {
    if (profileData) {
      const { bio, googlemeet, phone, skills, timezone } = profileData;
      setBio(bio);
      setGoogleMeet(googlemeet);
      setPhone(phone);
      setSkills(skills);
      setTimeZone(timezone);
    }
  }, [profileData]);

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
      {!editFields ? (
        fields && fields.length > 0 ? (
          fields.map((data, index) => {
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
        ) : null
      ) : (
        <MentorOnboardingModal
          opened={openModal}
          setOpenModal={setOpenModal}
          withouHeading={true}
          showInModal={false}
          setEditFields={setEditFields}
          profileData={profileData}
        />
      )}
      {!editFields ? (
        <div className={profileEdit}>
          <Button
            className={settingsButton}
            onClick={() => {
              setOpenModal(true);
              setEditFields(true);
            }}
          >
            Edit
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default Profile;

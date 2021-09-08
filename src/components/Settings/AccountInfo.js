import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import { Button } from '@material-ui/core';

const AccountInfo = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    accountInfoWrapper,
    profile,
    mentorName,
    mentorFullName,
    mentorProfession,
    batch,
    email_password,
    settingsButton,
  } = classes;

  return (
    <div className={accountInfoWrapper}>
      <div className={profile}>
        <div className={mentorName}>SC</div>
        <div>
          <h3 className={mentorFullName}>Sam Cruz</h3>
          <p className={mentorProfession}>UX Designer</p>
        </div>
      </div>
      <div className={batch}>Mentor</div>
      <div className={email_password}>
        <h4>Email</h4>
        <p>samcc@gmail.com</p>
      </div>
      <div className={email_password}>
        <h4>Password</h4>
        <p>**********</p>
      </div>
      <Button className={settingsButton}>Edit</Button>
    </div>
  );
};

export default AccountInfo;

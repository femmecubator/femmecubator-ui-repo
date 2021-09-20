import React, { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import AccountInfo from './AccountInfo';
import Profile from './Profile';
import Security from './Security';
import jwt_decode from 'jwt-decode';
import { getTokenCookie } from 'utils/cookies';
import MentorOnboardingModal from 'components/MentorOnboarding/MentorOnboardingModal';
import request from 'utils/axiosConfig';
import { API_PATH } from 'utils/constants';
import { Backdrop, CircularProgress } from '@material-ui/core';

const SettingsComponent = () => {
  const { hasOnboarded } = jwt_decode(getTokenCookie());
  const isMobile = useMediaQuery('(max-width:880px)');
  const classes = useStyles({ isMobile });
  const {
    settingsWrapper,
    title,
    insideWrapper,
    tabs,
    tabsWrapper,
    activeTab,
    tabsContent,
    backdrop,
  } = classes;
  const [tab, setTab] = useState(0);

  const [profileData, setProfileData] = useState(null);
  const [openBackdrop, setOpenBackdropt] = useState(false);

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    setOpenBackdropt(true);
    try {
      const res = await request.get(API_PATH.GETPROFILEDATA);
      if (res.data.data) {
        setProfileData(res.data.data);
        setOpenBackdropt(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {hasOnboarded ? (
        <div style={{ background: 'white', minHeight: '100vh' }}>
          <div className="container">
            <div className={settingsWrapper}>
              <h2 className={title}>Settings</h2>
              <div className={insideWrapper}>
                <AccountInfo profileData={profileData ? profileData : null} />
                <div className={tabsWrapper}>
                  <div className={tabs}>
                    <button
                      className={`${
                        tab === 0 ? activeTab : ''
                      } ${`tabButtons`}`}
                      onClick={() => setTab(0)}
                    >
                      PROFILE
                    </button>
                    <button
                      className={`${
                        tab === 1 ? activeTab : ''
                      } ${`tabButtons`}`}
                      onClick={() => setTab(1)}
                    >
                      SECURITY
                    </button>
                  </div>
                  <div className={tabsContent}>
                    {tab === 0 ? (
                      <Profile profileData={profileData ? profileData : null} />
                    ) : (
                      <Security />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MentorOnboardingModal showInModal={true} opened={true} />
      )}
      ;
    </>
  );
};

export default SettingsComponent;

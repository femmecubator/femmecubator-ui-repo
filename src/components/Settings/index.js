import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import useStyles from './Settings.style';
import AccountInfo from './AccountInfo';
import Profile from './Profile';
import Booking from './Booking';

const SettingsComponent = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    settingsWrapper,
    title,
    insideWrapper,
    tabs,
    tabsWrapper,
    activeTab,
    tabsContent,
  } = classes;
  const [tab, setTab] = useState(0);

  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <Container fixed style={{ background: 'white' }}>
        <div className={settingsWrapper}>
          <h2 className={title}>Settings</h2>
          <div className={insideWrapper}>
            <AccountInfo />
            <div className={tabsWrapper}>
              <div className={tabs}>
                <button
                  className={`${tab === 0 ? activeTab : ''} ${`tabButtons`}`}
                  onClick={() => setTab(0)}
                >
                  Profile
                </button>
                <button
                  className={`${tab === 1 ? activeTab : ''} ${`tabButtons`}`}
                  onClick={() => setTab(1)}
                >
                  Booking
                </button>
              </div>
              <div className={tabsContent}>
                {tab === 0 ? <Profile /> : <Booking />}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SettingsComponent;

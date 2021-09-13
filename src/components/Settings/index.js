import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './Settings.style';
import AccountInfo from './AccountInfo';
import Profile from './Profile';
import Security from './Security';

const SettingsComponent = () => {
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
  } = classes;
  const [tab, setTab] = useState(0);

  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <div className="container">
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
                  PROFILE
                </button>
                <button
                  className={`${tab === 1 ? activeTab : ''} ${`tabButtons`}`}
                  onClick={() => setTab(1)}
                >
                  SECURITY
                </button>
              </div>
              <div className={tabsContent}>
                {tab === 0 ? <Profile /> : <Security />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;

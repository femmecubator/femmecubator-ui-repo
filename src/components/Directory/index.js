import React, { useState, useEffect } from 'react';
import MentorCard from './MentorCard/MentorCard';
import Subheader from '../Subheader/Subheader';
import { ReactComponent as SubheaderIcon } from '../Subheader/assets/SubheaderIcon.svg';
import MentorSearchBar from './MentorSearch/MentorSearchBar';
import useStyles from './Directory.styles';

import { Typography, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import request from 'utils/axiosConfig';

const Directory = () => {
  const subheaderProperties = {
    variant: 'mentors',
    mainLabel: 'Connect with a Mentor',
    subLabel: 'Book 30 mins with a UX Design or Coding Mentor.',
    image: <SubheaderIcon />,
  };
  const isMobile = useMediaQuery('(max-width:1023px)');
  const {
    root,
    mentorDirectory,
    mentorListContainer,
    directoryHeader,
    directoryTab,
    tabs,
  } = useStyles({
    isMobile,
  });
  const [selectedTab, setSelectedTab] = useState(0);
  const [mentorCards, setMentorCards] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = (e, newVal) => setSelectedTab(newVal);

  useEffect(() => {
    request.get('/api/directory').then((mentors) => {
      setMentorCards(mentors.data);
    });
  }, []);

  const renderMentorCards = () =>
    searchMentorCards().map((mentorObject) => (
      <MentorCard {...mentorObject} key={mentorObject._id} />
    ));

  const searchMentorCards = () => {
    if (query) {
      const filteredMentorList = mentorCards.filter((mentorObj) => {
        const objs = Object.values(mentorObj).join(' ').toLowerCase();
        return objs.includes(query.toLowerCase());
      });
      return filteredMentorList;
    }
    return mentorCards;
  };

  return (
    <section aria-label="Mentor Directory" className={root}>
      <Subheader {...subheaderProperties} />
      {isMobile ? null : (
        <Typography
          className={directoryHeader}
          variant="h2"
          data-testid="directoryHeader"
          gutterBottom
        >
          Office Hours
        </Typography>
      )}
      <MentorSearchBar setQuery={setQuery} />
      <div className={mentorDirectory}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="Mentor Directory Tabs"
          className={tabs}
          TabIndicatorProps={{
            style: { background: '#550CCC' },
          }}
        >
          <Tab
            label="Directory"
            id="Directory"
            aria-controls="Directory Tab"
            textColor="inherit"
            className={directoryTab}
          />
          <Tab
            label="Calendar"
            id="Calender"
            disabled
            aria-controls="Calender Tab"
            tabIndex="0"
          />
        </Tabs>
        <div className={mentorListContainer} value={selectedTab} index={0}>
          {selectedTab === 0 ? (
            renderMentorCards()
          ) : (
            <h1>CALANDER WOULD GO HERE'</h1>
          )}
        </div>
      </div>
    </section>
  );
};

// loop through this so that it renders in tabs
// const directoryTabs = [
//   { directory: renderMentorCards(), className: 'directoryTab' },
//   {
//     calender: 'renderCalender',
//     className: 'calenderTab',
//     tabIndex: '0',
//     disabled: true,
//   },
// ];

export default Directory;

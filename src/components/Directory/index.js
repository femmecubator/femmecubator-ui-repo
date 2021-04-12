import React, { useState, useEffect } from 'react';
import MentorCard from './MentorCard/MentorCard';
import Subheader from '../Subheader/Subheader';
import { ReactComponent as SubheaderIcon } from '../Subheader/assets/SubheaderIcon.svg';
import MentorSearchBar from './MentorSearch/MentorSearchBar';
import useStyles from './Directory.styles';

import { Typography, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import request from 'utils/axiosConfig';

const Index = () => {
  const subheaderProperties = {
    variant: 'mentors',
    mainLabel: 'Connect with a Mentor',
    subLabel: 'Book 30 mins with a UX Design or Coding Mentor.',
    image: <SubheaderIcon />,
  };
  const isMobile = useMediaQuery('(max-width:1023px)');
  const {
    root,
    mentorListContainer,
    directoryHeader,
    directoryTab,
    tabs,
  } = useStyles({
    isMobile,
  });
  const [selectedTab, setSelectedTab] = useState(0);
  const [mentorCards, setMentorCards] = useState([]);
  const handleChange = (e, newVal) => setSelectedTab(newVal);
  // eslint-disable-next-line no-console

  useEffect(() => {
    request.get('/api/directory').then((mentors) => {
      setMentorCards(mentors.data);
    });
  }, []);

  const renderMentorCards = () =>
    mentorCards.map((mentorObject) => (
      <MentorCard {...mentorObject} key={mentorObject._id} />
    ));
  const searchMentorCards = (queryString) => {
    // with this search through the mentor cards to re render what is needed
    const filteredMentorList = mentorCards.filter((mentorObj) => {
      const objs = Object.values(mentorObj).join(' ').toLowerCase();
      return objs.includes(queryString.toLowerCase());
    });
    console.log('filtered Cards', filteredMentorList);
    console.log('all mentor cards', mentorCards);
    // setMentorCards([mentorCards[1]]);
  };
  return (
    <section aria-label="Mentor Directory">
      <Subheader {...subheaderProperties} />
      <Typography
        className={directoryHeader}
        variant="h2"
        data-testid="directoryHeader"
        gutterBottom
      >
        Office Hours
      </Typography>
      <MentorSearchBar searchQuery={searchMentorCards} />
      <div className={root}>
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
            label="Calender"
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
            <h1>CALANEDER WOULD GO HERE'</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Index;

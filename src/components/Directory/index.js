import React, { useState, useEffect } from 'react';
import MentorCard from './MentorCard';
import Subheader from '../Subheader/Subheader';
import MentorSearchBar from './MentorSearch/';
import useStyles from './Directory.styles';
import EmptyDirectory from './EmptyDirectory';
import { Typography, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import { emptySearch, directoryTabs, subheaderProperties } from './utils';
import request from '../../utils/axiosConfig';

const Directory = () => {
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
    async function fetchData() {
      const { data } = await request.get('/api/directory');

      setMentorCards(data);
    }

    fetchData();
  }, []);
  console.log('FROM THE TEST', mentorCards);

  const tabDisplayOptions = {
    0: () => {
      const mentorList = searchMentorCards();
      if (mentorList.length < 1) return <EmptyDirectory {...emptySearch} />;
      return mentorList.map(mentorObject => (
        <MentorCard {...mentorObject} key={mentorObject._id} />
      ));
    },
  };

  const searchMentorCards = () => {
    if (query) {
      const filteredMentorList = mentorCards.filter(mentorObj => {
        const objs = Object.values(mentorObj).join(' ').toLowerCase();
        return objs.includes(query.toLowerCase());
      });
      return filteredMentorList;
    }
    return mentorCards;
  };

  const renderTabs = () =>
    directoryTabs(directoryTab).map(tab => <Tab {...tab} key={tab.label} />);
  return (
    <section aria-label="Mentor Directory" className={root}>
      <Subheader {...subheaderProperties} />
      {isMobile ? null : (
        <Typography
          {...{
            className: directoryHeader,
            variant: 'h2',
            'data-testid': 'directoryHeader',
          }}
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
          {renderTabs()}
        </Tabs>
        <div
          {...{
            className: mentorListContainer,
            value: selectedTab,
            index: 0,
            'data-testid': 'mentorListContainer',
          }}
        >
          {tabDisplayOptions[selectedTab]()}
        </div>
      </div>
    </section>
  );
};

export default Directory;

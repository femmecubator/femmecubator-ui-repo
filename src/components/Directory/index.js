import React, { useState, useEffect } from 'react';
import MentorCard from './MentorCard/MentorCard';
import Subheader from '../Subheader/Subheader';
import { ReactComponent as SubheaderIcon } from '../Subheader/assets/SubheaderIcon.svg';
import MentorSearchBar from './MentorSearch/MentorSearchBar';
import useStyles from './Directory.styles';
// import Divider from '@material-ui/core/Divider';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import {
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
  Divider,
} from '@material-ui/core';
import request from 'utils/axiosConfig';

const Index = () => {
  const subheaderProperties = {
    variant: 'mentors',
    mainLabel: 'Connect with a Mentor',
    subLabel: 'Book 30 mins with a UX Design or Coding Mentor.',
    image: <SubheaderIcon />,
  };
  const isMobile = useMediaQuery('(max-width:1023px)');
  const { root, mentorListContainer, directoryHeader, tabs } = useStyles({
    isMobile,
  });
  const [selectedTab, setSelectedTab] = useState(0);
  const [mentorCards, setMentorCards] = useState([]);
  const handleChange = (e, newVal) => setSelectedTab(newVal);

  useEffect(() => {
    request.get('/api/directory').then((mentors) => {
      // eslint-disable-next-line no-console
      setMentorCards(mentors.data);
    });
  }, []);

  const renderMentorCards = () =>
    mentorCards.map((mentorObject) => (
      <MentorCard {...mentorObject} key={mentorObject._id} />
    ));
  return (
    <section aria-label="Mentor Directory">
      <Subheader {...subheaderProperties} />
      <Typography
        className={directoryHeader}
        variant="h5"
        data-testid="directoryHeader"
        gutterBottom
      >
        Office Hours
      </Typography>
      <MentorSearchBar />
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

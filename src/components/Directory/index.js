import React, { useState, useEffect } from 'react';
import MentorCard from './MentorCard';
import Subheader from '../Subheader/Subheader';
import DirectorySearchBar from './DirectorySearch';
import useStyles from './Directory.styles';
import EmptyDirectory from './EmptyDirectory';
import {
  CircularProgress,
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
} from '@material-ui/core';
import { emptySearch, directoryTabs, subheaderProperties } from './utils';
import { ReactComponent as SubheaderIcon } from '../Subheader/assets/SubheaderIcon.svg';
import request from '../../utils/axiosConfig';
import isEmpty from 'lodash/isEmpty';
import Meetings from 'components/Settings/Meetings';

const Directory = () => {
  const isMobile = useMediaQuery('(max-width:1023px)');
  const isSmallDevice = useMediaQuery('(max-width:480px)');
  const {
    root,
    loadingIcon,
    mentorDirectory,
    mentorListContainer,
    directoryHeader,
    directoryTab,
    tabs,
    meetingWrapper,
  } = useStyles({
    isMobile,
    isSmallDevice,
  });
  const [selectedTab, setSelectedTab] = useState(0);
  const [mentorCards, setMentorCards] = useState([]);
  const [query, setQuery] = useState('');
  const handleChange = (e, newVal) => setSelectedTab(newVal);
  const [errorResponse, setErrorResponse] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request.get('/api/mentors');
        if (data.data) {
          var mentorsWithTimeSlot = [];
          var mentorsData = data.data;
          mentorsData.map(data => {
            if ('timeSlot' in data && data.timeSlot.length > 0) {
              mentorsWithTimeSlot.push(data);
            }
          });
          setMentorCards(mentorsWithTimeSlot);
        }
      } catch (err) {
        setErrorResponse(true);
      }
    }
    fetchData();
  }, []);

  if (errorResponse) throw Error('BAD API REQUEST');

  const tabDisplayOptions = {
    0: () => {
      const mentorList = searchMentorCards();
      if (mentorList.length < 1 && query)
        return <EmptyDirectory {...emptySearch} />;
      return mentorList.map(mentorObject => (
        <MentorCard {...mentorObject} key={mentorObject._id} />
      ));
    },
    1: () => {
      return (
        <div className={meetingWrapper}>
          <Meetings />
        </div>
      );
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

  if (isEmpty(mentorCards)) {
    return <CircularProgress size="10rem" className={loadingIcon} />;
  } else
    return (
      <section aria-label="Mentor Directory" className={root}>
        <Subheader {...{ ...subheaderProperties, image: <SubheaderIcon /> }} />
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
        <div className={mentorDirectory}>
          <DirectorySearchBar setQuery={setQuery} type="aboveTabs" />
          <Tabs
            {...{
              value: selectedTab,
              onChange: handleChange,
              'aria-label': 'Mentor Directory Tabs',
              className: tabs,
              TabIndicatorProps: {
                style: {
                  background: '#550CCC',
                },
              },
            }}
          >
            {renderTabs()}
          </Tabs>

          <div
            {...{
              className: `${selectedTab === 0 ? mentorListContainer : ''}`,
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

import React, { useState, useEffect } from 'react';
import MentorCard from './MentorCard/MentorCard';
import Subheader from '../Subheader/Subheader';
import { ReactComponent as SubheaderIcon } from '../Subheader/assets/SubheaderIcon.svg';
import MentorSearchBar from './MentorSearch/MentorSearchBar';
import useStyles from './Directory.styles';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const testInfo = {
  firstName: 'Amanda',
  lastName: 'Powell',
  jobTitle: 'Coding Mentor',
  mentorSkills:
    'Wireframing, Prototyping, User Research, Customer Journey, Persona',
  bio:
    'Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic.Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic.Lorem ipsum testing lines limited to an awesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholderawesomely composed lead sentence or series of posts. Snappy, judgy, tyrannical. Compassionate or narcissistic.Snappy, judgy, tyrannical. Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 Compassionate or narcissistic. It is a placeholder  limited to 280 char text to a max of 5 ',
  initials: 'AP',
};

const Index = () => {
  const subheaderProperties = {
    variant: 'mentors',
    mainLabel: 'Connect with a Mentor',
    subLabel: 'Book 30 mins with a UX Design or Coding Mentor.',
    image: <SubheaderIcon />,
  };
  useEffect(() => {
    fetch('http://local.femmecubator.com:3001/api/directory')
      .then((r) => r.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log('THIS IS THE DATA RETURNED', data);
      });
  });

  const isMobile = useMediaQuery('(max-width:1023px)');
  const classes = useStyles({ isMobile });
  const { root, mentorListContainer, search } = classes;
  const [selectedTab, setSelectedTab] = useState(0);
  const [mentorCards, setMentorCards] = useState([]);
  const handleChange = (e, newVal) => setSelectedTab(newVal);

  return (
    <section aria-label="Mentor Directory">
      <Subheader {...subheaderProperties} />
      <MentorSearchBar />
      <div className={root}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="Mentor Directory Tabs"
          TabIndicatorProps={{ style: { background: '#550CCC' } }}
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
            aria-controls="Calender Tab"
            tabIndex="0"
          />
        </Tabs>

        <div className={mentorListContainer} value={selectedTab} index={0}>
          <Divider />

          {selectedTab === 0 ? (
            <>
              <MentorCard {...testInfo} />
              <MentorCard {...testInfo} />
              <MentorCard {...testInfo} />
              <MentorCard {...testInfo} />
            </>
          ) : (
            <h1>CALANEDER WOULD GO HERE'</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Index;

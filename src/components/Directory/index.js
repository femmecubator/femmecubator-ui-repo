import React from 'react';
import MentorCard from './MentorCard/MentorCard';
import Subheader from '../Subheader/Subheader';
import { ReactComponent as SubheaderIcon } from '../Subheader/assets/SubheaderIcon.svg';
import useStyles from './Directory.styles';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const testInfo = {
  mentorName: 'Amanda Powell',
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
  const isMobile = useMediaQuery('(max-width:1023px)');
  const classes = useStyles({ isMobile });
  const { root } = classes;
  return (
    <section aria-label="Mentor Directory">
      <Subheader {...subheaderProperties} />

      <Tabs
        value="Directory"
        // onChange={handleChange}
        aria-label="Mentor Directory Tabs"
      >
        <Tab label="Directory" />
        {/* <Tab label="Calender" {...a11yProps(1)} /> */}
      </Tabs>
      <div className="search">Search Bar</div>
      <Divider variant="inset" />
      <div className={root}>
        <MentorCard {...testInfo} />
        <MentorCard {...testInfo} />
        <MentorCard {...testInfo} />
        <MentorCard {...testInfo} />
      </div>
    </section>
  );
};

export default Index;

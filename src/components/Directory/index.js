import React from 'react';
import MentorCard from './MentorCard/MentorCard';
import Subheader from '../Subheader/Subheader';
import { ReactComponent as SubheaderIcon } from '../Subheader/assets/SubheaderIcon.svg';
import useStyles from './Directory.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
      <div className="search">Search Bar</div>
      <div className={root}>
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </section>
  );
};

export default Index;

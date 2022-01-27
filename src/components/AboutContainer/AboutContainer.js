import React, { useState } from 'react';
import AboutBanner from './AboutBanner';
import AboutContentContainer from './AboutContentContainer';
import AboutSideBar from './AboutSideBar';
import Footer from 'components/Footer/Footer';
import useStyles from './AboutContainer.styles';
import { useHistory, useLocation } from 'react-router';

const scrollToTop = () => {
  if (window) {
    window.scroll(0, 0);
  }
};

const AboutContainer = () => {
  const { container, body } = useStyles();
  const [selected, setSelected] = useState('What We Do');
  const history = useHistory();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();

  React.useEffect(() => {
    if (query.get('page')) {
      if (query.get('page') === 'volunteer') {
        setSelected('Volunteer');
      } else if (query.get('page') === 'support') {
        setSelected('Support');
      } else if (query.get('page') === 'contactus') {
        setSelected('Contact Us');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.get('page')]);

  React.useEffect(() => {
    history.push(`/about?page=${selected.split(' ').join('').toLowerCase()}`);
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <section className={container}>
      <AboutBanner text={selected} />
      <section className={body}>
        <AboutSideBar {...{ selected, setSelected }} />
        <AboutContentContainer {...{ selected, setSelected }} />
      </section>
      <Footer />
    </section>
  );
};

export default AboutContainer;

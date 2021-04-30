import React from 'react';
import AboutContainer from '../components/AboutContainer';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'About Page',
  component: AboutContainer,
};

export const About_Container = () => {
  return (
    <Router>
      <AboutContainer />
    </Router>
  );
};

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'context/global';
import MentorOnboardingModal from 'components/MentorOnboarding/MentorOnboardingModal';

export default {
  title: 'Mentor Onboarding Modal',
  component: MentorOnboardingModal,
};

export const Mentor_Onboarding_Modal = () => {
  return (
    <>
      <Router>
        <GlobalProvider>
          <MentorOnboardingModal showInModal={true} />
        </GlobalProvider>
      </Router>
    </>
  );
};

import React from 'react';
import { getTokenCookie } from '../../utils/cookies';
import jwt_decode from 'jwt-decode';
import MentorOnboardingModal from '../MentorOnboarding/MentorOnboardingModal';

const ViewContainer = () => {
  const { role_id } = jwt_decode(getTokenCookie());

  return (
    <>
      {parseInt(role_id) === 0 ? (
        <div>
          <MentorOnboardingModal />
          Mentor Dashboard
        </div>
      ) : (
        <div>Mentee Dashboard</div>
      )}
    </>
  );
};

export default ViewContainer;

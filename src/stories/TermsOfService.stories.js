import React from 'react';
import TermsOfService from 'components/TermsOfService/TermsOfService';

export default {
  title: 'Terms Of Service',
  component: TermsOfService,
};

export const Terms_Of_Service = () => {
  return (
    <>
      <div style={{ color: '#E5E5E5' }}>
        <TermsOfService />
      </div>
    </>
  );
};

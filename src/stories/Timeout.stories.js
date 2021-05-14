import React from 'react';
import Timeout from 'components/Timeout/Timeout';
import ModalPopup from 'components/Timeout/ModalPopup';

export default {
  title: 'Timeout',
  component: Timeout,
};

export const Modal = open => {
  return (
    <div>
      <ModalPopup open={open} />
    </div>
  );
};

import React from 'react';
import Timeout from 'components/Timeout/Timeout';
import ModalPopup from 'components/Timeout/ModalPopup';

export default {
  title: 'Timeout',
  component: Timeout,
};

/* const Template = args => <ModalPopup {...args} />;
export const Modal = Template.bind({});
Modal.args = {}; */

export const Modal = () => {
  return (
    <div>
      <ModalPopup />
    </div>
  );
};

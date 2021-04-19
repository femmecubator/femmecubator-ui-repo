import React from 'react';
import ModalPopup from 'components/Timeout/ModalPopup';

export default {
  title: 'ModalPopup',
  component: ModalPopup,
};

const Template = args => <ModalPopup {...args} />;

export const Default = Template.bind({});

Default.args = {};

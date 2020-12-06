import { ACTION_TYPE } from 'utils/constants';

export const updateView = (payload) => ({
  type: ACTION_TYPE.UPDATE_UI_VIEW,
  payload,
});

export const updateAuth = (payload) => ({
  type: ACTION_TYPE.UPDATE_AUTH,
  payload,
});

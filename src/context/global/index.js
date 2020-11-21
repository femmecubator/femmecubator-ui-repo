import React, { createContext, useReducer } from 'react';
import { ACTION_TYPE } from 'utils/constants';

const initialState = {
  isMobile: false,
};

const GlobalContext = createContext(initialState);

const GlobalReducer = (globalState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.UPDATE_UI_VIEW:
      return { ...globalState, isMobile: payload };
    default:
      throw new Error('Unknown action type');
  }
};

const GlobalProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(GlobalReducer, initialState);
  const value = { globalState, dispatch };
  return <GlobalContext.Provider {...{ value, children }} />;
};

export { GlobalContext, GlobalProvider };

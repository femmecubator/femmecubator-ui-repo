import React, { useState, createContext } from 'react';

export const AboutContext = createContext();

export const AboutMenuOptionProvider = (props) => {
  const [selected, setSelected] = useState('What We Do');

  return (
    <AboutContext.Provider value={[selected, setSelected]}>
      {props.children}
    </AboutContext.Provider>
  );
};

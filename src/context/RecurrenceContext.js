

import React, { createContext, useState } from 'react';

export const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [state, setState] = useState({
    startDate: null, 
    endDate: null, 
    recurrenceType: 'daily',
    interval: 1, 
    specificDays: [], 
    monthlyPattern: null, 
  });

  const updateState = (newState) => {
    setState((prev) => ({ ...prev, ...newState }));
  };

  return (
    <RecurrenceContext.Provider value={{ state, updateState }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

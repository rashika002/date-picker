
// Context to manage global state for recurrence settings
import React, { createContext, useState } from 'react';

export const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [state, setState] = useState({
    startDate: null, // Start date for recurrence
    endDate: null, // Optional end date
    recurrenceType: 'daily', // daily, weekly, monthly, yearly
    interval: 1, // Every X days/weeks/months
    specificDays: [], // e.g., ['Monday', 'Wednesday'] for weekly
    monthlyPattern: null, // e.g., { type: 'second', day: 'Tuesday' }
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

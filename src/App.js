

import React from 'react';
import DatePicker from './components/Datepicker';
import RecurrenceOptions from './components/RecurrenceOptions';
import CustomizationPanel from './components/CustomizationPanel';
import MiniCalendar from './components/MiniCalendar';
import { RecurrenceProvider } from './context/RecurrenceContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RecurrenceProvider>
      <div className="container mt-4">
        <h1 className="display-6 text-center mb-4">Recurring Date Picker</h1>
        <div className="row">
          <div className="col">
            <DatePicker />
            <RecurrenceOptions />
            <CustomizationPanel />
            <MiniCalendar />
          </div>
        </div>
      </div>
    </RecurrenceProvider>
  );
}

export default App;
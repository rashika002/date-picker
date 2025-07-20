
// Component to select recurrence type (daily, weekly, etc.)
import React, { useContext } from 'react';
import { RecurrenceContext } from '../context/RecurrenceContext';

export default function RecurrenceOptions() {
  const { state, updateState } = useContext(RecurrenceContext);
  const { recurrenceType } = state;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Recurrence Type</h5>
        <select
          value={recurrenceType}
          onChange={(e) => updateState({ recurrenceType: e.target.value })}
          className="form-select"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
    </div>
  );
}

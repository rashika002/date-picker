
import React, { useContext } from 'react';
import { RecurrenceContext } from '../context/RecurrenceContext';

export default function RecurrenceOptions() {
  const { state, updateState } = useContext(RecurrenceContext);
  const { recurrenceType } = state;

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title custom-heading">
          <i className="bi bi-arrow-repeat me-2"></i>Recurrence Type
        </h5>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-list-check"></i>
          </span>
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
    </div>
  );
}


// Component to select start and end dates
import React, { useContext } from 'react';
import { RecurrenceContext } from '../context/RecurrenceContext';
import { format } from 'date-fns';

export default function DatePicker() {
  const { state, updateState } = useContext(RecurrenceContext);
  const { startDate, endDate } = state;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Select Dates</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="startDate" className="form-label">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
              onChange={(e) => updateState({ startDate: new Date(e.target.value) })}
              className="form-control"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="endDate" className="form-label">End Date (Optional)</label>
            <input
              type="date"
              id="endDate"
              value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
              onChange={(e) => updateState({ endDate: new Date(e.target.value) })}
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

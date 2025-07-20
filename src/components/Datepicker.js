
import React, { useContext, useCallback } from 'react';
import { RecurrenceContext } from '../context/RecurrenceContext';
import { format, addYears } from 'date-fns';
import debounce from 'lodash.debounce';

export default function DatePicker() {
  const { state, updateState } = useContext(RecurrenceContext);
  const { startDate, endDate } = state;

  const debouncedUpdateState = useCallback(
    debounce((newState) => {
      updateState(newState);
    }, 300),
    [updateState]
  );

  const handleDateChange = (e, field) => {
    const newDate = new Date(e.target.value);
    if (field === 'endDate' && startDate && newDate > addYears(startDate, 1)) {
      alert('End date cannot be more than 1 year from start date.');
      return;
    }
    debouncedUpdateState({ [field]: newDate });
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title custom-heading">
          <i className="bi bi-calendar3 me-2"></i>Select Dates
        </h5>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="startDate" className="form-label fw-bold">Start Date</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-calendar"></i>
              </span>
              <input
                type="date"
                id="startDate"
                value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
                onChange={(e) => handleDateChange(e, 'startDate')}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="endDate" className="form-label fw-bold">End Date (Optional)</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-calendar"></i>
              </span>
              <input
                type="date"
                id="endDate"
                value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
                onChange={(e) => handleDateChange(e, 'endDate')}
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

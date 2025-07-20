
import React, { useContext, useCallback } from 'react';
import { RecurrenceContext } from '../context/RecurrenceContext';
import debounce from 'lodash.debounce';

export default function CustomizationPanel() {
  const { state, updateState } = useContext(RecurrenceContext);
  const { recurrenceType, interval, specificDays } = state;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const debouncedUpdateState = useCallback(
    debounce((newState) => {
      updateState(newState);
    }, 300),
    [updateState]
  );

  const handleDayToggle = (day) => {
    updateState({
      specificDays: specificDays.includes(day)
        ? specificDays.filter((d) => d !== day)
        : [...specificDays, day],
    });
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title custom-heading">
          <i className="bi bi-gear me-2"></i>Customize Recurrence
        </h5>
        <div className="mb-3">
          <label htmlFor="interval" className="form-label fw-bold">Every</label>
          <div className="input-group w-50">
            <input
              type="number"
              id="interval"
              min="1"
              value={interval}
              onChange={(e) => debouncedUpdateState({ interval: Number(e.target.value) })}
              className="form-control"
            />
            <span className="input-group-text">
              {recurrenceType === 'daily' ? 'days' : recurrenceType === 'weekly' ? 'weeks' : recurrenceType === 'monthly' ? 'months' : 'years'}
            </span>
          </div>
        </div>
        {recurrenceType === 'weekly' && (
          <div>
            <label className="form-label fw-bold">Days of the Week</label>
            <div className="d-flex flex-wrap gap-2">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => handleDayToggle(day)}
                  className={`btn btn-sm ${specificDays.includes(day) ? 'btn-primary' : 'btn-outline-primary supervised'}`}
                >
                  {day.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

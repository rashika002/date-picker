
// Component to customize recurrence (interval, specific days)
import React, { useContext } from 'react';
import { RecurrenceContext } from '../context/RecurrenceContext';

export default function CustomizationPanel() {
  const { state, updateState } = useContext(RecurrenceContext);
  const { recurrenceType, interval, specificDays } = state;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const handleDayToggle = (day) => {
    updateState({
      specificDays: specificDays.includes(day)
        ? specificDays.filter((d) => d !== day)
        : [...specificDays, day],
    });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Customize Recurrence</h5>
        <div className="mb-3">
          <label htmlFor="interval" className="form-label">Every</label>
          <div className="input-group w-25">
            <input
              type="number"
              id="interval"
              min="1"
              value={interval}
              onChange={(e) => updateState({ interval: Number(e.target.value) })}
              className="form-control"
            />
            <span className="input-group-text">
              {recurrenceType === 'daily' ? 'days' : recurrenceType === 'weekly' ? 'weeks' : recurrenceType === 'monthly' ? 'months' : 'years'}
            </span>
          </div>
        </div>
        {recurrenceType === 'weekly' && (
          <div>
            <label className="form-label">Days of the Week</label>
            <div className="d-flex flex-wrap gap-2">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => handleDayToggle(day)}
                  className={`btn ${specificDays.includes(day) ? 'btn-primary' : 'btn-outline-secondary'}`}
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

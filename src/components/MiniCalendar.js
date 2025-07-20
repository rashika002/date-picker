
import React, { useContext, useMemo } from 'react';
import { format } from 'date-fns';
import { RecurrenceContext } from '../context/RecurrenceContext';
import { calculateRecurringDates } from '../utils/dateUtils';

export default function MiniCalendar() {
  const { state } = useContext(RecurrenceContext);
  const { startDate, endDate, recurrenceType, interval, specificDays, monthlyPattern } = state;

  const dates = useMemo(
    () => {
      const allDates = calculateRecurringDates(startDate, endDate, recurrenceType, interval, specificDays, monthlyPattern);
      return allDates.slice(0, 50);
    },
    [startDate, endDate, recurrenceType, interval, specificDays, monthlyPattern]
  );

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title custom-heading">
          <i className="bi bi-calendar4-week me-2"></i>Preview
        </h5>
        <div className="list-group" style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {dates.length > 0 ? (
            <>
              {dates.map((date, index) => (
                <div
                  key={index}
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '0.5rem' }}></i>
                  {format(date, 'PPP')}
                </div>
              ))}
              {dates.length === 50 && (
                <div className="list-group-item text-muted small">... and more (limited to 50 dates)</div>
              )}
            </>
          ) : (
            <div className="list-group-item text-muted">No dates selected.</div>
          )}
        </div>
      </div>
    </div>
  );
}

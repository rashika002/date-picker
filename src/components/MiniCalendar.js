
// Component to preview recurring dates
import React, { useContext, useMemo } from 'react';
import { format } from 'date-fns';
import { RecurrenceContext } from '../context/RecurrenceContext';
import { calculateRecurringDates } from '../utils/dateUtils';

export default function MiniCalendar() {
  const { state } = useContext(RecurrenceContext);
  const { startDate, endDate, recurrenceType, interval, specificDays, monthlyPattern } = state;

  const dates = useMemo(
    () => calculateRecurringDates(startDate, endDate, recurrenceType, interval, specificDays, monthlyPattern),
    [startDate, endDate, recurrenceType, interval, specificDays, monthlyPattern]
  );

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Preview</h5>
        <div style={{ maxHeight: '160px', overflowY: 'auto' }}>
          {dates.length > 0 ? (
            dates.map((date, index) => (
              <div key={index} className="text-muted small">
                {format(date, 'PPP')}
              </div>
            ))
          ) : (
            <p className="text-muted small">No dates selected.</p>
          )}
        </div>
      </div>
    </div>
  );
}

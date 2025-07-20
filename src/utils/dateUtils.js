

// import { addDays, addWeeks, addMonths, addYears, isWithinInterval } from 'date-fns';

// export const calculateRecurringDates = (startDate, endDate, recurrenceType, interval, specificDays, monthlyPattern) => {
//   if (!startDate) return [];
//   const dates = [];
//   let currentDate = new Date(startDate);
//   const end = endDate ? new Date(endDate) : addYears(startDate, 1); // Default to 1 year

//   while (currentDate <= end) {
//     if (recurrenceType === 'daily') {
//       dates.push(new Date(currentDate));
//       currentDate = addDays(currentDate, interval);
//     } else if (recurrenceType === 'weekly') {
//       if (specificDays.length === 0 || specificDays.includes(currentDate.toLocaleString('en-US', { weekday: 'long' }))) {
//         dates.push(new Date(currentDate));
//       }
//       currentDate = addDays(currentDate, 1);
//       if (currentDate.getDay() === 0) currentDate = addWeeks(currentDate, interval - 1);
//     } else if (recurrenceType === 'monthly') {
//       dates.push(new Date(currentDate));
//       currentDate = addMonths(currentDate, interval);
//     } else if (recurrenceType === 'yearly') {
//       dates.push(new Date(currentDate));
//       currentDate = addYears(currentDate, interval);
//     }
//   }
//   return dates.filter((date) => !endDate || isWithinInterval(date, { start: startDate, end }));
// };

  import { addDays, addWeeks, addMonths, addYears, isWithinInterval } from 'date-fns';

  export const calculateRecurringDates = (startDate, endDate, recurrenceType, interval, specificDays, monthlyPattern) => {
    if (!startDate || isNaN(new Date(startDate).getTime())) return [];
    if (interval < 1) return [];
    const dates = [];
    let currentDate = new Date(startDate);
    const end = endDate && !isNaN(new Date(endDate).getTime()) ? new Date(endDate) : addYears(startDate, 1);

    const MAX_DATES = 1000;
    let iterationCount = 0;

    while (currentDate <= end && iterationCount < MAX_DATES) {
      if (recurrenceType === 'daily') {
        dates.push(new Date(currentDate));
        currentDate = addDays(currentDate, interval);
      } else if (recurrenceType === 'weekly') {
        if (specificDays.length === 0 || specificDays.includes(currentDate.toLocaleString('en-US', { weekday: 'long' }))) {
          dates.push(new Date(currentDate));
        }
        currentDate = addDays(currentDate, 1);
        if (currentDate.getDay() === 0) currentDate = addWeeks(currentDate, interval - 1);
      } else if (recurrenceType === 'monthly') {
        dates.push(new Date(currentDate));
        currentDate = addMonths(currentDate, interval);
      } else if (recurrenceType === 'yearly') {
        dates.push(new Date(currentDate));
        currentDate = addYears(currentDate, interval);
      }
      iterationCount++;
    }

    return dates.filter((date) => !endDate || isWithinInterval(date, { start: startDate, end }));
  };
  
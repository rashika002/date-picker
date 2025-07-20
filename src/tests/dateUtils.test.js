
   // Test for recurring date calculations
   import { calculateRecurringDates } from '../utils/dateUtils';
   import { addDays } from 'date-fns';

   describe('calculateRecurringDates', () => {
     test('should calculate daily recurring dates', () => {
       const startDate = new Date('2025-01-01');
       const endDate = new Date('2025-01-05');
       const result = calculateRecurringDates(startDate, endDate, 'daily', 1, [], null);
       expect(result).toHaveLength(5);
       expect(result[1]).toEqual(addDays(startDate, 1));
     });

     test('should calculate weekly recurring dates for specific days', () => {
       const startDate = new Date('2025-01-01'); // Wednesday
       const endDate = new Date('2025-01-08');
       const result = calculateRecurringDates(startDate, endDate, 'weekly', 1, ['Wednesday'], null);
       expect(result).toHaveLength(2);
       expect(result[0]).toEqual(startDate);
       expect(result[1]).toEqual(addDays(startDate, 7));
     });
   });
   
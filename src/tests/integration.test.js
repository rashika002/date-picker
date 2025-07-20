
   // Test to ensure all components render correctly
   import { render, screen } from '@testing-library/react';
   import App from '../App';

   describe('Recurring Date Picker', () => {
     test('renders all components', () => {
       render(<App />);
       expect(screen.getByText('Recurring Date Picker')).toBeInTheDocument();
       expect(screen.getByText('Select Dates')).toBeInTheDocument();
       expect(screen.getByText('Recurrence Type')).toBeInTheDocument();
       expect(screen.getByText('Customize Recurrence')).toBeInTheDocument();
       expect(screen.getByText('Preview')).toBeInTheDocument();
     });
   });
   
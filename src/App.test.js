
   import { render, screen } from '@testing-library/react';
   import App from './App';

   describe('App', () => {
     test('renders Recurring Date Picker heading', () => {
       render(<App />);
       const headingElement = screen.getByText(/Recurring Date Picker/i);
       expect(headingElement).toBeInTheDocument();
     });
   });
   
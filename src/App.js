
   import React from 'react';
   import DatePicker from './components/DatePicker';
   import RecurrenceOptions from './components/RecurrenceOptions';
   import CustomizationPanel from './components/CustomizationPanel';
   import MiniCalendar from './components/MiniCalendar';
   import { RecurrenceProvider } from './context/RecurrenceContext';
   import 'bootstrap/dist/css/bootstrap.min.css';
   import './index.css';
   function App() {
     return (
       <RecurrenceProvider>
         <div className="min-vh-100 d-flex flex-column bg-light">
           {/* Navbar */}
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
             <div className="container">
               <a className="navbar-brand" href="/">
                 <i className="bi bi-calendar2-check me-2 "></i>
                 Recurring Date Picker
               </a>
             </div>
           </nav>

           {/* Main Content */}
           <div className="container my-4 flex-grow-1">
             <div className="card shadow-lg border-0">
               <div className="card-body p-4">
                 <h1 className="display-6 text-center mb-4 text-primary">
                   <i className="bi bi-calendar-event me-2"></i>
                   Schedule Your Events
                 </h1>
                 <div className="row g-4">
                   <div className="col-md-6">
                     <DatePicker />
                     <RecurrenceOptions />
                   </div>
                   <div className="col-md-6">
                     <CustomizationPanel />
                     <MiniCalendar />
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Footer */}
           <footer className="bg-dark text-white text-center py-3">
             <p className="mb-0">
               &copy; {new Date().getFullYear()} Recurring Date Picker | Built with <i className="bi bi-heart-fill text-danger"></i> using React & Bootstrap
             </p>
           </footer>
         </div>
       </RecurrenceProvider>
     );
   }

   export default App;
   
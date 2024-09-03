import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import AdminDashboardDoctor from './components/AdminDashboardDoctor.jsx';
import Billing from './components/Billing.jsx';
import PatientRecords from './components/PatientRecords.jsx';
import PharmacyMangement from './components/PharmacyMangement.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/AdminDashboardDoctor",
//     element: <AdminDashboardDoctor></AdminDashboardDoctor>,
//   },
//   {
//     path: "/billing",
//     element: <Billing></Billing>,
//   },
//   {
//     path: "/adminDashboaedPatientRecord",
//     element:<PatientRecords></PatientRecords> ,
//   },
//   {
//     path: "/pharmacyMangement",
//     element: <PharmacyMangement></PharmacyMangement>,
//   },
  
  
// ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)

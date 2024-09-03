



// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminDashboardDoctor from './components/AdminDashboardDoctor';
import PharmacyMangement from './components/PharmacyMangement';
import PatientRecords from './components/PatientRecords';
import Billing from './components/Billing';
import CreateDoctorAcc from './components/CreateDoctorAcc';
import AdminLoginPage from './components/AdminLoginPage';
import Setting from './components/Setting';
import { Dashboard } from './components/Dashboard';


function App() {


  /////////////// for create doctor account component//////////////////
  const [doctors, setDoctors] = useState([]);

  const addDoctor = (newDoctor) => {
    console.log('Adding doctor:', newDoctor);
    setDoctors([...doctors, newDoctor]);
  };

  return (

    <Router>
      {/* <Layout> */}

      
            <Routes>
            <Route path='adminLogin' element={<AdminLoginPage></AdminLoginPage>}/>
            <Route path="/" element={<Layout />}>
              <Route path='adminLogin' element={<AdminLoginPage></AdminLoginPage>}/>
              <Route path='adminDashboard' element={<Dashboard></Dashboard>}/>
              <Route path="AdminDashboardDoctor" element={<AdminDashboardDoctor doctors={doctors} />} />
                  <Route path="AdminDashboardDoctor/CreateDoctorAcc" element={<CreateDoctorAcc addDoctor={addDoctor} />}/>  
                
              <Route path="billing" element={<Billing />} />
              <Route path="adminDashboardPatientRecord" element={<PatientRecords />} />
              <Route path="pharmacyMangement" element={<PharmacyMangement />} />
              <Route path="settings" element={<Setting></Setting>} />
            </Route> 
            </Routes>

         



      {/* </Layout> */}
    </Router>

  );
}

export default App;


////////////////////////////////////////////////////////////////////////////////////////////////////

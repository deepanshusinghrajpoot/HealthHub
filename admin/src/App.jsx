import React, { useContext } from 'react'
import { Logn } from './pages/Logn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContexts } from './contexts/AdminContexts';
import { Navbar } from './componentes/Navbar';
import { Sidebar } from './componentes/Sidebar';
import { DashBord } from './pages/Admin/DashBord';
import { AllAppointment } from './pages/Admin/AllAppointment';
import { AddDoctor } from './pages/Admin/AddDoctor';
import { DoctorList } from './pages/Admin/DoctorList';
import { Route, Routes } from 'react-router-dom';
import { DoctorContexts } from './contexts/DoctorContexts';
import { DoctorDashBord } from './pages/Doctor/DoctorDashBord';
import { DoctorAppointments } from './pages/Doctor/DoctorAppointments';
import { DoctorProfile } from './pages/Doctor/DoctorProfile';



const App = () => {


  const {aToken} = useContext(AdminContexts);
  const {dToken} = useContext(DoctorContexts);

  return aToken || dToken ? (

    <div  className='bg-[#F8F9FD]'>
         <ToastContainer />
         <Navbar/>
         <div className='flex flex-start' >
              <Sidebar/>
              <Routes>
              <Route path='/' element={<></>} />
                   {/* Admin Route */}
                  <Route path='/admin-dashboard' element={<DashBord/>} />
                  <Route path='/all-appointments' element={<AllAppointment/>} />
                  <Route path='/add-doctor' element={<AddDoctor/>} />
                  <Route path='/doctor-list' element={<DoctorList/>} />


                  {/* Doctor Route */}
                  <Route path='/doctor-dashboard' element={<DoctorDashBord/>} />
                  <Route path='/doctor-appointments' element={<DoctorAppointments/>} />
                  <Route path='/doctor-profile' element={<DoctorProfile/>} />
              </Routes>
         </div>
    </div>

  ) : (

     <>
        <Logn/>
        <ToastContainer />
     </>

  )
}

export default App;

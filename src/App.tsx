// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// local modules.
import NavBar from './Navigation/Navbar'
import Dashboard from './Routes/Dashboard'
import ViewAllEmployees from './Routes/ViewAllEmployees'
import AddNewEmployee from './Routes/AddNewEmployee'
import FetchEmployeeDetails from './Routes/FetchEmployeeDetails'
import ProSidebar from './Navigation/ProSidebar'
import UpdateEmployeeDetails from './Routes/UpdateEmployeeDetails'
import NotFound from './Routes/NotFound'
import CreateEmployeeLeaveSession from './Routes/CreateEmployeeLeaveSession'
import AddNewNSP from './Routes/AddNewNSP'
import ViewAllEmployeesOnLeave from './Routes/ViewEmployeesOnLeave'
import ViewAllNSPs from './Routes/ViewAllNSPs'
import ViewLeaveRecordDetails from './Routes/ViewLeaveRecordDetails'
import ViewShortTermStaffDetails from './Routes/ViewShortTermStaffDetails'
import UpdateShortTermStaffDetails from './Routes/UpdateShortTermStaffDetails'
import UpdateLeaveRequestDetails from './Routes/UpdateLeaveRequestDetails'







const App = ( ) => {



  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={ <Dashboard /> } />
            <Route path='/employee-enrollment' element={ <AddNewEmployee /> } />
            <Route path='/employee-roster' element={ <ViewAllEmployees /> } />
            <Route path='/fetch-employee-details/:empID' element={ <FetchEmployeeDetails /> } />
            <Route path='/update-employee-details/:empID' element={ <UpdateEmployeeDetails /> } />
            <Route path='/nsp-enrollment' element={ <AddNewNSP /> } />
            <Route path='/nsp-roster' element={ <ViewAllNSPs /> } />
            <Route path='/short-term-staff-details/:nspID' element={ <ViewShortTermStaffDetails /> } />
            <Route path='/update-short-term-staff-details/:nspID' element={ <UpdateShortTermStaffDetails /> } />
            <Route path='/pass-request' element={ <CreateEmployeeLeaveSession /> } />
            <Route path='/employee-pass-log' element={ <ViewAllEmployeesOnLeave /> } />
            <Route path='/leave-record-details/:empID' element={ <ViewLeaveRecordDetails /> } />
            <Route path='/update-leave-request-details/:empID' element={ <UpdateLeaveRequestDetails /> } />
            <Route path='/sidebar' element={ <ProSidebar /> } />
            <Route path='/navbar' element={ <NavBar /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
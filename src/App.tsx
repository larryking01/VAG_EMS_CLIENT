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








const App = ( ) => {



  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={ <Dashboard /> } />
            <Route path='/add-new-employee' element={ <AddNewEmployee /> } />
            <Route path='/view-all-employees' element={ <ViewAllEmployees /> } />
            <Route path='/fetch-employee-details/:empID' element={ <FetchEmployeeDetails /> } />
            <Route path='/update-employee-details/:empID' element={ <UpdateEmployeeDetails /> } />
            <Route path='/create-leave-session' element={ <CreateEmployeeLeaveSession /> } />
            <Route path='/sidebar' element={ <ProSidebar /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
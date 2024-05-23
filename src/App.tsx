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
// import BackNextNav from './Navigation/BackNextNav'
import UpdateEmployeeDetails from './Routes/UpdateEmployeeDetails'
import NotFound from './Routes/NotFound'


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
            <Route path='/sidebar' element={ <ProSidebar /> } />
            {/* <Route path='/back-next-nav' element={ <BackNextNav /> } /> */}
            <Route path='/update-employee-details/:empID' element={ <UpdateEmployeeDetails /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
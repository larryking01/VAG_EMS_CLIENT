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





const App = ( ) => {



  return (
    <div>
      <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={ <Dashboard /> } />
            <Route path='/add-new-employee' element={ <AddNewEmployee /> } />
            <Route path='/view-all-employees' element={ <ViewAllEmployees /> } />
            <Route path='/fetch-employee-details' element={ <FetchEmployeeDetails /> } />
            <Route path='/sidebar' element={ <ProSidebar /> } />
          </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
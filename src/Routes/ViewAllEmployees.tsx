import { useState, useEffect } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
// font awesome icons.
import { useNavigate } from 'react-router-dom'
import SpinLoading from '../Navigation/SpinLoading'
// import { Button } from '@mui/material'
import { MdModeEdit } from "react-icons/md"
import { MdDelete } from "react-icons/md"





const ViewAllEmployees = ( ) => {

    // server urls
    // dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL

    const navigate = useNavigate()

    // setting up state.
    const [ AllEmployeesArray, setAllEmployeesArray ] = useState([ ])
    const [ loadingAllEmployees, setLoadingAllEmployees ] = useState<boolean>( true )


    // effect hook to fetch all employees.
    useEffect(() => {
        const FetchAllEmployees = async () => {
            try {
                const controller = new AbortController()   // instantiating the abort controller
                const id = setTimeout( () => controller.abort(), 10000 )  // aborting the async fetch operation after 10secs
                let response = await fetch( `${ server_url }/get/fetch-all-employees`, {
                    method: 'GET',
                    signal: controller.signal   // listener for the fetch request to listen to the abort operation
                })
                if( response.status === 200 ) {
                    let data = await response.json() 
                    setAllEmployeesArray( data )
                    setLoadingAllEmployees( false )
                    console.log(`all employees = ${ AllEmployeesArray }`)
                }
                else {
                    console.log('failed to fetch all employees due to error')
                }
                clearTimeout( id )  // clear timeout in case fetch completes before abort timeout.
                }
                catch( error ) {
                    console.log(`error is ${ error }`)
                    alert('bad network connection.. try again later')
                    setLoadingAllEmployees( false )
                }
        }
        FetchAllEmployees()

    }, [ ])



    // data table.
    const columns: GridColDef[] = [
        {
            field: 'Actions',
            headerName: 'Actions',
            headerClassName: 'display-employees-grid-header',
            width: 100,
            renderCell: (( params: any ) => 
                <div>
                    <IconButton aria-label='Edit Staff' onClick={() => navigate(`/fetch-employee-details/${ params.id }`)}>
                        <MdModeEdit color='#4B49AC' />
                    </IconButton>

                    <IconButton aria-label='Delete Staff' onClick={() => {}}>
                        <MdDelete color='#D22B2B' />
                    </IconButton>
                </div>
            )
        },
        { field: 'Employee_Photo', headerName: 'Photo', width:100,
        //   renderHeader: ( ) => ( <p className='font-bold'> Photo </p>),
          headerClassName: 'display-employees-grid-header',
          renderCell: (( params: any ) => <Avatar src={ params.value } sx={{ width: 60, height: 60, marginTop: 1 }} /> )
        },
        { field: 'Employee_ID', headerName: 'Employee ID', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'First_Name', headerName: 'First Name', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'Last_Name', headerName: 'Last Name', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'Other_Names', headerName: 'Other Name(s)', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'Sex', headerName: 'Sex', headerClassName: 'display-employees-grid-header', width: 100, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'Mobile_Number', headerName: 'Mobile Number', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'E_mail', headerName: 'E-mail', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'Date_Of_Birth', headerName: 'Date Of Birth', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'Appointment', headerName: 'Appointment', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'Employee_Type', headerName: 'Employee Type', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'Date_Of_Employment', headerName: 'Date of Employment', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'Bank_Account_No', headerName: 'Bank Account No.', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ },
        { field: 'SSNIT_No', headerName: 'SSNIT No.', headerClassName: 'display-employees-grid-header', width: 120, /*renderHeader: ( ) => ( <p className='font-bold'> Employee ID </p>)*/ }

    ];
            

    const dynamicRows: GridRowsProp = AllEmployeesArray.map(( employee: any ) => (
        { 
            id: employee.vagEmployeeID,
            Employee_Photo: employee.employeePhoto,
            Employee_ID: employee.vagEmployeeID,
            First_Name: employee.firstName,
            Last_Name: employee.lastName,
            Other_Names: employee.otherNames,
            Sex: employee.gender,
            Mobile_Number: employee.primaryMobileNumber,
            E_mail: employee.primaryEmail,
            Date_Of_Birth: employee.dateOfBirth,
            Appointment: employee.appointment,
            Employee_Type: employee.typeOfEmployee,
            Date_Of_Employment: employee.dateOfEmployment,
            Bank_Account_No: employee.bankAccountNumber,
            SSNIT_No: employee.ssnitNumber
        }
    ))



    return (
        <div className='flex'>
            <div>
                <ProSidebar />
            </div>

            <div style={{ width: '94%' }} className='main_content_styling'>
                <h4 className='page-header-text'>Employee Roster: Workforce Details</h4>
                {
                    loadingAllEmployees === true ?
                    <SpinLoading />
                    :
                    <div style={{ height: '80%', width: '97%', padding: '2%', marginLeft: '1%' }}>
                        <DataGrid 
                            sx={{ 
                                boxShadow: 3, 
                                border: 'none',
                                '& .MuiDataGrid-row:hover': { backgroundColor: '#6495ED'},
                            }}
                            rows={ dynamicRows } 
                            columns={ columns } 
                            rowHeight={ 75 }
                            getRowClassName={ ( params ) => (
                                params.indexRelativeToCurrentPage % 2 === 0 ? 'even-rows' : 'odd-rows'
                                
                            )} 
                            onRowDoubleClick={( rows ) => navigate(`/fetch-employee-details/${ rows.id }`) }
                            />
                    </div>

                }
            </div>

        </div>
    )
}


export default ViewAllEmployees
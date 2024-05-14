import { useState, useEffect } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import Avatar from '@mui/material/Avatar'
// font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'





const ViewAllEmployees = ( ) => {
    const navigate = useNavigate()

    // setting up state.
    const [ AllEmployeesArray, setAllEmployeesArray ] = useState([ ])
    const [ loadingAllEmployees, setLoadingAllEmployees ] = useState<boolean>( true )


    // effect hook to fetch all employees.
    useEffect(() => {
        const FetchAllEmployees = async () => {
            let response = await fetch( `${ import.meta.env.VITE_PROD_SERVER_URL }/get/fetch-all-employees`, {
                method: 'GET'
            })
            if( response.status === 200 ) {
                let data = await response.json() 
                setAllEmployeesArray( data )
                setLoadingAllEmployees( false )
                console.log(`all employees = ${ AllEmployeesArray }`)

                setTimeout(() => { console.log( AllEmployeesArray )}, 500 )
            }
            else {
                console.log('failed to fetch all employees due to error')
            }

        }
        FetchAllEmployees()

    }, [ ])



    // data table.
    const columns: GridColDef[] = [
        { field: 'Employee_Photo', headerName: 'Photo',
          headerClassName: 'display-employees-grid-header',
          renderCell: (( params: any ) => <Avatar src={ params.value } sx={{ width: 60, height: 60, marginTop: 1 }} /> )
        },
        { field: 'Employee_ID', headerName: 'Employee ID', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'First_Name', headerName: 'First Name', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Last_Name', headerName: 'Last Name', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Other_Names', headerName: 'Other Name(s)', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Gender', headerName: 'Gender', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Mobile_Number', headerName: 'Mobile Number', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'E_mail', headerName: 'E-mail', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Date_Of_Birth', headerName: 'Date Of Birth', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Appointment', headerName: 'Appointment', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Employee_Type', headerName: 'Employee Type', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Date_Of_Employment', headerName: 'Date of Employment', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Bank_Account_No', headerName: 'Bank Account No.', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'SSNIT_No', headerName: 'SSNIT No.', headerClassName: 'display-employees-grid-header', width: 150 }

    ];
            

    const dynamicRows: GridRowsProp = AllEmployeesArray.map(( employee: any ) => (
        { 
            id: employee.vagEmployeeID,
            Employee_Photo: employee.employeePhoto,
            Employee_ID: employee.vagEmployeeID,
            First_Name: employee.firstName,
            Last_Name: employee.lastName,
            Other_Names: employee.otherNames,
            Gender: employee.gender,
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

            <div style={{ width: '94%' }}>
                <h4 className='mt-4 ml-4 text-center font-semibold italic'>List Of Employees</h4>
                {
                    loadingAllEmployees === true ?
                    <div className='text-center md:my-48 loading-emps-div'>
                        <FontAwesomeIcon icon={ faSpinner } className='mb-3' size='2x' spinPulse color='#808080' />
                        <h5 className='text-blue-600 font-semibold italic fetching-emps-text-res'>fetching employees, please wait....</h5>
                    </div>
                    :
                    <div style={{ height: '80%', width: '100%', padding: '1%' }}>
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
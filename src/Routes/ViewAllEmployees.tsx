import { useState, useEffect } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import Avatar from '@mui/material/Avatar'




const ViewAllEmployees = ( ) => {

    // setting up state.
    const [ AllEmployeesArray, setAllEmployeesArray ] = useState([ ])


    // effect hook to fetch all employees.
    useEffect(() => {
        const FetchAllEmployees = async () => {
            let response = await fetch('https://vag-ems-server.onrender.com/get/fetch-all-employees', {
                method: 'GET'
            })
            if( response.status === 200 ) {
                let data = await response.json() 
                setAllEmployeesArray( data )
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
        { field: 'Position', headerName: 'Position', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Department', headerName: 'Department', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Date_Of_Employment', headerName: 'Date of Employment', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Bank_Account_No', headerName: 'Bank Account No.', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'SSNIT_No', headerName: 'SSNIT No.', headerClassName: 'display-employees-grid-header', width: 150 }

    ];
            

    const dynamicRows: GridRowsProp = AllEmployeesArray.map(( employee: any ) => (
        { 
            id: employee._id,
            Employee_Photo: employee.employeePhoto,
            Employee_ID: employee.vagEmployeeID,
            First_Name: employee.firstName,
            Last_Name: employee.lastName,
            Other_Names: employee.otherNames,
            Gender: employee.gender,
            Mobile_Number: employee.primaryMobileNumber,
            E_mail: employee.primaryEmail,
            Date_Of_Birth: employee.dateOfBirth,
            Position: employee.position,
            Department: employee.department,
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

            <div style={{ width: '93%' }}>
                <h3 className='mt-4 ml-4'>List Of Employees</h3>
                <div style={{ height: '85%', width: '100%', padding: '1%' }}>
                    <DataGrid 
                        rows={ dynamicRows } 
                        columns={ columns } 
                        rowHeight={ 75 }
                        getRowClassName={( params ) => params.indexRelativeToCurrentPage % 2 === 0 ? 'even-rows' : 'odd-rows' }/>
                </div>
            </div>
        </div>
    )
}


export default ViewAllEmployees
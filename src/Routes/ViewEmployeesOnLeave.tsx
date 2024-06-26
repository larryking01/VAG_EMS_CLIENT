import { useState, useEffect } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import SpinLoading from '../Navigation/SpinLoading'




const ViewAllEmployeesOnLeave = ( ) => {

    // server urls
    // dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL

    const [ AllStaffOnLeaveArray, setAllStaffOnLeaveArray ] = useState([ ])
    const [ loadingAllStaffOnLeave, setLoadingAllStaffOnLeave ] = useState<boolean>( true )



    // effect hook to fetch all staff on leave.
    useEffect(() => {
        const FetchAllStaffOnLeaveOrPass = async ( ) => {
            let response = await fetch(`${ server_url }/get/fetch-all-leave-records`, {
            method: 'GET'
            })
            if( response.status === 200 ) {
                let totalStaffOnLeaveOrPass = await response.json()
                setLoadingAllStaffOnLeave( false )
                setAllStaffOnLeaveArray( totalStaffOnLeaveOrPass )
                console.log('all staff on leave fetched successfully')
                console.log( AllStaffOnLeaveArray )
            }
            else {
                console.log(`failed to fetch all staff on leave`)
                setAllStaffOnLeaveArray([ ])
            }
        }
        FetchAllStaffOnLeaveOrPass()
    
    
    }, [ ])



    // the data-table definition
    const columns: GridColDef[ ] = [
        { field: 'Employee_ID', headerName: 'Employee ID', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'First_Name', headerName: 'First Name', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Last_Name', headerName: 'Last Name', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Other_Names', headerName: 'Other Names', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Leave_Start_Date', headerName: 'Leave Start Date', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Leave_End_Date', headerName: 'Leave End Date', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Type_Of_Leave', headerName: 'Type Of Leave', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Reason_For_Leave', headerName: 'Reason For Leave', headerClassName: 'display-employees-grid-header', width: 150 },
    ]


    const dynamicRows: GridRowsProp = AllStaffOnLeaveArray.map(( staff: any ) => (
        {
            id: staff.vagEmployeeID,
            Employee_ID: staff.vagEmployeeID,
            First_Name: staff.employeeFirstName,
            Last_Name: staff.employeeLastName,
            Other_Names: staff.employeeOtherNames,
            Leave_Start_Date: staff.leaveStartDate,
            Leave_End_Date: staff.leaveEndDate,
            Type_Of_Leave: staff.typeOfLeave,
            Reason_For_Leave: staff.reasonForLeave
        }
    ))






    return (
        <div className='flex'>
            <ProSidebar /> 

            <div style={{ width: '94%' }} className='main_content_styling'>
                <h4 className='page-header-text'>On Leave: Employee Pass Log</h4>
                {
                    loadingAllStaffOnLeave === true ?
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
                                // onRowDoubleClick={( rows ) => navigate(`/fetch-employee-details/${ rows.id }`) }
                                />
                        </div>
                    
                }
            </div>

        </div>
    )

}


export default ViewAllEmployeesOnLeave
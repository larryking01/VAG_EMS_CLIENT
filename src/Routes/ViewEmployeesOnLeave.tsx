import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ProSidebar from "../Navigation/ProSidebar"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import SpinLoading from '../Navigation/SpinLoading'
import IconButton from '@mui/material/IconButton'
import { MdModeEdit } from "react-icons/md"
import { MdDelete } from "react-icons/md"

import ErrorDialog from './ErrorDialog'
import ActionDialog from './ActionDialog'






const ViewAllEmployeesOnLeave = ( ) => {

    const navigate = useNavigate()

    const deletePassRecordID = useRef<any>( )

    // server urls
    // dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL

    const [ AllStaffOnLeaveArray, setAllStaffOnLeaveArray ] = useState([ ])
    const [ loadingAllStaffOnLeave, setLoadingAllStaffOnLeave ] = useState<boolean>( true )

    // for error dialog
    const [ openErrorDialog, setOpenErrorDialog ] = useState<boolean>( false )

    // for action dialog
    const [ openActionDialog, setOpenActionDialog ] = useState<boolean>( false )


    // function to fetch all staff on leave.
    const FetchAllStaffOnLeaveOrPass = async ( ) => {
        try {
            const controller = new AbortController()
            const id = setTimeout(() => controller.abort, 10000 )
            let response = await fetch(`${ server_url }/get/fetch-all-leave-records`, {
                method: 'GET',
                signal: controller.signal
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
            clearTimeout( id )
        }
        catch( error ) {
            console.log(`error is ${ error }`)
            setLoadingAllStaffOnLeave( false )
            HandleOpenErrorDialog()
            // alert('bad network connection.. try again later')
            
        }
    }


    // effect hook to fetch all staff on leave.
    useEffect(() => {
        FetchAllStaffOnLeaveOrPass()
    
    }, [ ])


    // for the error dialog
    const HandleOpenErrorDialog = ( ) => {
        setOpenErrorDialog( true )
    }

    const HandleCloseErrorDialog = ( ) => {
        setOpenErrorDialog( false )
    }


    // for the action dialog
    const HandleOpenActionDialog = ( ) => {
        // console.log(`del leave id = ${ deletePassRecordID.current }`)
        setOpenActionDialog( true )
    }

    const HandleCloseActionDialog = ( ) => {
        setOpenActionDialog( false )
    }

    // function to delete leave record
    const DeleteLeaveOrPassRecord = async ( params: any ) => {
        let response = await fetch(`${ server_url }/del/delete-employee-leave-instance/${ params.current }`, {
            method: 'DELETE'
        })

        if( response.status === 200 ) {
            HandleCloseActionDialog()
            FetchAllStaffOnLeaveOrPass()
        }
        else {
            HandleCloseActionDialog()
            alert(`failed to delete leave record, ${ params.current }`)
        }
        
    }


    // the data-table definition
    const columns: GridColDef[ ] = [
        { field: 'Actions', headerName:'Actions', headerClassName: 'display-employees-grid-header', width: 120,
          renderCell: (( params: any ) => 
            <div>
                <IconButton aria-label='Edit Leave Record' onClick={() => navigate(`/leave-record-details/${ params.id }`)}>
                    <MdModeEdit color='#4B49AC' />
                </IconButton>

                <IconButton aria-label='Delete Leave Record' onClick={ HandleOpenActionDialog }>
                    <MdDelete color='#D22B2B' />
                </IconButton>

            </div>
            ) 
         },
        { field: 'Employee_ID', headerName: 'Employee ID', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'First_Name', headerName: 'First Name', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Last_Name', headerName: 'Last Name', headerClassName: 'display-employees-grid-header', width: 150 },
        // { field: 'Other_Names', headerName: 'Other Names', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Contact', headerName: 'Contact', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Leave_Start_Date', headerName: 'Leave Start Date', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Leave_End_Date', headerName: 'Leave End Date', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Number_Of_Days', headerName: 'Number Of Days', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Type_Of_Leave', headerName: 'Type Of Leave', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Reason_For_Leave', headerName: 'Reason For Leave', headerClassName: 'display-employees-grid-header', width: 150 },
    ]


    const dynamicRows: GridRowsProp = AllStaffOnLeaveArray.map(( staff: any ) => (
        {
            id: staff.vagEmployeeID,
            Employee_ID: staff.vagEmployeeID,
            First_Name: staff.employeeFirstName,
            Last_Name: staff.employeeLastName,
            // Other_Names: staff.employeeOtherNames,
            Contact: staff.contactNumber,
            Leave_Start_Date: staff.leaveStartDate,
            Leave_End_Date: staff.leaveEndDate,
            Number_Of_Days: staff.lengthOfLeaveDays,
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
                                onRowClick={( rows ) => {
                                    deletePassRecordID.current = rows.id
                                    console.log(`leave record to del = ${ deletePassRecordID.current }`)
                                }}
                                onRowDoubleClick={( rows ) => navigate(`/leave-record-details/${ rows.id }`) }
                                />
                        </div>
                }
            </div>

            <ErrorDialog open={ openErrorDialog } handleClose={ HandleCloseErrorDialog }
                         dialogContentText="Oops! It looks like we're having trouble loading the dashboard. Please check your internet connection and refresh the page."/>

            <ActionDialog open={ openActionDialog } handleClose={ HandleCloseActionDialog }
                          handleDelete={() => DeleteLeaveOrPassRecord( deletePassRecordID )} dialogTitle='Delete Leave/Pass Record' 
                          dialogContentText='Are you sure you want to erase leave/pass record from the database? This action cannot be undone.' />
        </div>
    )

}


export default ViewAllEmployeesOnLeave